const express = require("express");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const Token = require("../models/Token");
const router = express.Router();

// POST login
router.post("/", async (req, res) => {
  if (!req.body.password) {
    return res.status(400).json({ error: `No password was provided` });
  }
  const password = req.body.password;
  const isValid = await bcrypt.compare(password, process.env.PASSWORD);

  if (!isValid) {
    return res.status(400).json({ error: `Password is incorrect!` });
  }

  const accessToken = await jsonwebtoken.sign(
    { userId: "", email: "" },
    process.env.AUTH_SECRET_KEY,
    { expiresIn: "15m" }
  );

  const refreshToken = await jsonwebtoken.sign(
    { userId: "", email: "" },
    process.env.AUTH_SECRET_KEY_REFRESH,
    { expiresIn: "7d" }
  );

  // Add refresh token to db
  const newToken = new Token({
    token: refreshToken,
    userId: "",
    email: "",
  });
  const savedToken = await newToken.save();

  // response
  res.status(200).json({
    userId: "",
    userEmail: "",
    token: accessToken,
    refreshToken: refreshToken,
  });
});

module.exports = router;
