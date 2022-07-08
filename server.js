const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
require("./db");
const fileupload = require("express-fileupload");

const postRoutes = require("./routes/postRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());

app.use("/api/posts", postRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port: ${port}`));
