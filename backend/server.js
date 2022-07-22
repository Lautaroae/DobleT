
require("dotenv").config()
require("./config/dataBase")

const express = require("express");
const cors = require("cors")
const Router = require("./routes/routes")
const PORT = 4000;
const app = express();


//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use("/api", Router)

app.listen(PORT, () => console.log("Server ready on PORT " + PORT));