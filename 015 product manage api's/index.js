const express = require("express");
const allRoutes = require("./src/app");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(allRoutes);
app.use("/uploads" , express.static(path.join("src" , "uploads")));
app.use(express.json());

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});