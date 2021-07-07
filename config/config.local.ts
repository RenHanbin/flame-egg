import { EggAppConfig, PowerPartial } from 'egg';
import { localDBKey } from '../key';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'test',
      username: 'root',
      password: localDBKey,
      query: {
        nest: true,
      },
    },
  };

  return config;
};
