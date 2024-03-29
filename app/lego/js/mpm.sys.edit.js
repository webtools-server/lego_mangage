define(function (require, exports, module) {
  var $ = require('zepto');
  require('vuefe');
  // 定义一个全局入口，用来挂载一些常用公用方法
  window.LegoEditor = {};

  var moduleUtil = require('./mpm.sys.util');

  var moduleBasicInfo = require('./mpm.sys.basicInfo');
  var modulePreview = require('./mpm.sys.preview');
  var moduleStructure = require('./mpm.sys.structure');
  var iframeClose = $("#iframe-close");

  var pageId, userInfo, pageOwner, pageAuthor, pageLocker, nowusername;

  function editPermitCheck() {
    if (userInfo && pageOwner) {
      var pageAuthorArr = pageAuthor.split(",");
      if (pageOwner != userInfo.user_id && userInfo.user_power != 9 && pageAuthorArr.indexOf(userInfo.user_id.toString()) == -1) {
        $('body').remove();
        window.alert('无权限操作此页面');
        window.location = "pagelist.html";
      } else {
        //判断是否被别人锁定
        if (pageLocker) {
          if (pageLocker != nowusername) {
            $('body').remove();
            window.alert('此页面已经被' + pageLocker + '锁定，请联系他解锁');
            window.location = "pagelist.html";
          }
        } else {
          //自动上锁
          moduleDataCenter.lockPageById(pageId, function (d) {

          });
        }
      }
    }
  }

  exports.init = function () {
    pageId = moduleUtil.getUrlQuery('page_id');
    moduleUtil.getComponentList(function (list) {
      var grouparr = [];
      var des1 = { des: "外部注册", ishow: "block", val: [] },
        des2 = { des: "活动组件", ishow: "none", val: [] },
        des3 = { des: "通用组件", ishow: "none", val: [] };
      list.forEach(function (dom, index) {
        if (dom.component_group == 1) {
          des1.val.push(dom);
        } else if (dom.component_group == 2) {
          des2.val.push(dom);
        } else if (dom.component_group == 3) {
          des3.val.push(dom);
        }
      })
      grouparr.push(des1);
      grouparr.push(des2);
      grouparr.push(des3);

      new Vue({
        el: '#divLeftComList',
        data: {
          list: grouparr
        }
      });


      moduleBasicInfo.main();
      moduleStructure.main();
      if (!pageId) {
        moduleBasicInfo.newPage();
      } else {
        moduleBasicInfo.getPageInfo(pageId, userInfo, function (page) {
          pageOwner = page.page_creator;
          pageAuthor = page.page_author;
          pageLocker = page.page_locker;
          editPermitCheck();
          moduleStructure.initializeStructure();
        });
      }
      modulePreview.main();
    });

    iframeClose.on("click", function (e) {
      $("#divComponentIframe").hide();
    });
    window.onunload = function () {
      return false;
    };

  }
});
