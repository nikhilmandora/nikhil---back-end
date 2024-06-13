const express = require("express");
const upload = require("./middleware/multer");

require("./config");

const app = express();

app.post("/insert_product" , upload , (req,res)=>{
    res.status(200).json({msg:"file uploaded"});
});

app.listen(4000 , ()=>{
    console.log("server is running on port 4000");
});