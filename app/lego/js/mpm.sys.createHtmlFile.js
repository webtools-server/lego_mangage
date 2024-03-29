
define(function (require, exports, module) {
  var $ = require('zepto'),
      modulePageAddition = require('./mpm.sys.addition'),
      moduleBasicInfo = require('./mpm.sys.basicInfo'),
      moduleDataCenter = require('./mpm.sys.dataCenter');
  var templateIndex = 1;
  var publishflag = "save";
  var pageInfo;
  var engineEntranceFile;
  var templatePageContent;
  var callback;

  require.async('./mpm.sys.util', function (module) {
    moduleUtil = module;
  });

  require.async('./mpm.sys.structure', function (module) {
    moduleStructure = module;
  });

  var getTemplatePageContent = function (type, cb) {//这个cb是得到模板文件后的处理回调,一般是createFile里生成的匿名函数，
    var file;
    templateIndex = type;
    if (type == 1) {
      file = 'vue_common';
    } else if (type == 2) {
      file = 'vue_share';
    } else if (type == 3) {
      file = 'vue_pc';
    } else {
      moduleUtil.alert('获取模板文件出错,请检查页面基本信息');
      return;
    }

    $.get(location.origin + '/public/template/' + file + '.shtml?r=' + Math.random(), function (html) {
      templatePageContent = html;
      cb(html);
    });
  };

  function onSourceHTML() {
    engineEntranceFile = true;
    if (!engineEntranceFile || !templatePageContent) {
      return;
    }

    var html = templatePageContent;
    var title = pageInfo.name;

    var mpmPageContent = moduleStructure.getPageContentSource();//window._componentConfig
    var shareInfo = moduleBasicInfo.getShareSource();//window.shareConfig

    var allTemplate = moduleStructure.getAllTemplate();
    var allCss = moduleStructure.getAllCss();
    var extendJS = moduleStructure.getExtendJS();//window.vueFnObj
    var pageConfig = moduleStructure.getPageConfig();//window.pageConfig
    var folder = moduleBasicInfo.showMeFolderName();
    var inputPageName = moduleBasicInfo.showMeInputPageName();
    var sincludeFile = moduleUtil.component.getSincludeUrl();
    var globalConfig = {
      actId:moduleUtil.getUrlQuery('act_id'),
      pageId: moduleUtil.getUrlQuery('page_id')
    }
    var globalConfigStr = 'window.globalConfig = ' + JSON.stringify(globalConfig, null, '    ') + ';';

    var pagetype = $("#selectPageType").val();

    html = html.replace('{title}', '[title]').replace('{{[title]}}', title);
    html = html.replace('{mpmPageContent}', '[mpmPageContent]').replace('{{[mpmPageContent]}}', mpmPageContent);

    html = html.replace('{pageConfig}', '[pageConfig]').replace('{{[pageConfig]}}', pageConfig);//window.pageConfig
    html = html.replace('{globalConfig}', '[globalConfig]').replace('{{[globalConfig]}}', globalConfigStr);//window.globalConfig

    html = html.replace('{extendJS}', '[extendJS]');//.replace('{{[extendJS]}}', extendJS);

    html = html.replace('{data}', '[data]');//.replace('{{[data]}}', mpmPageContent);
    html = html.replace('{template}', '[template]').replace('{{[template]}}', allTemplate);
    html = html.replace('{css}', '[css]').replace('{{[css]}}', allCss);
    html = html.replace('{{{engine}}}', engineEntranceFile);
    html = html.replace('{{{shareInfo}}}', shareInfo);
    html = html.replace('{{{timestamp}}}', 't=' + (new Date()).getTime());
    //预览按钮
    html = html.replace('{previewJS}', '[previewJS]');//.replace('{{[extendJS]}}', extendJS);
    // html = html.replace(new RegExp('{previewRoot}','g'), '[previewRoot]');//.replace('{{[extendJS]}}', extendJS);

    var bodyBgColor = pageInfo.bgColor;
    bodyBgColor = bodyBgColor ? 'style=background-color:' + bodyBgColor : '';
    html = html.replace('{bodyBgColor}', '[bodyBgColor]').replace('{{[bodyBgColor]}}', bodyBgColor);

    //生成对应的config文件
    var mpmData = moduleUtil.component.getMPMData(),
      comConfig = "var vuecomponents = { \n ";
    var devFlag = moduleUtil.getUrlQuery('mdev');
    var devFolder = devFlag ? "dev/" : "";
    // 自定义代码
    var customCodeSource = "";
    var customScriptCodeSource = "";
    var customStyleCodeSource = "";

    if (moduleUtil.getUrlQuery("page_id") == 19 || moduleUtil.getUrlQuery("page_id") > 236) {
      for (var key in mpmData) {
        var _data = mpmData[key],
          _type = _data.type,
          _name = _data.name;
        if (_type == 'commontag' && comConfig.indexOf("@lego/commontag") == -1) {
          comConfig += "commontag:require('@lego/commontag'), \n "
        } else if (_type == 'jybregister' && comConfig.indexOf("userregister") == -1) {
          comConfig += "userregister:require('@lego/jybregister'), \n "
        } else if (_type == 'productlist' && comConfig.indexOf("productlist") == -1) {
          comConfig += "productlist:require('@lego/productlist'), \n "
        } else if (_type == 'ninegrid' && comConfig.indexOf("ninegrid") == -1) {
          comConfig += "ninegrid:require('@lego/ninegrid'), \n "
        } else if (_type == 'jybwxhkpay' && comConfig.indexOf("jybwxhkpay") == -1) {
          comConfig += "jybwxhkpay:require('@lego/jybwxhkpay'), \n "
        } else if (_type == 'jybswitchlist' && comConfig.indexOf("jybswitchlist") == -1) {
          comConfig += "jybswitchlist:require('@lego/jybswitchlist'), \n "
        } else if (_type == 'jybranklist' && comConfig.indexOf("jybranklist") == -1) {
          comConfig += "jybranklist:require('@lego/jybranklist'), \n "
        } else if (_type == 'jybactrolling' && comConfig.indexOf("jybactrolling") == -1) {
          comConfig += "jybactrolling:require('@lego/jybactrolling'), \n "
        } else if (_type == 'jybexchange' && comConfig.indexOf("jybexchange") == -1) {
          comConfig += "jybexchange:require('@lego/jybexchange'), \n "
        } else if (_type == 'jybpay' && comConfig.indexOf("jybpay") == -1) {
          comConfig += "jybpay:require('@lego/jybpay'), \n "
        } else if (_type == 'jybfigure' && comConfig.indexOf("jybfigure") == -1) {
          comConfig += "jybfigure:require('@lego/jybfigure'), \n "
        } else if (_type == 'jybimgmap' && comConfig.indexOf(".jybimgmap") == -1) {
          comConfig += "jybimgmap:require('@lego/jybimgmap'), \n "
        } else if (_type == 'jybtasks' && comConfig.indexOf(".jybtasks") == -1) {
            comConfig += "jybtasks:require('@lego/jybtasks'), \n "
        } else if (_type == 'jybsignin' && comConfig.indexOf(".jybsignin") == -1) {
            comConfig += "jybsignin:require('@lego/jybsignin'), \n "
        }  else if (_type == 'jybcoupon' && comConfig.indexOf(".jybcoupon") == -1) {
            comConfig += "jybcoupon:require('@lego/jybcoupon'), \n "
        }  else if (_type == 'jybslider' && comConfig.indexOf(".jybslider") == -1) {
          comConfig += "jybslider:require('@lego/jybslider'), \n "
        }  else if (_type == 'jybbuynow' && comConfig.indexOf(".jybbuynow") == -1) {
          comConfig += "jybbuynow:require('@lego/jybbuynow'), \n "
        }  else if (_type == 'jybnews' && comConfig.indexOf(".jybnews") == -1) {
          comConfig += "jybnews:require('@lego/jybnews'), \n "
        }  else if (_type == 'jybdrawcard' && comConfig.indexOf(".jybdrawcard") == -1) {
          comConfig += "jybdrawcard:require('@lego/jybdrawcard'), \n "
        }  else if (_type == 'jybvideo' && comConfig.indexOf(".jybvideo") == -1) {
          comConfig += "jybvideo:require('@lego/jybvideo'), \n "
        }  else if (_type == 'jybcouponrain' && comConfig.indexOf(".jybcouponrain") == -1) {
          comConfig += "jybcouponrain:require('@lego/jybcouponrain'), \n "
        }



        //获取自定义代码
        if (_name == 'customcode') {
          if (_data.data.code) {
            customCodeSource += _data.data.code + "\n";
          }
          if (_data.data.scriptCode) {
            customScriptCodeSource += _data.data.scriptCode + "\n";
          }
          if (_data.data.styleCode) {
            customStyleCodeSource += _data.data.styleCode + "\n";
          }
        }

        // 添加默认打开加油宝app代码
        if (_name == 'jybappscheme') {
          if (_data.data.code) {
            customCodeSource += _data.data.code + "\n";
          }
          if (_data.data.scriptCode) {
            customScriptCodeSource += _data.data.scriptCode + "\n";
          }
          if (_data.data.styleCode) {
            customStyleCodeSource += _data.data.styleCode + "\n";
          }
        }

      }
      //是否引入分享模块
      var _shareModule = "shareConfig:require('@lego/jybshare')";
      (templateIndex == 2) ? (comConfig += _shareModule) : "";

      comConfig += "};";
    } else {
      for (var key in mpmData) {
        var _data = mpmData[key],
          _type = _data.type,
          _name = _data.name;
        if (_type == 'commontag' && comConfig.indexOf("commontag") == -1) {
          comConfig += "commontag:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.commontag'), \n "
        } else if (_type == 'jybregister' && comConfig.indexOf("userregister") == -1) {
          comConfig += "userregister:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.jybregister'), \n "
        } else if (_type == 'productlist' && comConfig.indexOf("productlist") == -1) {
          comConfig += "productlist:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.productlist'), \n "
        } else if (_type == 'ninegrid' && comConfig.indexOf("ninegrid") == -1) {
          comConfig += "ninegrid:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.ninegrid'), \n "
        } else if (_type == 'jybwxhkpay' && comConfig.indexOf("jybwxhkpay") == -1) {
          comConfig += "jybwxhkpay:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.jybwxhkpay'), \n "
        } else if (_type == 'jybswitchlist' && comConfig.indexOf(".jybswitchlist") == -1) {
          comConfig += "jybswitchlist:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.jybswitchlist'), \n "
        } else if (_type == 'jybranklist' && comConfig.indexOf(".jybranklist") == -1) {
          comConfig += "jybranklist:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.jybranklist'), \n "
        } else if (_type == 'jybactrolling' && comConfig.indexOf(".jybactrolling") == -1) {
          comConfig += "jybactrolling:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.jybactrolling'), \n "
        } else if (_type == 'jybexchange' && comConfig.indexOf(".jybexchange") == -1) {
          comConfig += "jybexchange:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.jybexchange'), \n "
        } else if (_type == 'jybpay' && comConfig.indexOf(".jybpay") == -1) {
          comConfig += "jybpay:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.jybpay'), \n "
        } else if (_type == 'jybnews' && comConfig.indexOf(".jybnews") == -1) {
          comConfig += "jybnews:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.jybnews'), \n "
        } else if (_type == 'jybdrawcard' && comConfig.indexOf(".jybdrawcard") == -1) {
          comConfig += "jybdrawcard:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.jybdrawcard'), \n "
        } else if (_type == 'jybcouponrain' && comConfig.indexOf(".jybcouponrain") == -1) {
          comConfig += "jybcouponrain:require('../../../actconfig/" + devFolder + "modules/mobile/vuecomponent/jyb.vue.jybcouponrain'), \n "
        }
        //获取自定义代码
        if (_name == 'customcode') {
          if (_data.data.code) {
            customCodeSource += _data.data.code + "\n";
          }
          if (_data.data.scriptCode) {
            customScriptCodeSource += _data.data.scriptCode + "\n";
          }
          if (_data.data.styleCode) {
            customStyleCodeSource += _data.data.styleCode + "\n";
          }
        }

        // 添加默认打开加油宝app代码
        if (_name == 'jybappscheme') {
          if (_data.data.code) {
            customCodeSource += _data.data.code + "\n";
          }
          if (_data.data.scriptCode) {
            customScriptCodeSource += _data.data.scriptCode + "\n";
          }
          if (_data.data.styleCode) {
            customStyleCodeSource += _data.data.styleCode + "\n";
          }
        }
        //是否引入分享模块
        var _shareModule = "shareConfig:require('@lego/jybshare')";
        (templateIndex == 2 && pageInfo.share_desc && pageInfo.share_title) ? (comConfig += _shareModule) : "";
      }
      comConfig += "};";
    }

    html = html.replace('{{{customStyleCode}}}', "<!--custom template--> \n" + wrapperStyle(customStyleCodeSource) + "<!--custom template-->");
    html = html.replace('{{{customcode}}}', "<!--custom template--> \n" + customCodeSource + "\n" + wrapperScript(customScriptCodeSource) + "<!--custom template-->");

    moduleDataCenter.packageAct({
      folder: folder.sub,
      pagename: inputPageName,
      pageid: moduleUtil.getUrlQuery('page_id'),
      content: html,
      extendJS: extendJS,
      comConfig: comConfig,
      datefolder: pageInfo.datefolder,
      oldPagePath: pageInfo.oldPageMenu || "",
      mpmPageContent: mpmPageContent,
      publishflag: publishflag,
      mdev: devFlag ? '0' : '1',
      jsmin: moduleUtil.getUrlQuery('mdebug') ? '0' : '1',
      publishid: 63,
      pveventid:$('#pvEventid').val() || ''
    }, callback);
  }

  exports.createFile = function (cb, flag) {
    callback = cb;
    publishflag = flag || "save";
    pageInfo = moduleBasicInfo.showMePageInfo();
    //修复发布两次bug
    getTemplatePageContent(pageInfo.type, onSourceHTML);
  };

  function wrapperStyle(str) {
    if (!str) return '';
    return '<style>' + str + '</style>';
  }

  function wrapperScript(str) {
    if (!str) return '';
    return '<script>' + str + '</script>';
  }
});
