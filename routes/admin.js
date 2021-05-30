const express = require('express');

const router = express.Router();

router.get('/addproduct', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('/product', (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  res.redirect('/');
});

module.exports = router
