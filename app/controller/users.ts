import { Controller } from 'egg';

import { Result } from '../util/result';

class UsersController extends Controller {
  async show() {
    const { ctx } = this;
    // 参数验证
    ctx.validate(
      { id: { require, type: 'int', convertType: 'int' } },
      ctx.query
    );
    const { id } = ctx.query;
    const userList = await this.ctx.service.users.findUserById(id);
    console.log('userList', userList);
    ctx.body = new Result({ userList });
  }
}

module.exports = UsersController;
