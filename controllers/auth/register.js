/* eslint-disable no-unused-vars */
const Conflict = require("http-errors");
const bcrypt = require("bcrypt");
const { User } = require("../../models/user");

const register = async (req, res) => {
  const { name, email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }

  const result = await User.create({
    name,
    email,
    password,
    subscription,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};
module.exports = register;
