import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../../api/axios";
import "./VerifyOTP.css"

function OTPVerification() {

    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email;

    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");

    const verifyOTP = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/verify-otp", {
                email,
                otp
            });

            setMessage(response.data.message);

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (error) {

            setMessage(
                error.response?.data?.message || "Verification failed."
            );

        }

    };

    return (

        <div className="verify-page">

            <div className="verify-card">

                <div className="verify-icon">
                    📧
                </div>

                <h1>Verify Email</h1>

                <p>
                    Enter the 6-digit OTP sent to
                </p>

                <span className="email">
                    {email}
                </span>

                <form onSubmit={verifyOTP}>

                    <input
                        type="text"
                        placeholder="------"
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />

                    <button type="submit">
                        Verify OTP
                    </button>

                </form>

                {message && (
                    <p className="message">{message}</p>
                )}

                <div className="bottom">

                    Didn't receive the code?

                    <button type="button">
                        Resend OTP
                    </button>

                </div>

            </div>

        </div>

    );

}

export default OTPVerification;