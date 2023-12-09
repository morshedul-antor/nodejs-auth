const BaseService = require("./baseService");
const userRepo = require("../repositories/userRepo");

class UserService extends BaseService {
  constructor() {
    super(userRepo.model);
  }

  async getUserById(id) {
    return await userRepo.getUserById(id);
  }
}

module.exports = new UserService();
