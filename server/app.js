const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const rateLimit = require('express-rate-limit');
// const helmet = require('helmet');
// const mongoSanitize = require('express-mongo-sanitize');
// const xss = require("xss-clean");
// const hpp = require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const propertyRouter = require('./routes/propertyRoutes');
const tenancyRouter = require('./routes/tenancyRoutes');
const maintenanceRouter = require('./routes/maintenanceRoutes');
const paymentRouter = require('./routes/paymentRoutes');
const cookieParser = require('cookie-parser');

const app = express();

// 1) GLOBAL MIDDLEWARES
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true // Allow cookies and authorization headers
  })
);

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serving static files
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());

// 3) ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/property', propertyRouter);
app.use('/api/v1/tenancy', tenancyRouter);
app.use('/api/v1/maintenance', maintenanceRouter);
app.use('/api/v1/payment', paymentRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
