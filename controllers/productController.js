const Product = require("../models/productModel");

//post a product
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const saveProduct = await newProduct.save();
        res.status(200).json({message: "Product Saved" });
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//get all product
exports.getAllProducts = async function (req, res, next){
    try {
        const result = await Product.find();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

//get a product by its no
// exports.getProductByNo = async (req, res) => {
//     try {
//         const no = req.params.no;
//         const product = await Product.findOne({no});

//         if (!product) {
//             res.status(404).json({message: "Product not found by no "});
//         } else {
//             res.json(product);
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(404).json({message: "Error fetching Product  by no"});
//     }
// }

// get products by category(/product/sl)
exports.getProductByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const product = await Product.find({category});

        if (!product) {
            res.status(404).json({message: "Product not found by category"});
        } else {
            res.json(product);
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "Error fetching Product by category"});
    }
}