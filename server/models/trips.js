const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
    singleFile: {
        type: String,
        require: true
    },
    multipleFile: {
        type: [String],
        require: true
    },
    tripName: {
        type: String,
        require: true
    },
    tripPrice: {
        type: String,
        require: true
    },
    tripLocation: {
        type: String,
        require: true
    },
    tripOverview: {
        type: String,
        require: true
    },
    tripDetails: {
        type: String,
        require: true
    },
    tripCosts: {
        type: String,
        require: true
    },
    tripCon: {
        type: String,
        require: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("trip", tripSchema)