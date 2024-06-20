const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
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
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
})

module.exports =  mongoose.model("User", UserScheme)