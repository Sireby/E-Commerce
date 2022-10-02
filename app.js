var express = require("express");
const UserRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const authRouter = require("./routes/authRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute")
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const PORT = 4500;
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/", productRouter);
app.use("/", UserRouter);
app.use("/", cartRouter);
app.use("/", orderRouter);

app.post("/nothing", () => {
  console.log("......mother");
});

mongoose.connect(process.env.mongoDB);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});