const express = require('express');
const fs = require('fs');
const app = express();
const { products } = require('./data');

// const data = fs.readFileSync();

app.get('/', (req, res) => {
  //   res.json(products);
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  //   console.log(req.params); -- returns { productID: '1' }
  //   const singleProduct = products.find((product) => product.id === 1);
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('product does not exist');
  }
  return res.json(singleProduct);
});

app.get('api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send(`Hello world`);
});

app.get('/api/v1/query', (req, res) => {
  //   console.log(req.query); -- { name: 'john', id: '4' }

  const { search, limit } = req.query;
  let sortedProducts = [...products]; // sorting

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log(`server is listened to`);
});
