const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    producto: { type: String, required: true },
    image: { type: String, required: true },
    descripcion: { type: String, required: true }
})

const Product = mongoose.model("product", productsSchema)

module.exports = Product