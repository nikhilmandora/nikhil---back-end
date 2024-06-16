const Product = require("../../models/product/Product");


const readProducts = async (req , res) => {
    try{
        const response = await Product.find();
        
        const filepath = `${req.protocol}://${req.get("host")}/uploads`

        res.status(200).json({msg:"data fetched" , data : response , filepath:filepath});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"internal server error"});
    }
};

module.exports = readProducts;