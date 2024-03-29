define(function (require, exports, module) {

  var vueComponent = require("./jyb.vue.commontag");
  var Factory = require('./jyb.vue.edit.factory');
  var defaultTplEdit = '/public/template/new/jybfooter/edit.html';

  var _Class = Factory.getClass({
    vueComponent: vueComponent,
    defaultTplEdit: defaultTplEdit,
    type: 'commontag',
    data: {
      styleKey: '',
      "didTrigger": false,//生成页面的时候，这里为False
      "didFinish": false,//生成页面的时候，这里为False
      "lazyLoad": false,
      "isShowNpmVersions": USER_INFOR.isAdmin,
      "title": "",
      "subTitle": "",
      "backgroundcolor": "",
      "color": '',
      "outterwidth": "",
      "desfontsize": "",//
      "npmversion": "",
      "npmversionArr": [],
      "npmname": "@lego/commontag"
    },
    watch: ['data.styleKey', "desfontsize", "color", "backgroundcolor", "subTitle", "title"]
  });

  exports.getComponent = function (config, callback) {
    var component = new _Class(config, callback);
    if (!component.config.obj.title) {
      component.config.obj.title = '';
      component.config.obj.subTitle = '';
      component.config.obj.color = '';
    }
    return component;
  };

});

