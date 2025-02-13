import express from "express";
import morgan from "morgan";
import { Router } from "express";

const app = express();
const router = Router();

app.use(morgan('dev'));

router.get("/", (req, res) => {
  res.send('e-commerce')
})

router.get('/products', (req, res) => {
  res.send('products')
})

router.get('/customers', (req, res) => {
  res.send('customers')
})

app.use('/', router)

app.listen(5000, () => {
  console.log('Server on port 5000');
});
