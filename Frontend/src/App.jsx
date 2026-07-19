import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import ForgotPassword from "./pages/ForgotPassword/Forgotpassword"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Services from "./pages/Services/Services"
import Contact from "./pages/ContactUs/Contact"
import OTPVerification from "./pages/VerifyEmail/VerifyOTP"
import Upload from "./pages/Upload/Upload"
import Search from "./pages/Search/Search"
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./routes/ProtectedRoutes"
import PublicRoute from "./routes/PublicRoutes"
import UploadVideo from "./components/UploadVideo/UploadVideo"

function App() {

  return (
    <Routes>

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verify-OTP" element={<OTPVerification />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects/image-validation" element={<Upload />} />
        <Route path="/projects/youtube" element={<Search />} />
        <Route path="/upload-video" element={<UploadVideo/>} />
      </Route>
    </Routes>
  )
}

export default App
