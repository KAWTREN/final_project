const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({path: 'config.env' });
const dataConnect = require('./config/database');
const category_route = require('./Routes/category_route');

//connect with db
dataConnect();

//express app
const app = express();
//Middlewares
app.use(express.json());

if (process.env.NODE_ENV== 'development') {
    app.use(morgan('dev'));
    console.log(`node: ${process.env.NODE_ENV}`);
}


// Routes
app.use('/api/v1/categories',category_route);

app.all('*', (req, res, next) => {
    const err = new Error(`can't find this route: ${req.originalUrl}`);
    next(err.message);
});

// error handling middleware
app.use((err, req, res, next) => {
    res.status(400).json({ err });
});


const PORT =process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});
