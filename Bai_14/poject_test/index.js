const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project-test');

const Products = mongoose.model('Products', { 
  title: String,
  price: Number,
  thumbnail: String
});

const app = express();
const port = 3000;

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public')) // chuyển thu mục public thành public

app.get('/', (req, res) => {
  res.render('index', {
    title : "Trang chủ",
    message: "Đây là trang chủ"
  })
})

app.get('/products', async(req, res) => {

  const products = await Products.find({});
  console.log(products);
  res.render('products', {
    title : "Trang danh sách sản phẩm",
    products : products
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title : "Trang products"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
