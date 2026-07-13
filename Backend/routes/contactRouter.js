const {newContact} = require("../controllers/contactController")
const express = require("express")
const router = express.Router()


router.post("/contact" , newContact)

module.exports = router