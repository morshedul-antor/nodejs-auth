const User = require("../models/userModel");
const userRepo = require("../repositories/userRepo");

const createUser = async (data) => {
  const newUser = new User(data);
  return await newUser.save();
};

const getAllUsers = async (skip, limit) => {
  return await userRepo.getAllUsers(skip, limit);
};

module.exports = {
  createUser,
  getAllUsers,
};
