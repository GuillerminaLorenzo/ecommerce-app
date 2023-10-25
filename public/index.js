const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("../routes/admin/auth");
const adminProductsRouter = require("../routes/admin/products");
const productsRouter = require("../routes/products");
const cartRouter = require("../routes/carts");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(cookieSession({ keys: ["kcnsjbdv123"] }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authRouter);
app.use(adminProductsRouter);
app.use(productsRouter);
app.use(cartRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
