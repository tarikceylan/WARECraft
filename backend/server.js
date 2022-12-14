require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 3500;

connectDB();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/auth', authRoutes);

mongoose.connection.once('open', () => {
  console.log(`Connected to MongoDB on ${mongoose.connection.db.databaseName}`);
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.log(`Error Code: ${err.code}, ${err.message}`);
});
