import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  passportJwt: {
    enable: true,
    package: 'egg-passport-jwt',
  },
};

export default plugin;
