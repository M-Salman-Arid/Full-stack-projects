const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

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
        const verificationToken = crypto.randomBytes(32).toString("hex");
        await userModel.saveVerificationToken(
            result.insertId,
            verificationToken
        );

        const verificationLink =
            `http://localhost:5173/verify/${verificationToken}`;

        await transporter.sendMail({

            from: process.env.EMAIL,

            to: email,

            subject: "Verify Your Email",

            html: `
        <h2>Welcome ${username}</h2>

        <p>Thank you for signing up.</p>

        <p>Please click the button below to verify your account.</p>

        <a href="${verificationLink}"
           style="
                background:#ff7448;
                color:white;
                padding:12px 20px;
                text-decoration:none;
                border-radius:8px;
                margin-bottom:10px;
           ">
            Verify Account
        </a>
    `

        });

        res.status(201).json({
            message: "Signup successful. Please verify your email before logging in.",
            result
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const verifyEmail = async (req, res) => {

    try {  

        const { token } = req.params;

        const user =
            await userModel.getUserByVerificationToken(token);

        if (!user) {

            return res.status(404).json({
                message: "Invalid verification link"
            });

        }

        await userModel.verifyUser(token);

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



module.exports = {
    createUser,
    verifyEmail,
    loginUser,
    updateUser,
    deleteAccount,
    getProfile
}


