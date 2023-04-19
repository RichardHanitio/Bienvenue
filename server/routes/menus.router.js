const express = require("express");
const menusRouter = express.Router();
const {createMenu, getAllMenus, getMenu, editMenu, deleteMenu, restoreDeletedMenu} = require("../controller/menus.controller");
const {verifyUser, verifyAdmin} = require("../utils/verifyToken");

menusRouter.route("/")
.get(getAllMenus)
.post(verifyAdmin, createMenu)

menusRouter.route("/:id")
.get(getMenu)

menusRouter.route("/:id/edit")
.patch(verifyAdmin, editMenu)

menusRouter.route("/:id/delete")
.patch(verifyAdmin, deleteMenu)

menusRouter.route("/:id/restore")
.get(verifyAdmin, restoreDeletedMenu)

module.exports = menusRouter;
