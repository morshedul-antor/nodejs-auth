const User = require("../models/userModel");

const getUserByPhone = async (phone) => {
  return await User.findOne({ phone });
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getAllUsers = async (skip, limit) => {
  const dataAll = await User.find();
  const data = await User.find({}, { __v: 0 }).skip(skip).limit(limit);
  return [{ result: dataAll.length }, data];
};

module.exports = {
  getUserByPhone,
  getUserByEmail,
  getAllUsers,
};
