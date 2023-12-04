const User = require("../models/userModel");

const getUserByPhone = async (phone) => {
  return await User.findOne({ phone });
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getUserById = async (id) => {
  return await User.findById(id, { __v: 0, password: 0 });
};

const getAllUsers = async (skip, limit) => {
  const dataAll = await User.find();
  const data = await User.find({}, { __v: 0, password: 0 })
    .skip(skip)
    .limit(limit);

  return [{ result: dataAll.length }, data];
};

module.exports = {
  getUserByPhone,
  getUserByEmail,
  getUserById,
  getAllUsers,
};
