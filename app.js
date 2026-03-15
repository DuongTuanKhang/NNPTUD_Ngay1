const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");
const roleRouter = require("./routes/role");
const usersRouter = require("./routes/users");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/NNPTUD-C3");

app.use("/auth", authRouter);
app.use("/role", roleRouter);
app.use("/users", usersRouter);

module.exports = app;

const authRoutes = require("./routes/auth");

app.use("/auth", authRoutes);
