const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendOTPEmail = async (email,username, otp) => {

    try {

        await transporter.sendMail({

            from: process.env.EMAIL,

            to: email,

            subject: "Email Verification OTP",

            html: `
        <h2>Hello ${username}</h2>

        <p>Your verification code is:</p>

        <h1 style="letter-spacing:6px;color:#ff7448;">
            ${otp}
        </h1>

        <p>This OTP is valid for 10 minutes.</p>

        <p>Do not share this code with anyone.</p>
    `
        });
        
    } catch (error) {
        throw error;
    }
}

module.exports = sendOTPEmail;