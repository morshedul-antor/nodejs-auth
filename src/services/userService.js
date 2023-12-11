const BaseService = require("./baseService");
const userRepo = require("../repositories/userRepo");
const roleRepo = require("../repositories/roleRepo");

const { createHash, validateHash } = require("../utils/security");
const { createToken } = require("../utils/token");

class UserService extends BaseService {
  async createUser(data) {
    const role = await roleRepo.getByKey({ name: data.role });
    if (!role) {
      throw new Error("Role not found!");
    }

    const userPhone = await userRepo.getUserByPhone(data.phone);
    if (userPhone) {
      throw new Error("Phone number already exist!");
    }

    const userEmail = await userRepo.getUserByEmail(data.email);
    if (userEmail) {
      throw new Error("Email already exist!");
    }

    const hashedPassword = await createHash(data.password);
    data.password = hashedPassword;
    data.roleId = role._id;

    const newUser = await super.create(data);
    const { password, ...user } = newUser.toObject();
    return user;
  }

  async login(data) {
    const user = await userRepo.getUserByIdentifier(data.identifier);
    if (!user) {
      throw new Error("Invalid username or password!");
    }

    if (!user.active) {
      throw new Error("You're currently not an active user!");
    }

    const isMatch = await validateHash(data.password, user.password);
    if (!isMatch) {
      throw new Error("Invalid username or password!");
    }

    const token = await createToken(user._id);
    return token;
  }
}

module.exports = new UserService(userRepo.model);
