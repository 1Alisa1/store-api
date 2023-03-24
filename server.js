const express = require("express");

const app = express();

const productRouter = require("./routes/product.routes");

const PORT = 8080;

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

app.use(express.json());
app.use("/", productRouter);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("Server is running");
});
