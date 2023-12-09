require("dotenv").config();

const Payment = require("../models/Payment");
const asyncWrapper = require("../utils/asyncWrapper");
const {createCustomError} = require("../utils/customError");
const CryptoJS = require("crypto-js")

const createEmptyPayment = asyncWrapper(async(req, res, next) => {
  const body = JSON.parse(CryptoJS.AES.decrypt(req.body.data, process.env.SECRETKEY).toString(CryptoJS.enc.Utf8));

  !(body.reservation) && next(createCustomError("Reservation ID is not defined", 400));
  // create a new empty payment
  const payment = await Payment.create({...body, status : "not paid"});
  return res.status(200).json({
    msg : "Payment create successfully",
    data : payment
  })
})

const createPayment = asyncWrapper(async(req, res, next) => {
  const body = req.body;
  !(body.reservation) && next(createCustomError("Reservation ID is not defined", 400));
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
  let payments;
  payments = await Payment
    .find()
    .where("isDeleted").equals(false)
    .populate({
      path : "reservation",
      model : "Reservation",
      populate : {
        path : "items.item",
        model : "Menu"
      }
  })
    .exec();

  if(req.query.uid) {
    payments.filter(payment => {
      return payment.reservation.user.toString() === req.query.uid
    });  
  }
  
  return res.status(200).json({
    msg : "Payments retrieved successfully",
    data : payments
  })
})

const getPayment = asyncWrapper(async(req, res, next) => {
  const id = req.params.id;
  !id && next(createCustomError("Id missing", 404))

  const payment = await Payment.findById(id).where("isDeleted").equals(false).populate({
    path : "reservation",
    model : "Reservation",
    populate : {
      path : "items.item",
      model : "Menu"
    }
  }).exec();
  !payment && next(createCustomError("No payment with id "+id+" found", 404)) 

  return res.status(200).json({
    msg : "Payment retrieved successfully",
    data : payment
  })
})

const editPayment = asyncWrapper(async(req, res, next) => {
  const id = req.params.id;
  !id && next(createCustomError("Id missing", 404))

  // decrypt encrypted body
  const body = JSON.parse(CryptoJS.AES.decrypt(req.body.data, process.env.SECRETKEY).toString(CryptoJS.enc.Utf8));

  !body.method && next(createCustomError("Method missing", 404))

  const payment = await Payment.findOneAndUpdate({_id: id}, body, {
    new : true,
    runValidators : true
  }).where("isDeleted").equals(false);
  !payment && next(createCustomError("No payment with id "+id+" found", 404)) 

  return res.status(200).json({
    msg : "Payment edited successfully",
    data : payment
  })
})

module.exports = {createEmptyPayment, createPayment, getAllPayments, getPayment, editPayment}