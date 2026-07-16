import "./Forgotpassword.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import API from "../../api/axios";

function ForgotPassword() {

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [passwordError, setPasswordError] = useState("")

    const handelChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })

        if (name === "password") {

            const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

            if (value === "") {
                setPasswordError("")
            } else if (!passwordRegex.test(value)) {
                setPasswordError(
                    "Password must at least 8 character, one number and one special character"
                )
            } else {
                setPasswordError("")
            }
        }
    }

    const handelSubmit = async (e) => {
        e.preventDefault();

        if (passwordError) {
            alert("Please Enter a valid password")
            return;
        }

        try {

            const response = await API.put(
                "/update",
                formData
            )

            alert("Password Updated successfully 👍")

            navigate("/")

        } catch (error) {
            alert(error?.response?.data?.message || "Sign In failed !")
        }
    }
    return (
        <>
            <section className="fp-section">

                <div className="fp-container">

                    <div className="left-side">

                        <h1>Forgot The Password</h1>
                        <p className="hook"> Create New Password
                        </p>

                        <div className="line"></div>

                        <p className="details"> We will help you to build your dream project and idea. <br /> <strong>Do you have any idea?</strong>
                        </p>

                        <button className="learn-more">Learn More</button>
                    </div>

                    <div className="right-side">

                        <h1 className="fp-heading">Reset Password</h1>

                        <form onSubmit={handelSubmit}>

                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Enter your Username" required onChange={handelChange} />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" required onChange={handelChange} />

                            <label htmlFor="password">Password</label>

                            <div className="password-container">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Enter your Password"
                                    required
                                    onChange={handelChange}
                                />

                                <span
                                    className="password-icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>

                            </div>

                            {passwordError && (
                                <p style={{ color: 'orange', fontSize: "12px" }}>{passwordError}</p>
                            )}

                            <button className="fp-btn" type="submit" disabled={passwordError !== ""}>Reset</button>
                        </form>

                        <p >
                            Continue to login <span> </span>
                            <Link to="/">Click here</Link>
                        </p>
                    </div>

                </div>

            </section>
        </>
    );
}

export default ForgotPassword;