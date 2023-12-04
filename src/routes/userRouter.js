// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();

const userService = require("../services/userService");

router.post("/signup", async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const newUsers = await userService.getAllUsers(skip, limit);
    res.json(newUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
