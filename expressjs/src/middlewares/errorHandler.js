export const errorHandler = (err, req, res, next)=>{
     const statusCode = err.statusCode || 500;
     const message = err.message || 'Internal Server Error';

     console.error(`Error: ${new Date().toISOString()} - ${statusCode} - ${message}`);
     if (err.stack) console.error(err.stack);
     res.status(statusCode).json({
          error: {
               status: 'error',
               statusCode: statusCode,
               message: message,
               ...(process.env.NODE_ENV === 'development' && { stack: err.stack})
          }
     });
};