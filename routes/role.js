const express = require("express");
const router = express.Router();
const Role = require("../schemas/role");
const User = require("../schemas/users");

// CREATE ROLE
router.post("/", async (req, res) => {
  const role = new Role(req.body);
  const result = await role.save();
  res.json(result);
});

// GET ROLES
router.get("/", async (req, res) => {
  const roles = await Role.find();
  res.json(roles);
});

// GET ROLE USERS
router.get("/:id/users", async (req, res) => {
  const users = await User.find({
    role: req.params.id,
    deleted: false,
  }).populate("role");

  res.json(users);
});

module.exports = router;