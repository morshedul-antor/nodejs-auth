const User = require("../models/userModel");
const userRepo = require("../repositories/userRepo");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;

  const newUser = new User(data);
  return await newUser.save();
};

const login = async (data) => {
  const user = await userRepo.getUserByPhone(data.identifier);
  if (!user) {
    throw new Error("Invalid username or password!");
  }

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    throw new Error("Invalid username or password!");
  }

  const token = jwt.sign({ sid: user._id }, process.env.JWT_SECRET, {
    expiresIn: "48h",
  });
  return { token: token, type: "bearer" };
};

const getAllUsers = async (skip, limit) => {
  return await userRepo.getAllUsers(skip, limit);
};

const getUserById = async (id) => {
  return await userRepo.getUserById(id);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  login,
};
