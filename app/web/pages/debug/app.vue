<template>
  <div v-show="visible" class="debug-wrap">
    <div @click="handleClose" class="ui-close-btn close-btn"></div>
    <div class="debug-main">
      <div class="url-box">
        <input v-model="frameUrl" class="url-box__input" type="text">
        <a class="btn-save" href="javascript:;" @click="handleLoadIframe">加载</a>
        <div class="operate-btn-box">
          <a class="btn-save" href="javascript:;" @click="handleLoadPage">重新加载页面</a>
          <a class="btn-save" href="javascript:;" @click="handleRefresh">刷新页面</a>
          <a class="btn-save" href="javascript:;" @click="handleDebug">调试</a>
          <a class="btn-save" href="javascript:;" @click="handleSave">保存</a>
        </div>
      </div>
      <div class="debug-box">
        <div class="preview-wrapper">
          <div id="js-preview" class="preview-box"></div>
        </div>
        <div class="debug-editor-box">
          <h6 class="debug-editor__title">html代码：<a class="full-screen" @click="handleFullScreen('html')" href="javascript:;">全屏</a></h6>
          <ace-editor
            class="debug-editor"
            ref="codeHtmlString"
            editorId="codeHtmlString"
            height="180px"
            :content="codeHtmlString"
            lang="html"
            @change="handleEditorHtmlChange($event)"
          ></ace-editor>
          <h6 class="debug-editor__title">样式代码：<a class="full-screen" @click="handleFullScreen('style')" href="javascript:;">全屏</a></h6>
          <ace-editor
            class="debug-editor"
            ref="codeStyleString"
            editorId="codeStyleString"
            height="180px"
            :content="codeStyleString"
            lang="css"
            @change="handleEditorStyleChange($event)"
          ></ace-editor>
          <h6 class="debug-editor__title">脚本代码（只支持es5语法）：<a class="full-screen" @click="handleFullScreen('script')" href="javascript:;">全屏</a></h6>
          <ace-editor
            class="debug-editor"
            ref="codeScriptString"
            editorId="codeScriptString"
            height="180px"
            :variable="editorVar"
            :content="codeScriptString"
            lang="javascript"
            @change="handleEditorScriptChange($event)"
          ></ace-editor>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Postmate from 'postmate';
import AceEditor from '@/components/ace-editor.vue';
import { getObjectFunction, getProcessFunc, getComponentProps } from './helper';
import legoUtil from '@jyb/lego-util';

export default {
  components: {
    AceEditor
  },
  data() {
    return {
      visible: false,
      editorVar: {}, // 编辑器智能提示变量
      frameUrl: '',
      userInfo: window.userInfo || {},
      codeHtmlString: '',
      codeStyleString: '/* css */\n',
      codeScriptString: '(function() {\n  // do something\n})();'
    };
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.setDefaultCodeValue();
        this.frameReload();
      }
    }
  },
  methods: {
    setDefaultCodeValue() {
      if (!this.codeStyleString) {
        this.codeStyleString = '/* css */\n';
      }
      if (!this.codeScriptString) {
        this.codeScriptString = '(function() {\n  // do something\n})();';
      }
    },
    initVariable(componentConfig) {
      const variable = [];
      const editorVar = {};
      // 通用方法和属性
      getObjectFunction(legoUtil, variable);
      variable.forEach((v) => {
        const processFunc = getProcessFunc(v.type);
        editorVar[processFunc.getKey(v)] = {
          value: processFunc.getValue(v),
          desc: processFunc.getLabel(v)
        }
      });
      // 组件数据
      if (Array.isArray(componentConfig)) {
        componentConfig.forEach((item) => {
          editorVar[item.uid] = {
            value: item.uid,
            desc: `组件${item.name}，ID为${item.uid}`
          }
          // 组件属性
          getComponentProps(item).forEach((prop) => {
            editorVar[`${prop.name}.${prop.propName}`] = {
              value: prop.propName,
              desc: `${prop.type}类型`
            };
          });
        });
      }
      this.editorVar = editorVar;
    },
    frameReload() {
      if (this.childAPI) {
        this.childAPI.destroy();
        this.childAPI = null;
        this.createPostmate();
      } else {
        this.createPostmate();
      }
    },
    handleFullScreen(type) {
      switch (type) {
        case 'html': {
          this.$refs.codeHtmlString.fullScreen();
          break;
        }
        case 'style': {
          this.$refs.codeStyleString.fullScreen();
          break;
        }
        case 'script': {
          this.$refs.codeScriptString.fullScreen();
          break;
        }
        default: {
          break;
        }
      }
    },
    handleLoadIframe() {
      this.frameReload();
    },
    handleLoadPage() {
      const legoEditor = window.LegoEditor || {};
      if (legoEditor.preview && typeof legoEditor.preview.saveAndCreatePage === 'function') {
        legoEditor.preview.saveAndCreatePage(() => {
          this.frameReload();
        }, 'debug');
      }
    },
    handleEditorHtmlChange(val) {
      this.codeHtmlString = val;
    },
    handleEditorScriptChange(val) {
      this.codeScriptString = val;
    },
    handleEditorStyleChange(val) {
      this.codeStyleString = val;
    },
    handleClose() {
      this.visible = false;
    },
    handleDebug(e) {
      if (this.childAPI) {
        this.childAPI.call('injectStyle', { code: this.codeStyleString });
        this.childAPI.call('injectString', { content: this.codeHtmlString });
        this.childAPI.call('evalFunc', { code: this.codeScriptString });
      }
    },
    handleRefresh() {
      if (this.childAPI) {
        this.childAPI.call('refresh');
      }
    },
    handleSave() {
      this.$emit('save', {
        html: this.codeHtmlString || '',
        style: this.codeStyleString || '',
        script: this.codeScriptString || ''
      });
      this.visible = false;
    },
    removeChild(el) {
      if (el.children && el.children.length > 0) {
        [].slice.call(el.children, 0).forEach(item => el.removeChild(item));
      }
    },
    createPostmate() {
      const $preview = document.getElementById('js-preview');
      if ($preview && this.frameUrl) {
        this.removeChild($preview);
        const handshake = new Postmate({
          container: $preview,
          url: this.frameUrl
        });
        handshake.then((child) => {
          this.childAPI = child;
          this.listenEvent();
        });
      }
    },
    listenEvent() {
      this.childAPI.on('get-component-config', (data) => {
        try {
          const json = JSON.parse(data);
          this.initVariable(json);
        } catch (e) {}
      });
    }
  },
  mounted() {
    this.createPostmate();
  }
}
</script>
<style lang="scss" scoped>
.ui-d-ib {
  display: inline-block;
}
.ui-ta-r {
  text-align: right
}
.full-screen {
  color: #409EFF;
}

.preview-wrapper {
  position: relative;
  width: 330px;
  height: 645px;
  margin: 0 50px 0 26px;
  background: url(./img/iphonex_bg.png) no-repeat center 0;
  background-size: 100%;
}

.preview-box {
  position: absolute;
  top: 63px;
  left: 21px;
  right: 23px;
  bottom: 22px;
  overflow: hidden;
  border-radius: 0 0 35px 35px;
  border: 1px solid #edf0f4;
  border-top: none;
  background-color: #edf0f4;
}

.debug-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background-color: #fff;
}

.debug-main {
  width: 1000px;
  padding-top: 12px;
  margin-left: auto;
  margin-right: auto;
}

.url-box {
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid #ccc;
}

.url-box__input {
  width: 480px;
}

.operate-btn-box {
  float: right;
}

.debug-box {
  display: flex;
  justify-content: space-around;
}

.debug-editor {
  border: 1px solid #ccc;
}

.debug-editor-box {
  width: 600px;
  padding-top: 4px;
}

.debug-editor__title {
  margin-bottom: 4px;
  font-size: 14px;
}

#js-preview {
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
}

.debug-editor {
  margin-bottom: 10px;
}

.btn-save {
  display: inline-block;
  padding: 4px 8px;
  background-color: #ed6c44;
  font-size: 13px;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
}

.close-btn {
  z-index: 2002;
}
</style>


