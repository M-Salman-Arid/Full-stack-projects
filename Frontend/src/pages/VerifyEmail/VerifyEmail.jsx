import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axios";

function VerifyEmail() {

    const { token } = useParams();

    const navigate = useNavigate();

    const [message, setMessage] = useState("Verifying your email...");

    useEffect(() => {

        const verifyUser = async () => {

            try {

                const response = await API.get(`/verify/${token}`);

                setMessage(response.data.message);

                setTimeout(() => {

                    navigate("/");

                }, 3000);

            } catch (error) {

                setMessage(
                    error.response?.data?.message ||
                    "Verification failed."
                );

            }

        };

        verifyUser();

    }, [token, navigate]);

    return (

        <div className="verify-container">

            <h1>Email Verification</h1>

            <p>{message}</p>

        </div>

    );

}

export default VerifyEmail;

