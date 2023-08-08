const express = require("express");
const paymentsRouter = express.Router();
const {createEmptyPayment, createPayment, getAllPayments, getPayment, editPayment} = require("../controller/payments.controller");
const {verifyUser, verifyAdmin} = require("../utils/verifyToken");

paymentsRouter.route("/empty")
.post(createEmptyPayment)

paymentsRouter.route("/")
.get(getAllPayments)
.post(createPayment)

paymentsRouter.route("/:id")
.get(getPayment)

paymentsRouter.route("/:id/edit")
.patch(editPayment)

// paymentsRouter.route("/:id/delete")
// .get(verifyAdmin, deletePayment)

// usersRouter.route("/:id/restore")
// .get(verifyAdmin, restoreDeletedPayment)

module.exports = paymentsRouter;
