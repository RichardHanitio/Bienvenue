const {Schema, model} = require('mongoose');

const PaymentSchema = new Schema({
  reservation : {
    type : Schema.Types.ObjectId,
    ref : "Reservation",
    required : true,
    unique : true,
  },
  method : {
    type : String,
    enum : ["e-wallet", "credit-debit-card", "bank"],
  },
  cardHolderName : {
    type : String,
  },
  creditCardNumber : {
    type : String,
  },
  expirationDate : {
    type : Date,
  },
  cvv : {
    type : Number,
  },
  accountHolderName : {
    type : String,
  },
  accountNumber : {
    type : String,
  },
  bankName : {
    type : String,
    enum : ["mandiri", "bca", "bni", "bri", "cimbniaga"]
  },
  phoneNum : {
    type : String,
  },
  status : {
    type : String,
    enum : ["not paid", "pending", "completed", "declined"],
    default : "not paid",
    required : true,
  },
  comment : {
    type : String, 
  },
  paymentDateTime : {
    type : Date,
    default : null,
  },
  isDeleted : {
    type: Boolean,
    default : false,
  },
  deletedAt : {
    type : Date,
    default : null,
  }
}, {
  timestamps : true,
  strictPopulate : false,
})

module.exports = model("Payment", PaymentSchema);