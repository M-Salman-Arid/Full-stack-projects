
const {searchVideo} = require("../controllers/serachController")
const express = require("express")
const router = express.Router()


router.get("/search" , searchVideo)

module.exports = router