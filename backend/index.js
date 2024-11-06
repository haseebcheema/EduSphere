const express = require("express");
const connectDatabase = require("./config/db");

const app = express();
require("dotenv").config();

const PORT = process.env.APP_PORT;

connectDatabase();

app.listen(PORT, () => console.log("server is running"));