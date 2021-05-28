const express = require('express');

const app = express();

app.use('/addproduct', (req, res, next) => {
  console.log('Add Product Middleware');
  res.send('<h1>Add Product Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Express!!!!</h1>');
});

app.listen(3000);