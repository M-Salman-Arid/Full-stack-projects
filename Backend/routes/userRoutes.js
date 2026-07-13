const { 
    createUser,
    verifyEmail,
    loginUser,
    updateUser, 
    deleteAccount, 
    getProfile
} = require("../controllers/userControllers");

const verifyToken = require("../middleware/userAuthencation");

const express = require("express");
const router = express.Router();

router.post("/signup", createUser);
router.get("/verify/:token", verifyEmail);
router.post("/login", loginUser);
router.get("/home", verifyToken, getProfile)
router.put("/update", updateUser);
router.delete("/delete", verifyToken, deleteAccount);


module.exports = router;