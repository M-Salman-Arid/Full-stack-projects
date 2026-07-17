const videoModel = require("../models/searchModel")

const getVideos = async (req, res) => {

    try {

        const videos = await videoModel.getVideos();

        if(videos.length === 0) {
            return res.status(404).json({
                success: false,
                message : "No video found in database"
            })
        }

        return res.status(200).json({
            success : true,
            data : videos
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

const searchVideo = async (req, res) => {

    try {

        const search = req.query.query;

        if (!search) {
            return res.status(400).json({
                success: false,
                message: "Search query is required"
            });
        }

        const videos = await videoModel.searchVideos(search);

        return res.status(200).json({
            success: true,
            count: videos.length,
            data: videos
        })


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const searchSuggestion = async (req, res) => {
    try {
        const search = req.query.query;

        if (!search) {
            return res.status(400).json({
                success: false,
                message: "Search query is required"
            });
        }

        const videos = await videoModel.searchVideos(search);

        const suggestions = videos.slice(0,5).map((videos) => {
            return {
                id : videos.id,
                title : videos.title
            }
        })

        return res.status(200).json({
            success: true,
            count: suggestions.length,
            data: suggestions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

};


module.exports = { 
    searchVideo,
    getVideos,
    searchSuggestion,
}