require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 3500;

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
