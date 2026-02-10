const express = require("express");
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors({
    origin: "*"
  }));
  
app.use(express.json());



app.use("/api/tasks", taskRoutes);

module.exports = app;
