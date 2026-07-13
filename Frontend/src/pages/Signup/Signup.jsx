import './Signup.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import API from "../../api/axios"

function SignUp() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
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
        "/signup",
        formData
      )

      alert("SignUp successfull. Now login to continue ...");
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
      alert(error?.response?.data?.message || "Signup failed. Please try again.");
    }
  }
  return (

    <>

      <section className="signup-section">

        <h1 className="company-name">Webevis Technologies</h1>

        <div className="signup-container">

          <div className="left-side">
            <h1>Create New Account</h1>

            <p>Already Registered?
              <Link to="/">Login Here</Link>
            </p>

            <div className="line"></div>

            <div className="details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper mauris in magna venenatis suscipit.
            </div>

            <button className="learn-more">Learn More</button>
          </div>


          <div className="right-side">

            <h1>Sign Up</h1>

            <form method="post" onSubmit={handelSubmit}>

              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="username" placeholder="Enter your name" required onChange={handelChange} />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your Email" required onChange={handelChange} />

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

              <label htmlFor="role">Select Role</label>

              <select name="role" id="role" className="role" value={formData.role} onChange={handelChange}>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>

              <button type="submit" className="signup-btn">Sign Up</button>
            </form>

          </div>
        </div>
      </section>
    </>

  )
}

export default SignUp;