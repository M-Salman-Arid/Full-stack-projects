const { 
    createUser,
    verifyOTP,
    loginUser,
    updateUser, 
    deleteAccount, 
    getProfile
} = require("../controllers/userControllers");

const verifyToken = require("../middleware/userAuthencation");

const express = require("express");
const router = express.Router();

router.post("/signup", createUser);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);
router.get("/home", verifyToken, getProfile)
router.put("/update", updateUser);
router.delete("/delete", verifyToken, deleteAccount);


module.exports = router;