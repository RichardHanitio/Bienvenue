require("dotenv").config();

const asyncWrapper = require("../utils/asyncWrapper");
const {createCustomError} = require("../utils/customError");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const encryptor = require("simple-encryptor")(process.env.ENCRYPTORKEY);
const User = require("../models/User");

const register = asyncWrapper(async(req, res, next) => {
  const {email, username, phoneNum, password} = req.body;
  !(email && username && phoneNum && password) && next(createCustomError("Some attributes are missing", 400))
  
  // check if the user already exists
  const existingUser = await User.findOne({$or: [{email}, {username}, {phoneNum}]}).where("isDeleted").equals(false);
  existingUser && next(createCustomError("User already exists", 409))
  
  // create a new user
  const passwordBcrypt = await bcrypt.hash(password, parseInt(process.env.SALTROUNDS));
  const user = await User.create({email, username, phoneNum, password : passwordBcrypt});
  return res.status(200).json({
    msg : "User registered successfully",
    data : user
  })
})

const login = asyncWrapper(async(req, res, next) => {
  // check if access cookie is set
  req.cookies.access_token && next(createCustomError("User is logged in", 400));

  // encrypt in frontend
  const {email, password} = req.body;

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
  
  res.cookie("access_token", token);
  return res.status(200).json({
    msg : "Login successful",
    data : others
  })

})

const logout = asyncWrapper(async(req, res, next) => {
  res.clearCookie("access_token");
  return res.status(200).json({
    msg : "Logout successful",
  })
})

module.exports = {register, login, logout}