import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import API from "../../api/axios"

function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "user"
    })

    const handelChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handelSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await API.post(
                "/login",
                formData
            )

            localStorage.setItem("token", response.data.token);
            // Optional: Save user data

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            alert("Login Success ❤")

            navigate("/home");

        } catch (error) {
            alert(error?.response?.data?.message || "Sign In failed !")
        }
    }

    return (


        <>
            <section className="login-section">

                <h1 className="company-name">Webewis Technologies</h1>

                <div className="login-container">

                    <div className="left-side">

                        <h1 className="login-heading">Login to Continue</h1>
                        <p className="hook">Don't have an account?
                            <Link to="/signup">Sign Up here</Link>
                        </p>

                        <div className="line"></div>

                        <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper mauris in magna venenatis suscipit.</p>

                        <button className="learn-more">Learn More</button>
                    </div>

                    <div className="right-side">

                        <h1 className="login-heading">Login</h1>

                        <form onSubmit={handelSubmit}>

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

                            <label htmlFor="role">Select your role</label>

                            <select name="role" id="role" className="role" value={formData.role} onChange={handelChange}>
                                <option value="">Select Role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>

                            <button className="login-btn" type="submit">Login</button>
                        </form>

                        <p >Forgot Password <span> </span>
                            <Link to="/forgotpassword">Click here</Link>
                        </p>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Login;