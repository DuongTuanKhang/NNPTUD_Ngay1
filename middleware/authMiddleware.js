const jwt = require("jsonwebtoken");
const fs = require("fs");

const publicKey = fs.readFileSync("./keys/public.key");

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ message: "Token required" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};