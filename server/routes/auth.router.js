const express = require("express");
const {register, login, logout, loginBackdoor} = require("../controller/auth.controller");
const authRouter = express.Router();

authRouter.route("/register")
.post(register)

authRouter.route("/login")
.post(login)

authRouter.route("/login/backdoor")
.get(loginBackdoor)

authRouter.route("/logout")
.get(logout)

module.exports = authRouter;
