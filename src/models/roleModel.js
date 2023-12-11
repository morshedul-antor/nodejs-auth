const baseSchema = require("../schemas/baseSchema");
const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  name: {
    type: String,
  },
});

roleSchema.add(baseSchema);

module.exports = mongoose.model("Role", roleSchema);
