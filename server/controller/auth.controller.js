require("dotenv").config();

const asyncWrapper = require("../utils/asyncWrapper");
const {createCustomError} = require("../utils/customError");
const bcrypt = require("bcrypt")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const register = asyncWrapper(async(req, res, next) => {
  const body = JSON.parse(CryptoJS.AES.decrypt(req.body.data, process.env.SECRETKEY).toString(CryptoJS.enc.Utf8));

  const {email, name, phoneNum, password} = body;
  !(email && name && phoneNum && password) && next(createCustomError("Some attributes are missing", 400))
  
  // check if the user already exists
  const existingUser = await User.findOne({$or: [{email}, {name}, {phoneNum}]}).where("isDeleted").equals(false);
  existingUser && next(createCustomError("User already exists", 409))

  // create a new user
  const passwordBcrypt = await bcrypt.hash(password, parseInt(process.env.SALTROUNDS));
  const user = await User.create({email, name, phoneNum, password : passwordBcrypt});
  return res.status(200).json({
    msg : "User registered successfully",
    data : user
  })
})

const login = asyncWrapper(async(req, res, next) => {
  // check if access cookie is set
  req.cookies.access_token && next(createCustomError("User is logged in", 400));

  // decrypt encrypted body
  const body = JSON.parse(CryptoJS.AES.decrypt(req.body.data, process.env.SECRETKEY).toString(CryptoJS.enc.Utf8));

  const {email, password} = body;

  (!(email && password)) && next(createCustomError("Username or password is missing", 404));

  // check if the user exists in database
  const user = await User.findOne({email}).where("isDeleted").equals(false);
  !user && next(createCustomError("Email or password is incorrect", 400));
  
  // if the user exists, compare the password
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if(!isPasswordCorrect) {
    return next(createCustomError("Email or password is incorrect", 400));
  }
  
  // if password is correct, store a jwt token
  const token = jwt.sign({
    id : user._id,
    isAdmin : user.isAdmin
  }, process.env.JWTKEY);

  const {_id, isAdmin, isDeleted, deletedAt, ...others} = user._doc;
  
  // for development
  // res.cookie("access_token", token);

  // for deployment
  return res.status(200).cookie("access_token", token, {
    secure: true, 
    httpOnly: true,
    sameSite : 'none',
  }).json({
    msg : "Login successful",
    data : others
  });

})

const logout = asyncWrapper(async(req, res, next) => {
  res.clearCookie("access_token");
  return res.status(200).json({
    msg : "Logout successful",
  })
})

module.exports = {register, login, logout}