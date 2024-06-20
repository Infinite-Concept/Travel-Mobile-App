const express = require("express")
const mongoose = require("mongoose")
const user = require("./Routes/auth")
const cors = require("cors")
require('dotenv').config()

const app = express()
let port = process.env.PORT

mongoose.connect("mongodb://localhost/travel")
.then(() => {
    app.listen(port, () => {
        console.log(`server is listening on port ${port}`);
    })
})
.catch((err) => {
    console.log(err);
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/user", user)