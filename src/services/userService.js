const BaseService = require("./baseService");
const userRepo = require("../repositories/userRepo");

const { createHash, validateHash } = require("../utils/security");
const { createToken } = require("../utils/token");

class UserService extends BaseService {
  constructor() {
    super(userRepo.model);
  }

  async createUser(data) {
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

    const newUser = await userRepo.create(data);
    const { password, ...user } = newUser.toObject();
    return user;
  }

  async login(data) {
    const user = await userRepo.getUserByIdentifier(data.identifier);
    if (!user) {
      throw new Error("Invalid username or password!");
    }

    const isMatch = await validateHash(data.password, user.password);
    if (!isMatch) {
      throw new Error("Invalid username or password!");
    }

    const token = await createToken(user._id);
    return token;
  }
}

module.exports = new UserService();
