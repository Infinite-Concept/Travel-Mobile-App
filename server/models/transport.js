const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    place: {
        type: String,
        require: true
    },
    place: {
        type: String,
        require: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("trip", tripSchema)