const express = require("express");
const router = express.Router();

const roleService = require("../services/roleService");
const isAuth = require("../middlewares/isAuth");

router.post("/", async (req, res) => {
  try {
    const data = await roleService.createRole(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await roleService.get();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
