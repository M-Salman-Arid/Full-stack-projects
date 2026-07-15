const {searchVideos} = require("../models/searchModel")

const searchVideo = async (req, res) => {

    try {

        const search = req.query.query;

        if(!search) {
            return res.status(400).json({
                success : false,
                message : "Search query is required"
            });
        }

        const videos = await searchVideos(search);

        res.status(200).json({
            success: true,
            count : videos.length,
            data : videos
        })


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { searchVideo }