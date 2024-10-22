const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors=require('cors')
const app = express();
app.use(cors())

// Load environment variables from .env file
dotenv.config();

// Create Express app

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Database connection
require('./db/connection'); // Ensure this file handles the connection properly

// Route handling
const employeeRouter = require('./routes/adminRoutes');
app.use('/api/employees', employeeRouter);
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);
// const user = require('./routes/user');
// app.use('/api/user', user);



// Start the server
const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
