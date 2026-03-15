const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    fullName: String,
    avatarUrl: String,
    status: Boolean,
    loginCount: Number,
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
