const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  email : {
    type: String, 
    required : true,
    unique : true,
  },
  name : {
    type: String, 
    required : true,
    unique : true,
  },
  phoneNum : {
    type: String, 
    required : true,
    unique : true,
  },
  password : {
    type: String, 
    required : true,
  },
  resetPasswordToken : {
    type : String
  },
  resetPasswordTokenSentAt : {
    type : Date
  },
  isAdmin : {
    type: Boolean, 
    default : false,
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

module.exports = model("User", UserSchema);