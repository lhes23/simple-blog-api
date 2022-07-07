const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
require("./db");

const postRoutes = require("./routes/postRoutes");

app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port: ${port}`));
