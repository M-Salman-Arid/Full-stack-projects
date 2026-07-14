const imageModel = require("../models/imageModel");

const newImage = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                message: "Please select an image."

            });

        }

        const result = await imageModel.newImage(

            req.file.originalname,

            req.file.path,

            req.file.mimetype,

            req.file.size

        );

        return res.status(201).json({

            message: "Image uploaded successfully.",

            image: {

                imageName: req.file.originalname,

                imagePath: req.file.path,

                imageType: req.file.mimetype,

                imageSize: req.file.size

            },

            result

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: error.message

        });

    }

};

module.exports = {

    newImage

};