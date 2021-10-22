const ErrorResponse = require('../utils/errorResponse')

const errorHandler = (err,req,res,next) => {
    let error = {...err};
    error.message = err.message
    
    console.log(err)

    //Mongoose Duplicate Error
    if(err.code === 11000){
        const message = "Duplicate field value entered"
        new ErrorResponse(message,400)
    }
    //Validation Error
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message)
        error = new ErrorResponse(message, 400)
    }

    res.status(error.statusCode || 500).json({
        success : false,
        error : error.message || 'Server Error'
    })
}

module.exports = errorHandler