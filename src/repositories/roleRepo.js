const Role = require("../models/roleModel");
const BaseRepo = require("./baseRepo");

class RoleRepo extends BaseRepo {
  // search
  async getByName(name) {
    return this.model.findOne({ name });
  }
}

module.exports = new RoleRepo(Role);
