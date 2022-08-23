const express = require("express");
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/api/signup", authController.signupController);
router.post("/api/login", authController.loginController);

module.exports = router;
