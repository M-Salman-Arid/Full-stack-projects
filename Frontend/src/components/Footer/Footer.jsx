import "./Footer.css";
import { Link } from "react-router-dom";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-top">

                <h2>Let's Connect There</h2>

                <Link to="/contact">
                    <button className="footer-btn">
                        Contact Me
                    </button>

                </Link>

            </div>

            <div className="footer-content">

                <div className="footer-about">

                    <h1>M-Salman</h1>

                    <p>

                        I am a highly motivated student.
                        I work with all my deveotions.
                        You can also follow me on social media.
                        My Social Media links are given below.

                    </p>

                    <div className="social-icons">

                        <Link to="https://www.facebook.com/profile.php?id=61578941845767">
                            <FaFacebookF />
                        </Link>

                        <Link to="https://www.instagram.com/msalmansattar032/">
                            <FaInstagram />
                        </Link>

                        <Link to="https://www.youtube.com/@MuhammadSalman-b7b8d">
                            <FaYoutube />
                        </Link>

                        <Link to="https://www.linkedin.com/in/muhammad-salman-dotdev/">
                            <FaLinkedinIn />
                        </Link>

                        <Link to="https://x.com/muhsalman32105">
                            <FaXTwitter />
                        </Link>

                    </div>

                </div>

                <div className="footer-links">

                    <h3>Navigation</h3>

                    <Link to="/">Home</Link>

                    <Link to="/about">About</Link>

                    <Link to="/services">Services</Link>

                    <Link to="/projects">Projects</Link>

                    <Link to="/contact">Contact</Link>

                </div>

                <div className="footer-contact">

                    <h3>Contact</h3>

                    <p>+92 321 1959032</p>

                    <p>www.msalman-arid.com</p>

                    <p>msalmanarain75@gmail.com</p>

                    <p>Model Coloney, Gullberg III, Lahore, Pakistan</p>

                </div>

                <div className="footer-newsletter">

                    <h3>Get the latest information</h3>

                    <div className="newsletter">

                        <form >

                            <input className="update-email"
                                type="email"
                                name="emil"
                                id="email"
                                placeholder="Email Address"
                                required
                            />

                            <button>
                                Send
                            </button>
                        </form>

                    </div>

                </div>

            </div>

        </footer>

    );

}

export default Footer;