const express = require("express");
const router = express.Router();

const userService = require("../services/userService");
const verifyToken = require("../middlewares/verifyToken");

router.post("/login", async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.json(token);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/auth", verifyToken, async (req, res) => {
  try {
    const data = await userService.getUserById(req.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
