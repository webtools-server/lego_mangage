define(function (require, exports, module) {
  var $ = require('jquery'),
    moduleMustache = require('mustache');
  require('vuefe');
  var moduleDataCenter = require('./mpm.sys.dataCenter');
  var curUserName = '';

  function getUrlQuery (name, url) {
    //参数：变量名，url为空则表从当前页面的url中取
    var u = url || window.location.search,
      reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
      r = u.substr(u.indexOf("\?") + 1).match(reg);
    return r != null ? r[2] : "";
  }

  function toCopy() {
    $("#js_mod_submit_btn").on("click", function (e) {
      var _path = $("#page_path").val().trim(),
        _pageId = $("#page_id").val().trim(),
        _actId = getUrlQuery('act_id'),
        reg = /^[0-9]*$/;
      if (!_path) {
        alert("新路径不可以为空！");
        return;
      }
      if (!reg.test(_pageId)) {
        alert("pageID必须为数字");
        return;
      }
      var all_path = _path;
      moduleDataCenter.checkPath(all_path, function (n) {
        if (n.code == 0 && n.data) {
          alert('目录已存在');
        } else {
          moduleDataCenter.copyPage(_pageId, _path, _actId, function (json) {
            var _newPageId = '',
                act_url = '';

            if (json.code == 0) {//创建页面成功
              var _data = json.data;
              _newPageId = _data.page_id;
              location.href = location.origin + "/" + 'lego/editPage?page_id=' + _newPageId + '&act_id=' + _actId;
            } else if(json.code == '810010'){//页面创建成功 但是未关联page_id与act_id
              var _data = json.data;
              _newPageId = _data.page_id;
              act_url = _data.cdn_prefix + _data.date_folder + '/' + _path + '/' + 'index.html' + '?actId=' + _actId;
              moduleDataCenter.savePageRelaction(_newPageId, _actId, act_url , function (json) {
                if(json.code == 0){
                  location.href = location.origin + "/" + 'lego/editPage?page_id=' + _newPageId + '&act_id=' + _actId;
                }else{
                  moduleUtil.alert('活动号未与页面关联，请联系开发');
                  location.href = location.origin + "/" + 'lego/editPage?page_id=' + _newPageId + '&act_id=' + _actId;
                }
              });
            } else {
              moduleUtil.alert('新建页面失败');
            }
          });
        }
      });
    });
  }

  function init() {
    toCopy();
    new Vue({
      el: '#notice',
      data: {
        notice: null,
      },
      created: function () {
        var vobj = this;
        vobj.getData();
      },
      methods: {
        getData: function () {
          var vobj = this;
          moduleDataCenter.getHomeNotice(function (json) {
            if (json && json.length) {
              vobj.notice = decodeURIComponent(json[0].content)
            }
          })
        }
      }
    });
  }

  exports.main = function () {
    init();
    seajs.use('/public/css/bootstrap-3.3.7/bootstrap.min', function (m) {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
});
