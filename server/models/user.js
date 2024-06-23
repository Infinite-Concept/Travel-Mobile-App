const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true,
    },
    zipCode: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
        lowercase: true
    },
    city: {
        type: String,
        trim: true,
        lowercase: true
    },
    state: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    country: {
        type: String,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    choosePassword: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date, 
        default: Date.now
    },
    resetPasswordCode: { type: String },
    resetPasswordCodeExpires: { type: Date },
    resetPasswordToken: {type: String}
})

module.exports =  mongoose.model("User", UserScheme)