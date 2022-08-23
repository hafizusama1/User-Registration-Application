const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");

const signupController = async (req, res) => {
  try {
    const user = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(user);
    return res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", error: "Duplicate Email" });
  }
};

const loginController = async (req, res) => {
  const user = await UserModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "Error", user: false });
  }
};

module.exports = { signupController, loginController };
