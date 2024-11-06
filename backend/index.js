const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.APP_PORT;

app.listen(PORT, () => console.log("server is running"));