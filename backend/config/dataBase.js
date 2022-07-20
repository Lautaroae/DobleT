const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
    useUnifieldTopology: true,
    useNewUrlParser: true,
})

    .then(() => console.log("dataBase connected"))
    .catch(err => console.log(err))