const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

app.use('/addproduct', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!!!!</h1>');
});

app.listen(3000);