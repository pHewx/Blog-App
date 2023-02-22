const express = require("express");
const app = express();
const routers = require("./routes/index");
const connectDB = require("./config/connectDB");
const cors = require("cors");
require("dotenv").config();

require("./passport");

// connect DB
connectDB();

// middlewares
app.use(
  cors({
    origin: process.env.URL_CLIENT,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
routers(app);

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log("app is running on " + PORT);
});
