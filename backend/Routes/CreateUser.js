const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createUser",
  [
    body("name").isString().isLength({ min: 5 }),
    body(
      "password",
      "Password length is too small. It should be minimum 5 characters"
    ).isLength({ min: 5 }),
    body("email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: req.body.password,
      });
      res.json({ data: newUser, success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginUser",
  [body("password").isLength({ min: 5 }), body("email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res
          .status(400)
          .json({ errors: "These credentials do not exists" });
      }

      if (existingUser.password !== req.body.password) {
        return res.status(400).json({ errors: "Invalid Password" });
      }

      return res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

module.exports = router;
