// middleware handles errors by providing the stack error message
// or returning the current status code
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })

}

module.exports = {
    errorHandler
}