const mongoose = require("mongoose");

const baseSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: () => new Date(Date.now() + 6 * 60 * 60 * 1000), //GMT+6
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

module.exports = baseSchema;
