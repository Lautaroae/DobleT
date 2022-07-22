const Product = require("../models/products")

const productController = {
    getProducts: async (req, res) => {
        let product
        let error

        try {
            product = await Product.find()
        } catch (err) {
            console.log(error)
        }
        res.json({
            response: error ? "ERROR" : { product },
            success: error ? false : true,
            error: error
        })
    }
}
module.exports = productController