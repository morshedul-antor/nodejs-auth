const User = require("../models/userModel");
const BaseRepo = require("./baseRepo");

class UserRepo extends BaseRepo {
  constructor(model) {
    super(model);
  }

  async getUserById(id) {
    return await this.model.findById(id, { __v: 0, password: 0 });
  }
}

module.exports = new UserRepo(User);
