const express = require("express");
const {register, login} = require("../controller/auth.controller");
const authRouter = express.Router();

authRouter.route("/register")
.post(register)

authRouter.route("/login")
.post(login)

module.exports = authRouter;
