const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://yogeshrao:learnandbuild@cluster0.8ev9i1z.mongodb.net/Ecommerce"
);

const ProductRoute =require('./Routes/product.route')
const UserRoute=require('./Routes/User.route')

app.use('/user',UserRoute)
app.use("/products", ProductRoute);

app.use((req, res) => {
  res.status = 404;
  res.send({ error: "not found" });
});
app.listen(3004, () => {
  console.log("server started");
});