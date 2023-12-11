const express = require("express");
const router = express.Router();

const userService = require("../services/userService");
const { isAuth } = require("../middlewares/authentication");

router.post("/login", async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.json(token);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/auth", isAuth, async (req, res) => {
  try {
    const data = await req.user;
    const { roleId, ...user } = data._doc;

    res.json({
      ...user,
      roleName: req.user.roleName,
    });
  } catch (err) {
    res.badRequest({ error: err.message });
  }
});

module.exports = router;
