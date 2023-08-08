const {Schema, model} = require('mongoose');

const ItemSchema = new Schema({
  item : {
    type : Schema.Types.ObjectId,
    ref : "Menu",
    required : true,
  },
  amount : {
    type : Number,
    required : true,
  }
})

const ReservationSchema = new Schema({
  user : {
    type: Schema.Types.ObjectId, 
    required : true,
    ref: "User"
  },
  items : {
    type : [ItemSchema],
    required : true,
  },
  date : {
    type: Date, 
    required : true,
  },
  time : {
    type: Date, 
    required : true,
  },
  totalGuest : {
    type: Number, 
    default : 1,
  },
  totalPrice : {
    type : Number,
    default : 0,
    required : true,
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
})

module.exports = model("Reservation", ReservationSchema);