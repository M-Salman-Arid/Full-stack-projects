import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaBullseye, FaEye, FaLaptopCode } from "react-icons/fa";

function About() {
    return (
        <>
            <Header />

            <section className="about-page">

                {/* Hero */}

                <section className="about-hero">

                    <div className="about-left">

                        <p className="section-tag">About Webevis</p>

                        <h1>
                            We Build
                            <span> Modern Digital </span>
                            Experiences
                        </h1>

                        <p>
                            Webevis Technologies is a modern software company focused on
                            building responsive websites, scalable web applications and
                            beautiful user interfaces using the latest technologies.
                        </p>

                        <button>Let's Work Together</button>

                    </div>

                    <div className="about-right">

                        <div className="about-circle"></div>

                        <FaLaptopCode className="about-icon" />

                    </div>

                </section>



                {/* Mission Vision */}

                <section className="mission-section">

                    <div className="mission-card">

                        <FaBullseye className="mv-icon" />

                        <h2>Our Mission</h2>

                        <p>
                            To help businesses grow through secure,
                            scalable and modern web solutions while
                            maintaining the highest quality standards.
                        </p>

                    </div>



                    <div className="mission-card">

                        <FaEye className="mv-icon" />

                        <h2>Our Vision</h2>

                        <p>
                            To become a trusted software company
                            delivering innovative digital products
                            to clients all around the world.
                        </p>

                    </div>

                </section>



                {/* Why Choose Us */}

                <section className="why-section">

                    <p className="section-tag">
                        Why Choose Us
                    </p>

                    <h2>
                        Why <span>Webevis?</span>
                    </h2>

                    <div className="why-grid">

                        <div className="why-card">
                            <h3>⚡ Fast Development</h3>
                            <p>Clean, optimized and high-performance applications.</p>
                        </div>

                        <div className="why-card">
                            <h3>🎨 Modern UI</h3>
                            <p>Beautiful user interfaces with responsive layouts.</p>
                        </div>

                        <div className="why-card">
                            <h3>🔒 Secure Code</h3>
                            <p>Security-focused development using best practices.</p>
                        </div>

                        <div className="why-card">
                            <h3>🚀 Latest Technologies</h3>
                            <p>React, Node.js, MongoDB, Express and much more.</p>
                        </div>

                    </div>

                </section>

            </section>

            <Footer />

        </>
    );
}

export default About;