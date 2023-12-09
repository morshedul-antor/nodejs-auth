const User = require("../models/userModel");
const BaseRepo = require("./baseRepo");

class UserRepo extends BaseRepo {
  constructor(model) {
    super(model);
  }

  // search
  async getUserByPhone(phone) {
    return await this.model.findOne({ phone });
  }

  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async getUserByIdentifier(identifier) {
    const userByPhone = await this.getUserByPhone(identifier);
    const userByEmail = await this.getUserByEmail(identifier);

    if (userByPhone) {
      return userByPhone;
    } else if (userByEmail) {
      return userByEmail;
    } else {
      return null;
    }
  }
}

module.exports = new UserRepo(User);
