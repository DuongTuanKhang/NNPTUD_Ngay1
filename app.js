const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const authRouter = require("./routes/auth");
const roleRouter = require("./routes/role");
const usersRouter = require("./routes/users");
const inventoryRouter = require("./routes/inventory"); // 👈 thêm

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect DB
mongoose
  .connect("mongodb://localhost:27017/NNPTUD-C3")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

// Routes
app.use("/auth", authRouter);
app.use("/role", roleRouter);
app.use("/users", usersRouter);
app.use("/inventory", inventoryRouter); // 👈 thêm

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;