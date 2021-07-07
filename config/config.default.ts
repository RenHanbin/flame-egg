import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

import { Result } from '../app/util/result';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {
    onerror: {
      accepts: () => 'json',
      json(err, ctx) {
        if (err.code === 'invalid_param') {
          ctx.status = 400;

          if (!ctx.body) {
            ctx.body = new Result(undefined, '参数不合法');
            return;
          }

          if (!ctx.body.msg) {
            ctx.body = new Result(undefined, '参数不合法');
            return;
          }
        }

        if (err.name === 'AuthenticationError') {
          ctx.status = err.status;
          ctx.body = new Result(undefined, '请重新登录');
          return;
        }

        ctx.status = 500;
      },
    },
  };

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1625282849764_4292';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // 取消安全证书验证
  config.security = {
    csrf: {
      enable: false,
    },
    // domainWhiteList: ["*"], // 白名单
  };

  config.cors = {
    origin: '*', // 跨任何域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 被允许的请求方式
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
