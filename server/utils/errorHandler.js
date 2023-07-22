const {CustomAPIError} = require("./customError");

const errorHandlerMiddleware = (err, req, res, next) => {
  if(err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({msg : err.message, data : err})
  }
  return res.status(500).json({msg : "Something went wrong, please try again", data : `${err}`});
}

module.exports = errorHandlerMiddleware;