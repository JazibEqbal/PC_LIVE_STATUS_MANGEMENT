const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const connectDB = require("./config/db");
const pcRoutes = require("./routes/pcRoutes");

connectDB();

app.use(pcRoutes);

port = process.env.PORT || 8080;

app.listen(port, console.log(`Server listening on port ${port}`));
