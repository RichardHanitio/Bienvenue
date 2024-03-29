const express = require("express");
const usersRouter = express.Router();
const {createUser, getAllUsers, getUser, editUser, deleteUser, restoreDeletedUser, resetPasswordUser} = require("../controller/users.controller");
const {verifyUser, verifyAdmin} = require("../utils/verifyToken");

usersRouter.route("/")
.get(verifyAdmin, getAllUsers)
.post(verifyAdmin, createUser)

usersRouter.route("/:id")
.get(verifyAdmin, getUser)

usersRouter.route("/:id/edit")
.patch(verifyAdmin, editUser)

usersRouter.route("/:id/delete")
.get(verifyAdmin, deleteUser)

usersRouter.route("/:id/restore")
.get(verifyAdmin, restoreDeletedUser)

usersRouter.route("/reset-password")
.post(resetPasswordUser)

module.exports = usersRouter;
