import express from "express";
import morgan from "morgan"

const app = express();


app.use(morgan('dev'));

app.listen(5000, () => {
  console.log('Server on port 5000');
});
