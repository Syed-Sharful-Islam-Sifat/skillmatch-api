
const ensureDBConnection = require("../config/Db.js")
module.exports = (handler) => {
  return async (req, res) => {
    try {
        await ensureDBConnection()
        console.log(`DB connection passed`)
        const response = await handler(req, res);
       // console.log({response});
        const statusCode = res?.statusCode || 200;
        res.status(statusCode).json({
            type: 'SUCCESS',
            message: res?.message || 'OK',
            result: response ||{},
            error: null,
        });
    } catch (error) {
        const statusCode = error.statusCode || 500;
        const message = error.message || 'Internal Server Error';

        res.status(statusCode).json({
            type: 'ERROR',
            message:error.message,
            result: null,
            error: error.stack,
        });

    }
  };
};

