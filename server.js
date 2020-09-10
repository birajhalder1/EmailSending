const express = require("express");
const dotenv = require("dotenv");

//Load env
dotenv.config({ path: "./config/config.env" });

const app = express();

// Load route file
const user = require("./router/user");

// Middleware
app.use("/api/v1/user", user);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode and port no ${PORT}`
  )
);
