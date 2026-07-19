const userModel = require("../models/userModel")
const sendOTPEmail = require("../utils/sendOTPEmail")
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken")


const createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        if (!username) {
            return res.status(400).json({
                message: "Username is Required!"
            })
        } else if (!email) {
            return res.status(400).json({
                message: "Email is Required!"
            })
        } else if (!password) {
            return res.status(400).json({
                message: "Password is Required!"
            })
        } else if (!role) {
            return res.status(400).json({
                message: "Your role is Required!"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const result = await userModel.createUser(username, email, hashedPassword, role)
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        await userModel.saveOTP( result.insertId, otp, new Date(Date.now() + 10 * 60 * 1000));

        await sendOTPEmail(email, username, otp);

        return res.status(201).json({
            message: "Signup successful. Please verify your email before logging in.",
            result
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const verifyOTP = async (req, res) => {

    try {

        const {email, otp} = req.body;

        const user = await userModel.getUserByEmail(email);

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        if(user.email_otp !== otp) {

            return res.status(400).json({
                message : "Invalid OTP"
            })
        }

        if(new Date() > new Date(user.otp_expires_at)) {

            return res.status(400).json({
                message : "OTP has been expired"
            })
        }

        await userModel.verifyUser(user.id);

        return res.status(200).json({
            message: "Email verified successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

const loginUser = async (req, res) => {
    try {
        const { email, password, role } = req.body

        if (!email) {
            return res.status(400).json({
                message: "Email is required!"
            })
        } else if (!password) {
            return res.status(400).json({
                message: "Password is required!"
            })
        } else if (!role) {
            return res.status(400).json({
                message: "Your Role is required!"
            })
        }


        const user = await userModel.loginUser(email, role)

        if (!user) {
            return res.status(401).json({ message: "User not found or email or role is incorrect" })
        }

        if (!user.is_verified) {
            return res.status(401).json({
                message: "Please verify your email before logging in."
            });
        }

        let isMatch = false

        try {
            isMatch = await bcrypt.compare(password, user.password)
        } catch (bcryptError) {
            isMatch = password === user.password
        }

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" })
        }

        const userRole = role
        const secret = process.env.JWT_SECRET || "dev-secret"
        const token = jwt.sign(
            {
                id: user.id,
                username: user.username,
                email: user.email,
                role: userRole
            },
            secret,
            { expiresIn: "1h" }
        )

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: userRole
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username) {
            res.status(400).json({
                message: "Username is required"
            })
        } else if (!email) {
            res.status(400).json({
                message: "Email is required"
            })
        } else if (!password) {
            res.status(400).json({
                message: "New Password is required"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const result = await userModel.UpdateUserPassword(username, email, hashPassword)

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({
            message: "User updated successfully",
            result
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteAccount = async (req, res) => {
    try {

        const result = await userModel.deleteAccount(req.user.id)

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getProfile = async (req, res) => {

    try {

        res.status(200).json({
            username: req.user.username,
            email: req.user.email,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const resendOTP = async (req, res) => {

    try {

        const {email, username} = req.body;

        const user = await userModel.getUserByEmail(email);

        if(!user) {
            return res.status(404).json({
                success : false,
                message : "User not Found"
            })
        }

        if(user.is_verified) {
            return res.status(400).json({
                success : false, 
                message: "Email already verififed 👍"
            })
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        const expiry = new Date(Date.now() + 10 * 60 * 1000);

        await userModel.saveOTP(user.id, otp, expiry);

        await sendOTPEmail(email, username, otp);

        return res.json({
            success : true,
            message : "OTP send successfully .. Check your email"
        })
        
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
    
}



module.exports = {
    createUser,
    verifyOTP,
    loginUser,
    updateUser,
    deleteAccount,
    getProfile,
    resendOTP
}


