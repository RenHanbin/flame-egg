import { Service } from 'egg';

class UsersService extends Service {
  async findUserById(id) {
    return await this.ctx.model.Users.findAll({ where: { id } });
  }
}

module.exports = UsersService;
