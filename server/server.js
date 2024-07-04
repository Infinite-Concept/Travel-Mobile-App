const express = require("express")
const mongoose = require("mongoose")
const user = require("./Routes/auth")
const path = require("path")
const cors = require("cors")
const trips = require("./Routes/admin/trip")
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
app.use(express.static(path.join(__dirname, "public")))
app.use("/user", user)
app.use("/admin/trip", trips)
