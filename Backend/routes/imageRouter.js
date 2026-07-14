const { newImage } = require("../controllers/imageControllers");
const upload = require("../middleware/imageValidate");
const express = require("express");

const router = express.Router();

router.post("/upload", upload.single("image"), newImage );

module.exports = router;