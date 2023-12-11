const baseSchema = require("../schemas/baseSchema");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
});

userSchema.add(baseSchema);

module.exports = mongoose.model("User", userSchema);
