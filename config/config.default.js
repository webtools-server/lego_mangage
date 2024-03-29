'use strict';

let path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_lego_';
  
  // session配置，服务端保存在redis中
  config.session = {
    key: 'LEGO_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  };

  config.bodyParser = {
    enable:true,
    encoding:'utf8',
    formLimit:'5mb',
    jsonLimit:'5mb',
    strict:true,
    queryString:{
      arrayLimit:100,
      depth:5,
      parameterLimit:1000
    }
  }

  config.security = {
    csrf: {
      useSession: true,
      headerName: 'x-csrf-token',
      enable: false
    }
  }

  // 视图
  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    mapping: {
      '.nj': 'nunjucks',
    },
    noCache: true,
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
  };

  // add your config here
  // config.middleware = ['requestParam', 'userAuth'];
  config.middleware = ['requestParam'];

  config.passportJyb = {
    isLoginRelatedOperate: false,
    clients: {
      mysqlOperate: {
        'userDBClient': 'dbMain'
     }
    },
    // useMiddleware: false,
    'selfSystem': {  
      'noAuth': [/\/login\/doLogin/, /^\/lego\/syncCallback/,  /^\/lego\/previewLock/],
      'hook': {
        async logoutCallbackbefore(ctx) {
          const {path} = ctx.request;
          const rules = [/^\/$/, /\/login/, /\/login\/loginOut/]
          
          const state = rules.find(rule => {
            if(rule.test(path)) {
              return true;
            }
          })

          if(!state) {
            ctx.body = {
              code: '1601000014',
              msg: '用户未登录'
            }
            return true;

          } else {
            return false;
          }

        }
      }
    }
  }

  config.staticResource = {
    messageApi: 'https://cdn.jyblife.com/static/js/lib/lego-code-editor-message-api/1.0.1/index.js'
  };

  return config;
};
