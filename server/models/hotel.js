const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    other:{
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    rooms: {
        type: [String],
        require: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("trip", tripSchema)