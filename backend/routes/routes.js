const Router = require("express").Router()

const productController = require("../controllers/productsController")
const { getProducts } = productController

Router.route("/products")
    .get(getProducts)

module.exports = Router