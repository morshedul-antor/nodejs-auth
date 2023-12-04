const User = require("../models/userModel");
const userRepo = require("../repositories/userRepo");
const bcrypt = require("bcrypt");

const createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;

  const newUser = new User(data);
  return await newUser.save();
};

const getAllUsers = async (skip, limit) => {
  return await userRepo.getAllUsers(skip, limit);
};

const getUserByPhone = async (phone) => {
  return await userRepo.findOne(phone);
};

const getUserByEmail = async (email) => {
  return await userRepo.findOne(email);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByPhone,
  getUserByEmail,
};
