const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");
const userService = require("../services/userService");

router.post("/", async (req, res) => {
  try {
    const data = await userService.createUser(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await userService.get();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await userService.getUserById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
