const BaseService = require("./baseService");
const UserRepo = require("../repositories/userRepo");

class UserService extends BaseService {
  constructor() {
    super(UserRepo.model);
  }

  async getUserById(id) {
    return await UserRepo.getUserById(id);
  }
}

module.exports = new UserService();
