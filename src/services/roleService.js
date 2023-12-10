const roleRepo = require("../repositories/roleRepo");
const BaseService = require("./baseService");

class RoleService extends BaseService {
  async createRole(data) {
    const role = await roleRepo.getByName(data.name);
    if (role) {
      throw new Error("Role already exists!");
    }

    // "super" inherit from base
    const newRole = await super.create(data);
    return newRole;
  }
}

module.exports = new RoleService(roleRepo.model);
