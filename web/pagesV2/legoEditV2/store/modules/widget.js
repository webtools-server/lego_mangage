/**
 * widget module
 */


// initial state
const initialState = {
  widgetType: [],
  widgets: [],
  detail: {}
};

// getters
const getters = {
  widgetList: (state) => {
    // mock 数据
    return [
      {
        type: 'form',
        uuid: '2222223s',
        title: '通用组件',
        widgets: [{
            c_id: '1',
            thumb: 'http://localhost:7002/public/images/top_banner@2x.png',
            name: '头图Banner',
            tag: 'el-button',
            model: {
              size: {
                type: 'select',
                value: '',
                options: [{
                  label: '默认表单',
                  value: ''
                }, {
                  label: '中等表单',
                  value: 'medium'
                }, {
                  label: '小型表单',
                  value: 'small'
                }, {
                  label: '超小表单',
                  value: 'mini'
                }],
                title: '尺寸',
                desc: '尺寸'
              },
              disabled: {
                type: 'boolean',
                value: false,
                desc: 'value'
              },
              styles: {
                type: 'json',
                value: {},
                desc: 'value'
              },
              labelWidth: {
                type: 'string',
                value: '',
                title: 'label宽度',
                desc: '表单域标签的宽度'
              }
            },
            props: {
              disabled: false,
              styles: {

              },
              size: '',
              labelWidth: ''
            },
          },
          {
            c_id: '2',
            thumb: 'http://localhost:7002/public/images/jump@2x.png',
            name: '跳转组件',
            tag: 'el-button',
            model: {
              size: {
                type: 'select',
                value: '',
                options: [{
                  label: '默认表单',
                  value: ''
                }, {
                  label: '中等表单',
                  value: 'medium'
                }, {
                  label: '小型表单',
                  value: 'small'
                }, {
                  label: '超小表单',
                  value: 'mini'
                }],
                title: '尺寸',
                desc: '尺寸'
              },
              disabled: {
                type: 'boolean',
                value: false,
                desc: 'value'
              },
              styles: {
                type: 'json',
                value: {},
                desc: 'value'
              },
              labelWidth: {
                type: 'string',
                value: '',
                title: 'label宽度',
                desc: '表单域标签的宽度'
              }
            },
            props: {
              disabled: false,
              styles: {

              },
              size: '',
              labelWidth: ''
            },
          }, {
            c_id: '3',
            thumb: 'http://localhost:7002/public/images/tab@2x.png',
            name: 'Tab切换',
            tag: 'el-button',
            model: {
              size: {
                type: 'select',
                value: '',
                options: [{
                  label: '默认表单',
                  value: ''
                }, {
                  label: '中等表单',
                  value: 'medium'
                }, {
                  label: '小型表单',
                  value: 'small'
                }, {
                  label: '超小表单',
                  value: 'mini'
                }],
                title: '尺寸',
                desc: '尺寸'
              },
              disabled: {
                type: 'boolean',
                value: false,
                desc: 'value'
              },
              styles: {
                type: 'json',
                value: {},
                desc: 'value'
              },
              labelWidth: {
                type: 'string',
                value: '',
                title: 'label宽度',
                desc: '表单域标签的宽度'
              }
            },
            props: {
              disabled: false,
              styles: {

              },
              size: '',
              labelWidth: ''
            },
          }, {
            c_id: '4',
            thumb: 'http://localhost:7002/public/images/desc_text@2x.png',
            name: '说明文字',
            tag: 'el-button',
            model: {
              size: {
                type: 'select',
                value: '',
                options: [{
                  label: '默认表单',
                  value: ''
                }, {
                  label: '中等表单',
                  value: 'medium'
                }, {
                  label: '小型表单',
                  value: 'small'
                }, {
                  label: '超小表单',
                  value: 'mini'
                }],
                title: '尺寸',
                desc: '尺寸'
              },
              disabled: {
                type: 'boolean',
                value: false,
                desc: 'value'
              },
              styles: {
                type: 'json',
                value: {},
                desc: 'value'
              },
              labelWidth: {
                type: 'string',
                value: '',
                title: 'label宽度',
                desc: '表单域标签的宽度'
              }
            },
            props: {
              disabled: false,
              styles: {

              },
              size: '',
              labelWidth: ''
            },
          }, {
            c_id: '5',
            thumb: 'http://localhost:7002/public/images/rule_desc@2x.png',
            name: '规则说明',
            tag: 'el-button',
            model: {
              size: {
                type: 'select',
                value: '',
                options: [{
                  label: '默认表单',
                  value: ''
                }, {
                  label: '中等表单',
                  value: 'medium'
                }, {
                  label: '小型表单',
                  value: 'small'
                }, {
                  label: '超小表单',
                  value: 'mini'
                }],
                title: '尺寸',
                desc: '尺寸'
              },
              disabled: {
                type: 'boolean',
                value: false,
                desc: 'value'
              },
              styles: {
                type: 'json',
                value: {},
                desc: 'value'
              },
              labelWidth: {
                type: 'string',
                value: '',
                title: 'label宽度',
                desc: '表单域标签的宽度'
              }
            },
            props: {
              disabled: false,
              styles: {

              },
              size: '',
              labelWidth: ''
            },
          }, {
            c_id: '6',
            thumb: 'http://localhost:7002/public/images/rule_activity.png',
            name: '活动规则',
            tag: 'el-button',
            model: {
              size: {
                type: 'select',
                value: '',
                options: [{
                  label: '默认表单',
                  value: ''
                }, {
                  label: '中等表单',
                  value: 'medium'
                }, {
                  label: '小型表单',
                  value: 'small'
                }, {
                  label: '超小表单',
                  value: 'mini'
                }],
                title: '尺寸',
                desc: '尺寸'
              },
              disabled: {
                type: 'boolean',
                value: false,
                desc: 'value'
              },
              styles: {
                type: 'json',
                value: {},
                desc: 'value'
              },
              labelWidth: {
                type: 'string',
                value: '',
                title: 'label宽度',
                desc: '表单域标签的宽度'
              }
            },
            props: {
              disabled: false,
              styles: {

              },
              size: '',
              labelWidth: ''
            },
          }, {
            c_id: '7',
            thumb: 'http://localhost:7002/public/images/button@2x.png',
            name: '按钮',
            tag: 'el-button',
            model: {
              size: {
                type: 'select',
                value: '',
                options: [{
                  label: '默认表单',
                  value: ''
                }, {
                  label: '中等表单',
                  value: 'medium'
                }, {
                  label: '小型表单',
                  value: 'small'
                }, {
                  label: '超小表单',
                  value: 'mini'
                }],
                title: '尺寸',
                desc: '尺寸'
              },
              disabled: {
                type: 'boolean',
                value: false,
                desc: 'value'
              },
              styles: {
                type: 'json',
                value: {},
                desc: 'value'
              },
              labelWidth: {
                type: 'string',
                value: '',
                title: 'label宽度',
                desc: '表单域标签的宽度'
              }
            },
            props: {
              disabled: false,
              styles: {

              },
              size: '',
              labelWidth: ''
            },
          },{
            c_id: '8',
            thumb: 'http://localhost:7002/public/images/number@2x.png',
            name: '数字组件',
            tag: 'el-button',
            model: {
              size: {
                type: 'select',
                value: '',
                options: [{
                  label: '默认表单',
                  value: ''
                }, {
                  label: '中等表单',
                  value: 'medium'
                }, {
                  label: '小型表单',
                  value: 'small'
                }, {
                  label: '超小表单',
                  value: 'mini'
                }],
                title: '尺寸',
                desc: '尺寸'
              },
              disabled: {
                type: 'boolean',
                value: false,
                desc: 'value'
              },
              styles: {
                type: 'json',
                value: {},
                desc: 'value'
              },
              labelWidth: {
                type: 'string',
                value: '',
                title: 'label宽度',
                desc: '表单域标签的宽度'
              }
            },
            props: {
              disabled: false,
              styles: {

              },
              size: '',
              labelWidth: ''
            },
          },{
            c_id: '1222434331',
            name: 'row测试',
            thumb: 'http://localhost:7002/public/images/product_main@2x.png',
            tag: 'el-row',
            draggable: true,
            children: []
          },
          {
            c_id: '1222434332',
            name: 'col测试',
            thumb: 'http://localhost:7002/public/images/product_main@2x.png',
            tag: 'el-col',
            draggable: true,
            children: [],
          }
        ]
      },
      {
        type: 'base',
        uuid: '2222222223s',
        title: '活动组件',
        widgets: [{
          c_id: '21',
          thumb: 'http://localhost:7002/public/images/product_main@2x.png',
          name: '主推商品',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '22',
          thumb: 'http://localhost:7002/public/images/product1@2x.png',
          name: '商品列表1',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '23',
          thumb: 'http://localhost:7002/public/images/product2@2x.png',
          name: '商品列表2',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '24',
          thumb: 'http://localhost:7002/public/images/financial@2x.png',
          name: '理财组件',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '25',
          thumb: 'http://localhost:7002/public/images/exchange@2x.png',
          name: '兑换组件',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '26',
          thumb: 'http://localhost:7002/public/images/task_list@2x.png',
          name: '任务列表',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '27',
          thumb: 'http://localhost:7002/public/images/number@2x.png',
          name: '表格',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '28',
          thumb: 'http://localhost:7002/public/images/attendance@2x.png',
          name: '签到组件',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '29',
          thumb: 'http://localhost:7002/public/images/leaderboard@2x.png',
          name: '排行榜',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '210',
          thumb: 'http://localhost:7002/public/images/dynamic@2x.png',
          name: '动态组件',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '211',
          thumb: 'http://localhost:7002/public/images/title@2x.png',
          name: '标题组件',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        },{
          c_id: '212',
          thumb: 'http://localhost:7002/public/images/ninebox@2x.png',
          name: '九宫格',
          tag: 'el-button',
          model: {
            size: {
              type: 'select',
              value: '',
              options: [{
                label: '默认表单',
                value: ''
              }, {
                label: '中等表单',
                value: 'medium'
              }, {
                label: '小型表单',
                value: 'small'
              }, {
                label: '超小表单',
                value: 'mini'
              }],
              title: '尺寸',
              desc: '尺寸'
            },
            disabled: {
              type: 'boolean',
              value: false,
              desc: 'value'
            },
            styles: {
              type: 'json',
              value: {},
              desc: 'value'
            },
            labelWidth: {
              type: 'string',
              value: '',
              title: 'label宽度',
              desc: '表单域标签的宽度'
            }
          },
          props: {
            disabled: false,
            styles: {

            },
            size: '',
            labelWidth: ''
          },
        }
        
        ]
      },
      {
        type: 'base',
        uuid: '2222222223s',
        title: '推广',
        widgets: [
          {
            c_id: '31',
            thumb: 'http://localhost:7002/public/images/register@2x.png',
            name: '注册组件',
            tag: 'el-button',
            model: {
              size: {
                type: 'select',
                value: '',
                options: [{
                  label: '默认表单',
                  value: ''
                }, {
                  label: '中等表单',
                  value: 'medium'
                }, {
                  label: '小型表单',
                  value: 'small'
                }, {
                  label: '超小表单',
                  value: 'mini'
                }],
                title: '尺寸',
                desc: '尺寸'
              },
              disabled: {
                type: 'boolean',
                value: false,
                desc: 'value'
              },
              styles: {
                type: 'json',
                value: {},
                desc: 'value'
              },
              labelWidth: {
                type: 'string',
                value: '',
                title: 'label宽度',
                desc: '表单域标签的宽度'
              }
            },
            props: {
              disabled: false,
              styles: {

              },
              size: '',
              labelWidth: ''
            },
          },{
            c_id: '32',
            thumb: 'http://localhost:7002/public/images/pay@2x.png',
            name: '支付组件',
            tag: 'el-button',
            model: {
              size: {
                type: 'select',
                value: '',
                options: [{
                  label: '默认表单',
                  value: ''
                }, {
                  label: '中等表单',
                  value: 'medium'
                }, {
                  label: '小型表单',
                  value: 'small'
                }, {
                  label: '超小表单',
                  value: 'mini'
                }],
                title: '尺寸',
                desc: '尺寸'
              },
              disabled: {
                type: 'boolean',
                value: false,
                desc: 'value'
              },
              styles: {
                type: 'json',
                value: {},
                desc: 'value'
              },
              labelWidth: {
                type: 'string',
                value: '',
                title: 'label宽度',
                desc: '表单域标签的宽度'
              }
            },
            props: {
              disabled: false,
              styles: {

              },
              size: '',
              labelWidth: ''
            },
          }
        ]
      }

    ]
  }
};

// actions
const actions = {
  getWidgetList({ commit }) {

  }
};

// mutations
const mutations = {
  setWidgetList(state, result) {

  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
