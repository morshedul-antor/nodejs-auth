const User = require("../models/userModel");
const userRepo = require("../repositories/userRepo");

const createUser = async (data) => {
  const newUser = new User(data);
  return await newUser.save();
};

const getAllUsers = async () => {
  return await userRepo.getAllUsers();
};

module.exports = {
  createUser,
  getAllUsers,
};
