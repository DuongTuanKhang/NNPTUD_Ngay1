// controllers/inventory.controller.js
const Inventory = require("../schemas/inventory");

exports.getAll = async (req, res) => {
  const data = await Inventory.find().populate("product");
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await Inventory.findById(req.params.id).populate("product");
  res.json(data);
};

// ADD STOCK
exports.addStock = async (req, res) => {
  const { product, quantity } = req.body;

  const inv = await Inventory.findOne({ product });
  if (!inv) return res.status(404).json({ message: "Not found" });

  inv.stock += quantity;
  await inv.save();

  res.json(inv);
};

// REMOVE STOCK
exports.removeStock = async (req, res) => {
  const { product, quantity } = req.body;

  const inv = await Inventory.findOne({ product });

  if (inv.stock < quantity) {
    return res.status(400).json({ message: "Not enough stock" });
  }

  inv.stock -= quantity;
  await inv.save();

  res.json(inv);
};

// RESERVATION
exports.reserve = async (req, res) => {
  const { product, quantity } = req.body;

  const inv = await Inventory.findOne({ product });

  if (inv.stock < quantity) {
    return res.status(400).json({ message: "Not enough stock" });
  }

  inv.stock -= quantity;
  inv.reserved += quantity;

  await inv.save();

  res.json(inv);
};

// SOLD
exports.sold = async (req, res) => {
  const { product, quantity } = req.body;

  const inv = await Inventory.findOne({ product });

  if (inv.reserved < quantity) {
    return res.status(400).json({ message: "Not enough reserved" });
  }

  inv.reserved -= quantity;
  inv.soldCount += quantity;

  await inv.save();

  res.json(inv);
};