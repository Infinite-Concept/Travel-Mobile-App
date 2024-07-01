const router = require("express").Router()
const Trips = require("../../models/trips")
const uploadConfig = require("../../common/multerConfig")
const path = require("path")
const { body, validationResult } = require('express-validator');

const upload = uploadConfig("uploads/trips")
// Validation and sanitization middleware

const validateAndSanitize = [
    body('tripName').notEmpty().trim().escape(),
    body('tripPrice').notEmpty().trim().escape(),
    body('tripLocation').notEmpty().trim().escape(),
    body('tripOverview').notEmpty().trim().escape(),
    body('tripDetails').notEmpty().trim().escape(),
    body('tripCosts').notEmpty().trim().escape(),
    body('tripCon').notEmpty().trim().escape(),
    body('singleFile').custom((value, { req }) => {
      if (!req.files['singleFile']) {
        throw new Error('Single file is required');
      }
      return true;
    }),
    body('multipleFile').custom((value, { req }) => {
      if (!req.files['multiFiles'] || req.files['multiFiles'].length === 0) {
        throw new Error('At least one image is required');
      }
      return true;
    }),
    async (req, res, next) => {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      next();
    }
];


router.post("/create-trips", upload.fields([{ name: 'singleFile', maxCount: 1 }, { name: 'multipleFile' }]), async (req, res) => {
    try {

        const {tripName, tripPrice, tripLocation, tripOverview, tripDetails, tripCosts, tripCon} = req.body

        const singleFilePath = req.files['singleFile'][0].path;

        const multiFilesPaths = req.files['multipleFile'].map(file => file.path);

        const savedTrips = new Trips({
            tripName,
            tripPrice, 
            tripLocation, 
            tripOverview, 
            tripDetails, 
            tripCosts, 
            tripCon,
            singleFile : singleFilePath,
            multipleFile: multiFilesPaths
        })

        await savedTrips.save();

        res.status(200).json({message: "trips successfully created"})

   
    } catch (error) {
        console.log("Internal server error", error);
        res.status(500).json({message: "Internal server error"})
    }

})

module.exports = router