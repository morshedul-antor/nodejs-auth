const BaseService = require("./baseService");
const userRepo = require("../repositories/userRepo");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

    const hashedPassword = await bcrypt.hash(data.password, 10);
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

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      throw new Error("Invalid username or password!");
    }

    const token = jwt.sign({ sid: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return { token: token, type: "bearer" };
  }
}

module.exports = new UserService();
