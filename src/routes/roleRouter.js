const express = require("express");
const router = express.Router();

const roleService = require("../services/roleService");
const { isAuthAdmin } = require("../middlewares/authentication");

router.post("/", isAuthAdmin, async (req, res) => {
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

router.get("/:id", isAuthAdmin, async (req, res) => {
  try {
    const data = await roleService.getById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", isAuthAdmin, async (req, res) => {
  try {
    const data = await roleService.updateById(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", isAuthAdmin, async (req, res) => {
  try {
    const data = await roleService.deleteById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
