require("dotenv").config();

const Payment = require("../models/Payment");
const asyncWrapper = require("../utils/asyncWrapper");
const {createCustomError} = require("../utils/customError");

const createEmptyPayment = asyncWrapper(async(req, res, next) => {
  const body = req.body;
  !(body.reservationId) && next(createCustomError("Reservation ID is not defined", 400));
  // create a new empty payment
  const payment = await Payment.create({...body, status : "not paid"});
  return res.status(200).json({
    msg : "Payment create successfully",
    data : payment
  })
})

const createPayment = asyncWrapper(async(req, res, next) => {
  const body = req.body;
  !(body.reservationId) && next(createCustomError("Reservation ID is not defined", 400));
  !(body.method) && next(createCustomError("Method is not defined", 400));
  
  let attributeMissing = false;
  switch(body.method) {
    case "e-wallet" : 
      attributeMissing = !body.phoneNum
      break;
    case "credit-debit-card" : 
      attributeMissing = !(body.cardHolderName && body.creditCardNumber &&body.expirationDate && body.cvv)
      break;
    case "bank" : 
      attributeMissing = !(body.accountHolderName && body.accountNumber && body.bankName)
      break;
    default :
      break;
  }
  attributeMissing && next(createCustomError("Some attributes are missing", 400))   

  // create a new payment
  const payment = await Payment.create(body);
  return res.status(200).json({
    msg : "Payment created successfully",
    data : payment
  })
});

const getAllPayments = asyncWrapper(async(req, res, next) => {
  const payments = await Payment.find().where("isDeleted").equals(false).populate("reservationId").exec()
  return res.status(200).json({
    msg : "Payments retrieved successfully",
    data : payments
  })
})

module.exports = {createEmptyPayment, createPayment, getAllPayments}