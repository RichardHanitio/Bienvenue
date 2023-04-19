require("dotenv").config();

const asyncWrapper = require("../utils/asyncWrapper");
const {createCustomError} = require("../utils/customError");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const encryptor = require("simple-encryptor")(process.env.ENCRYPTORKEY);
const User = require("../models/User");

const register = asyncWrapper(async(req, res, next) => {
  // encrypt in frontend
  const encryptedBody = encryptor.encrypt(req.body);
  const {email, username, phoneNum, password} = encryptor.decrypt(encryptedBody);
  !(email && username && phoneNum && password) && next(createCustomError("Some attributes are missing", 400))
  
  // check if the user already exists
  const existingUser = await User.findOne({email}).where("isDeleted").equals(false);
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
  const encryptedBody = encryptor.encrypt(req.body);
  const {username, password} = encryptor.decrypt(encryptedBody);

  (!(username && password)) && next(createCustomError("Username or password is missing", 404));

  // check if the user exists in database
  const user = await User.findOne({username}).where("isDeleted").equals(false);
  !user && next(createCustomError("User does not exist", 404));
  
  // if the user exists, compare the password
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  !isPasswordCorrect && next(createCustomError("Username or password is incorrect", 400));
  
  // if password is correct, store a jwt token
  const token = jwt.sign({
    id : user._id,
    isAdmin : user.isAdmin
  }, process.env.JWTKEY);

  const {_id, isAdmin, isDeleted, deletedAt, ...others} = user._doc;
  
  res.cookie("access_token", token, {httpOnly: true});
  return res.status(200).json({
    msg : "Login successful",
    data : others
  })

})

module.exports = {register, login}