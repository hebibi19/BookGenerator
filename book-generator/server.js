const express = require('express');
const cors = require('cors');
const connectDB = require('./backend/config/db')
require('dotenv').config();
const {errorHandler} = require('./backend/middleware/errorMiddleware');

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/home/books', require('./backend/routes/books'));
app.use('/home/users', require('./backend/routes/users'));
// error Handler
app.use(errorHandler);

// listening on assigned port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

