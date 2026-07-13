

const validateImage = (req, res ) => {
    
    if(!req.file) {
        res.status(400).json({
            message : "No Image Uploaded"
        })
    }

    else {

        return res.status(200).json({
            message : "Image file uploaded successfully",
            fileName : req.file.originalname,
            fileSize : req.file.size,
            fileType : req.file.mimetype
        });
    }
}

module.exports = validateImage