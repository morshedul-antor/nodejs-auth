const User = require("../models/userModel");

const getUserByPhone = async (phone) => {
  return await User.findOne({ phone });
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getAllUsers = async () => {
  return await User.find();
};

module.exports = {
  getUserByPhone,
  getUserByEmail,
  getAllUsers,
};
