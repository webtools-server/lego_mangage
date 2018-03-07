define(function (require, exports, module) {

  var vueComponent = require("./jyb.vue.ninegrid");
  var Factory = require('./jyb.vue.edit.factory');
  var moduleUploader = require('./mpm.sys.h5fileupload');
  var defaultTplEdit = '/public/template/new/ninegrid/edit.html';
  var moduleDataCenter = "";
  var moduleBasicInfo = "";
  var uploadDom = "";

  var _Class = Factory.getClass({
    vueComponent: vueComponent,
    defaultTplEdit: defaultTplEdit,
    type: 'ninegrid',
    data: {
      styleKey: '',
      "didTrigger": false,//生成页面的时候，这里为False
      "didFinish": false,//生成页面的时候，这里为False
      "lazyLoad": false,
      "isShowNpmVersions": USER_INFOR.isAdmin, 
      "gridtype": 0,
      "gridcmd": "",
      "gridactid": "",
      "npmversion": "",
      "npmversionArr": [],
      "npmname": "@lego/ninegrid",
      "tplid": "", //模板ID 
      'comTplId': '2',//组件ID
      "gridspadding": {
        "pdtop": "",
        "pdbtm": "",
        "pdlr": ""
      },
      "eventid":"",
      "gridsOuter": {
        "cornerImg": "",
        "outerbgcolor": "",
        "innerbgcolor": "",
        "titleup": "",
        "titledown": "",
        "titlecolor": "",
        "showbaoflag": 0,
        "baocolor": "",
        "isawardtimeflag": 0,
        "awardtimecolor": "",
        "borderImg": "https://cdn.jyblife.com/act/201708/platform/assets/images/index/light.png"
      },
      "gridList": [
        { desone: "", destwo: "", flag: 1, desthree: "", desfour: "", gridbackimg: "", useurl: "", updescolor: "", downdescolor: "" },
        { desone: "", destwo: "", flag: 2, desthree: "", desfour: "", gridbackimg: "", useurl: "", updescolor: "", downdescolor: "" },
        { desone: "", destwo: "", flag: 3, desthree: "", desfour: "", gridbackimg: "", useurl: "", updescolor: "", downdescolor: "" },
        { desone: "", destwo: "", flag: 8, desthree: "", desfour: "", gridbackimg: "", useurl: "", updescolor: "", downdescolor: "" },
        { desone: "", destwo: "", flag: 9, desthree: "", desfour: "", gridbackimg: "", useurl: "", updescolor: "", downdescolor: "" },
        { desone: "", destwo: "", flag: 4, desthree: "", desfour: "", gridbackimg: "", useurl: "", updescolor: "", downdescolor: "" },
        { desone: "", destwo: "", flag: 7, desthree: "", desfour: "", gridbackimg: "", useurl: "", updescolor: "", downdescolor: "" },
        { desone: "", destwo: "", flag: 6, desthree: "", desfour: "", gridbackimg: "", useurl: "", updescolor: "", downdescolor: "" },
        { desone: "", destwo: "", flag: 5, desthree: "", desfour: "", gridbackimg: "", useurl: "", updescolor: "", downdescolor: "" }
      ]
    },
    watch: ['data.styleKey', "data.gridList", "data.gridtype", "data.gridsOuter", "data.gridspadding"]
  });

  _Class.prototype.showCB = function () {
    var that = this;
    var config = this.config;
    var styleObj = this._getStyle();

    /* 模板 */
    require.async('./mpm.sys.dataCenter', function (module) {
      moduleDataCenter = module;
    });
    require.async('./mpm.sys.basicInfo', function (module) {
      moduleBasicInfo = module;
    });

    var pageInfo = moduleBasicInfo.showMePageInfo();
    var folderSet = moduleBasicInfo.showMeFolderName();

    var path = pageInfo.datefolder + "/" + folderSet.sub + "/";

    this.obj.data.isShowNpmVersions = USER_INFOR.isAdmin;
    moduleDataCenter.getnodeversions("@lego/ninegrid", path, function (json) {
     if(json.code == 0){
      var _data = json.data.version_list;
      that.obj.data.npmversionArr = _data;
      if (!that.obj.data.npmversion) {
        that.obj.data.npmversion = _data[_data.length - 1].version;
      }
     }
    });

    moduleDataCenter.getTplList( that.obj.data.comTplId || '2', function (json) { // 由组件ID获取对应组件的所有模板
      if (json.code == 0) {
        that.obj.data.tplList = json.data.data;
      }
    });

    /* 模板 */

    this.extendObj(styleObj.com_extend);
    this.obj.data.fnObj = window.vueFnObj['fn_' + this.obj.data.styleKey];
    this.domStyle = this.addCssByStyle(styleObj.com_css);

    this._showRightList();
    this._appendShowDom();
    this._appendEditDom();
  };
  _Class.prototype._appendEditDom = function () {
    var that = this;
    var config = this.config;
    var styleObj = this._getStyle();
    var editDom = $('#editbox_' + this.obj.uid).append($(that.tplEdit))[0];

    //编辑
    this.domEdit = new Vue({
      el: editDom,
      data: {
        obj: that.obj,
        arrStyle: that.arrStyle,
        showStyle: true,
        showProperty: false,
        oldObj: {
          data: {}
        }
      },
      created: function () {
        // `this` 指向 vm 实例
        Object.assign(this.oldObj.data, this.obj.data);
      },
      events: {},
      watch: {
        'obj.data.styleKey': {
          handler: function (val, oldVal) {
            this.$nextTick(function () {

            })
          },
          deep: false
        }
      },
      methods: {
        change: function () { //点击保存
          for (var i = 0; i < that.__config.watch.length; i++) {
            var arr = that.__config.watch[i].split('.');
            if (arr[1] == 'styleKey') {
              continue;
            }
            this.oldObj.data[arr[1]] = this.obj.data[arr[1]];
          }
          that.rebuildShowComponent();
        },
        chancel: function () {
          for (var i = 0; i < that.__config.watch.length; i++) {
            var arr = that.__config.watch[i].split('.');
            if (arr[1] == 'styleKey') {
              continue;
            }
            this.obj.data[arr[1]] = this.oldObj.data[arr[1]];
          }
        },
        show: function (index) {
          if (index == 0) {
            this.showStyle = true;
            this.showProperty = false;
          } else {
            this.showStyle = false;
            this.showProperty = true;
          }
          this.$nextTick(function () {
          })
        },
        selectNpmVersion: function () {
          require.async('./mpm.sys.basicInfo', function (module) {
            moduleBasicInfo = module;
          });
          var pageInfo = moduleBasicInfo.showMePageInfo(),
            folderSet = moduleBasicInfo.showMeFolderName(),
            path = pageInfo.datefolder + "/" + folderSet.sub + "/";
          moduleDataCenter.updataversion(this.obj.data.npmversion, '@lego/ninegrid', path, function () {
            console.log("update ninegrid ok ");
          });
        },
        toConfigTree: function () {
          var moduleUtil, me = this;
          require.async('./mpm.sys.util', function (module) {
            moduleUtil = module;
          });
          var divComponentIframe = $("#divComponentIframe");
          var _pageid = moduleBasicInfo.showMePageInfo().id,
            _tpl_id = this.obj.data.tplid,
            _act_id = moduleUtil.getUrlQuery('act_id'),
            _comid = this.obj.uid.replace("com_", "");
          if (!_tpl_id) {
            alert("请先选择对应的模板");
            return;
          }
          // /ConfigTreeLego/:tpl_id/:pageid/:comid/:act_id
          var _url = location.origin + '/#/ConfigTreeLego/' + 
                    _tpl_id + '/' + 
                    _pageid + '/' + 
                    _comid + '/' + 
                    _act_id,
            key = _pageid + "_" + _comid + "_" + _tpl_id + "_" + _act_id;

          divComponentIframe.find("iframe")[0].src = _url;
          divComponentIframe.show();

          window.addEventListener("message", function (e) {
            var json = JSON.parse(e.data);
            if (json[key]) {
              var cmds = JSON.parse(json[key]);
                me.obj.data.gridcmd = cmds[0];
                me.obj.data.gridactid = _act_id;
            }
          }, true);
        }
      }
    });

    $(that.domEdit.$el).attr('id', 'editbox_' + that.obj.uid);

  };

  exports.getComponent = function (config, callback) {
    var component = new _Class(config, callback);
    if (!component.config.obj.title) {
      component.config.obj.title = '';
    }

    return component;
  };
});

