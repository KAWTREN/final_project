const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({path: 'config.env' });
const ApiError = require('./utils/ApiError');
const globalError = require('./Middleware/error_middleware');
const dataConnect = require('./config/database');
const categoryroute = require('./Routes/categoryroute');
const subcategoryroute = require('./Routes/subcategoryroute');


//connect with db
dataConnect();

//express app
const app = express();
//Middlewares
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`node: ${process.env.NODE_ENV}`);
}


// Routes
app.use('/api/v1/categories',categoryroute);
app.use('/api/v1/subcategories',subcategoryroute);

app.all('*', (req, res, next) => {

    next(new ApiError(`can't find this route: ${req.originalUrl}`, 400));
});


app.use(globalError);


const PORT =process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});


process.on("unhandledRejection",(err) => {
    console.error(`unhandledRejection Error: ${err.name} | ${err.message}`);
    server.close(() => {
        console.error('shutting down........');
        process.exit(1);
    });
});
