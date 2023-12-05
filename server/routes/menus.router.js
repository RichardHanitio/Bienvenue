const fs = require("fs");
const path = require("path");
const express = require("express");
const menusRouter = express.Router();
const {createMenu, getAllMenus, getMenu, editMenu, deleteMenu, restoreDeletedMenu} = require("../controller/menus.controller");
const {verifyUser, verifyAdmin} = require("../utils/verifyToken");
const multer = require("multer");

const tempDir = path.join(__dirname, "uploads")

if(!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "./uploads/");
    cb(null, tempDir)
  },
  filename : function (req, file, cb) {
    cb(null, Date.now()+"-"+file.originalname);
  }
});
const upload = multer({storage : storage});

menusRouter.route("/")
.get(getAllMenus)
.post(verifyAdmin, upload.single("img"), createMenu)

menusRouter.route("/:id")
.get(getMenu)

menusRouter.route("/:id/edit")
.patch(verifyAdmin, editMenu)

menusRouter.route("/:id/delete")
.get(verifyAdmin, deleteMenu)

menusRouter.route("/:id/restore")
.get(verifyAdmin, restoreDeletedMenu)

module.exports = menusRouter;
