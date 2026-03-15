const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const fs = require("fs");

const User = require("../schemas/users");
const authMiddleware = require("../middleware/authMiddleware");

const privateKey = fs.readFileSync("./keys/private.key");


// LOGIN
router.post("/login", async (req, res) => {

  const { username, password } = req.body;

  const user = await User.findOne({
    username: username,
    deleted: false,
  });

  if (!user || user.password !== password) {

    return res.status(401).json({
      message: "Invalid credentials",
    });

  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    privateKey,
    {
      algorithm: "RS256",
      expiresIn: "1h",
    }
  );

  res.json({ token });

});


// GET /ME
router.get("/me", authMiddleware, async (req, res) => {

  const user = await User.findById(req.user.id).populate("role");

  res.json(user);

});


// CHANGE PASSWORD
router.post("/changepassword", authMiddleware, async (req, res) => {

  const { oldpassword, newpassword } = req.body;

  const user = await User.findById(req.user.id);

  if (user.password !== oldpassword) {

    return res.status(400).json({
      message: "Old password incorrect",
    });

  }

  if (newpassword.length < 6) {

    return res.status(400).json({
      message: "Password must be >= 6 characters",
    });

  }

  user.password = newpassword;

  await user.save();

  res.json({
    message: "Password changed successfully",
  });

});

module.exports = router;