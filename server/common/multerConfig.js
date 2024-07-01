const multer = require("multer")
const path = require("path")

function uploadConfig(uploadPath){
    // Multer configuration
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadPath)
        },

        filename: function (req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, file.fieldname + '-' + Date.now() + ext);
        }
    });

    const upload = multer({ storage: storage });
    return upload
}

module.exports = uploadConfig