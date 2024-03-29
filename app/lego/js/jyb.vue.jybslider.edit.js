define(function (require, exports, module) {

  var vueComponent = require("./jyb.vue.jybslider");
  var Factory = require('./jyb.vue.edit.factory');
  var defaultTplEdit = '/public/template/new/jybslider/edit.html';
  var DateInputLib = require('./mpm.sys.calendar').mpmDateInputLib;


  /* npm管理 */
  var moduleBasicInfo = "";
  var moduleDataCenter = "";
  /* npm管理 */


  var _Class = Factory.getClass({
    vueComponent: vueComponent,
    defaultTplEdit: defaultTplEdit,
    type: 'jybslider',
    data: {
      styleKey: '',
      "_itemList": [],
      "itemList": [],
      "combo": 0,
      "didTrigger": false, //生成页面的时候，这里为False
      "didFinish": false, //生成页面的时候，这里为False
      "lazyLoad": false,
      "isShowNpmVersions": USER_INFOR.isAdmin,
      "sliderArr": [],
      "npmversion": "",
      "npmversionArr": [],
      "npmname": "@lego/jybslider"
    },
    watch: ['data.styleKey', "data.sliderArr"]
  });


  //编辑功能
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
          /* 过滤 */
          var filterRes =that.obj.data.sliderArr.filter(function(item){
            var _flagBegin = new Date() > new Date(item.beginTime),
                _flagEnd = new Date() < new Date(item.endTime);
            return _flagBegin && _flagEnd;
          });
          console.log('过滤结果',filterRes)
          /* 过滤 */
          this.$nextTick(function () {
            var today = new Date();
            DateInputLib($("#editbox_" + that.obj.uid).find(".selecttime[settime!='1']"), {
              chosendate: today,
              //开始年份
              startdate: today.getFullYear(),
              //结束年份
              enddate: today.getFullYear() + 3,
              //时间格式
              timeFormat: 'hh:ii:ss', //hh:ii:ss
              hasTime: true,
              x: 0,
              y: -240,
              //选择完成后的回调事件
              callback: function (datepicker) {
                var _index = datepicker.getAttribute('index'),
                    _value = datepicker.getAttribute('item');
                that.obj.data.sliderArr[_index][_value] = datepicker.value;
                console.log('选定日期', datepicker.value);
              }
          })

          })
        },


        addSliderItem: function () {
          this.obj.data.sliderArr.push({
            imgSrc: '', //
            url: '',
            beginTime:'',
            endTime:'',
            mtaid:''
          });

          this.$nextTick(function () {
            var today = new Date();
            DateInputLib($("#editbox_" + that.obj.uid).find(".selecttime[settime!='1']"), {
              chosendate: today,
              //开始年份
              startdate: today.getFullYear(), 
              //结束年份
              enddate: today.getFullYear() + 3,
              //时间格式
              timeFormat: 'hh:ii:ss', //hh:ii:ss
              hasTime: true,
              x: 0,
              y: -240,
              //选择完成后的回调事件
              callback: function (datepicker) {
                var _index = datepicker.getAttribute('index'),
                    _value = datepicker.getAttribute('item');
                that.obj.data.sliderArr[_index][_value] = datepicker.value;
                //that.obj.data.buynowList[datepicker.getAttribute('index')].buyTime = datepicker.value;
                console.log('选定日期', datepicker.value);
              }
              })
          });
        },
        deleteSliderItem: function (index) {
          var deleteItem = this.obj.data.sliderArr.splice(index - 0, 1);
        },
        selectNpmVersion: function () { /* npm管理 */
          console.info("切换到活动规则的版本是", this.obj.data.npmversion);
          require.async('./mpm.sys.dataCenter', function (module) {
            moduleDataCenter = module;
          });
          require.async('./mpm.sys.basicInfo', function (module) {
            moduleBasicInfo = module;
          });
          var pageInfo = moduleBasicInfo.showMePageInfo();
          var folderSet = moduleBasicInfo.showMeFolderName();

          var path =  pageInfo.datefolder + "/" + folderSet.sub + "/";

          moduleDataCenter.updataversion(this.obj.data.npmversion, '@lego/commontag', path, function () {
            console.log("update ok "); 
          });
        }

      }
    });

    $(that.domEdit.$el).attr('id', 'editbox_' + that.obj.uid);
  };


  exports.getComponent = function (config, callback) {
    var component = new _Class(config, callback);
    if (!component.config.obj.data.rulesTitle) {

    }
    return component;
  };
});
