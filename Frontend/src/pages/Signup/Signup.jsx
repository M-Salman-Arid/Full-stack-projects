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

  const [passwordError, setPasswordError] = useState("")

  const handelChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

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
      const response = await API.post(
        "/signup",
        formData
      )

      navigate("/verify-OTP" , {
        state: {
          email: formData.email
        }
      })
    } catch (error) {
      console.error("Signup failed:", error);
      alert(error?.response?.data?.message || "Signup failed. Please try again.");
    }
  }
  return (

    <>

      <section className="signup-section">

        <div className="signup-container">

          <div className="left-side">
            <h1>Create New Account</h1>

            <p>Already Registered?
              <Link to="/">Login Here</Link>
            </p>

            <div className="line"></div>

            <p className="details">We will help you to build your dream project and idea. <br /> <strong>Do you have any idea?</strong>
            </p>

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

              {passwordError && (
                <p style={{ color: 'orange', fontSize: "12px" }}>{passwordError}</p>
              )}
              <label htmlFor="role">Select Role</label>

              <select name="role" id="role" className="role" value={formData.role} onChange={handelChange}>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>

              <button type="submit" className="signup-btn" disabled={passwordError !== ""}>Sign Up</button>

            </form>

          </div>
        </div>
      </section>
    </>

  )
}

export default SignUp;