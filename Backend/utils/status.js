const sendSuccess = (res, message, data = {}) => {
    return res.status(200).json({
        status: 'success',
        message,
        data
    });
};

const sendError = (res, message, statusCode = 400) => {
    return res.status(statusCode).json({
        status: 'error',
        message
    });
};

module.exports = {
    sendSuccess,
    sendError
};
