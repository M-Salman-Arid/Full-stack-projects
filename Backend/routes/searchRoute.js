
const { searchVideo, getVideos, searchSuggestion} = require("../controllers/serachController")
const express = require("express")
const router = express.Router()

router.get("/", getVideos)
router.get("/search", searchVideo)
router.get("/suggestion", searchSuggestion)
module.exports = router