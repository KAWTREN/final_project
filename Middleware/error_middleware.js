const ApiError = require('../utils/ApiError');
const global_Error = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV === 'development') {
        sendError_Dev(err, res);
    } else {
        sendError_Prod(err, res);
    }
};
const sendError_Dev = (err, res) =>
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
const sendError_Prod = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,

    });
};
module.exports = global_Error;