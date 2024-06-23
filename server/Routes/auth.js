const router = require("express").Router()
const User = require("../models/user")
const {body, validationResult} = require("express-validator")
const bcrypt = require("bcrypt")
const tranportMailer = require("../common/transport")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

// Validation middleware 
const validateEmail = body("email").isEmail().withMessage("Invalid email address").normalizeEmail().escape()
const validatePassword = body("password").trim().escape()
const validateFullName = body("fullName").trim().escape()


router.post("/create", validateEmail, validatePassword, validateFullName, async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const { fullName, email, choosePassword } = req.body;

        let existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({message: "email already registered"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(choosePassword, salt)

        if(!hashedPassword){
            return res.status(500).json({message: "Internal sever error"})
        }

        let user = new User({
            fullName: fullName,
            email: email,
            choosePassword: hashedPassword
        })

        let savedUser = await user.save()

        let subject = `You have successful registered with traveler`
        let text = `
                Traveler \n\n\n
                Dear User,
                Welcome to our platform!
                Your registration has been successfully completed.
                Best regards,
                Traveler
        `

        tranportMailer(savedUser.email, subject, text)

        res.status(200).json({message: "User successful create"})

    } catch (error) {
        return res.status(500).json({message: "Internal sever error"})
    }
})

router.post("/login", validateEmail, validatePassword, async(req, res) => {
    try {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;

        // check if user exists 
        const user = await User.findOne({email})

        if(!user) {
            return res.status(401).json({message: "invalid credentials"})
        }
 
        // compare password
        const isMatchPwd = bcrypt.compare(password, user.choosePassword);

        if(!isMatchPwd){
            return res.status(401).json({message: "invalid credentials"})
        }

        //generate JWT token 
        const token = jwt.sign({userId: user._id, email: user.email}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        res.json({token})
        
    } catch (error) {
        console.error("Login error", error);

        res.status(500).json({message: "Internal server error"})
    }
})

router.post("/forgot-password", validateEmail, async(req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const { email } = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        
        const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();
        user.resetPasswordCode = confirmationCode;
        user.resetPasswordCodeExpires = Date.now() + 600000

        let savedUser = await user.save()

        let subject = `Password Reset Confirmation Code`
        let text = `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n`
        + `Please copy and paste the following link, to complete the process:\n\n`
        + `Your confirmation code is: ${confirmationCode}\n\n`
        + `If you did not request this, please ignore this email and your password will remain unchanged.\n`

        tranportMailer(savedUser.email, subject, text)

        res.status(201).json({message: "An email has been sent to your mail, confirm and proceed with you change of password"})
    } catch (error) {
        console.error('Forgot password error: ', error);
        res.status(500).json({ message: 'Server error' });
    }
})

router.post("/confirm-reset-code", async (req, res) => {
    try {
        const{confirmationCode} = req.body

        const user = await User.findOne({
            resetPasswordCode: confirmationCode,
            resetPasswordCodeExpires: {$gt: Date.now()}
        })

        if(!user){
            return res.status(400).json({message: "Invalid or expired confirmation code"})
        }

        const resetToken = crypto.randomBytes(20).toString("hex")

        user.resetPasswordToken = resetToken.toString();
        user.resetPasswordCode = undefined
        user.resetPasswordCodeExpires= undefined
        await user.save()

        res.status(200).json({resetToken})
        
    } catch (error) {
        console.error('Forgot password error: ', error);
        res.status(500).json({ message: 'Server error' });
    }
})

router.post("/reset-password", async (req, res) => {
    try {

        const {resetToken, newPassword} = req.body

        const user = await User.findOne({resetPasswordToken: resetToken})

        if(!user){
            return res.status(400).json({message: "Invalid or expired reset token"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newPassword, salt)

        user.password = hashedPassword
        user.resetPasswordToken = undefined
        
        await user.save()

        res.status(200).json({message: "Password updated successfully"})
        
    } catch (error) {
        console.error('Forgot password error: ', error);
        res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router