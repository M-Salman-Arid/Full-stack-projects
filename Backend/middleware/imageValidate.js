
const multer = require("multer")

const storage = multer.memoryStorage()

const upload = multer({

    storage : storage,

    limits : {
        fileSize : 200 * 1024
    },


    fileFilter : (req, file, cb) => {

        const allowedTypes = [
            "image/jpg",
            "image/png",
            "image/jpeg",
            "image/webpg"
        ];

        if(allowedTypes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error ("Only image files are allowed."))
        }
    }
})

module.exports = upload