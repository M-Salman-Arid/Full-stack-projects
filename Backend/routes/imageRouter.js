

const express = require("express");
const validateImage = require("../controllers/imageControllers");
const upload = require("../middleware/imageValidate")

const router = express.Router();

router.post("/upload", upload.single("image"), validateImage)

module.exports = router;