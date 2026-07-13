import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Profile from "../../assets/images/profile.jpg"
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaPython
} from "react-icons/fa";

import {
    SiMysql,
    SiExpress,
    SiMongodb
} from "react-icons/si";

export default function Home() {

    const downloadCV = () => {

        const link = document.createElement("a");

        link.href = "/Salman_CV.pdf";

        link.download = "Muhammad_Salman_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    };

    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "What services do you provide?",
            answer:
                "I develop responsive websites, React applications, REST APIs, Node.js backend systems, MySQL databases and complete Full Stack Web Applications."
        },
        {
            question: "Are you available for freelance work?",
            answer:
                "Yes! I am available for freelance, remote jobs and collaborative projects worldwide."
        },
        {
            question: "Which technologies do you use?",
            answer:
                "I work with HTML, CSS, JavaScript, React, Node.js, Express.js, MySQL, MongoDB, GitHub and modern web technologies."
        },
        {
            question: "How can I contact you?",
            answer:
                "You can reach me through the Contact page, Email or LinkedIn. I usually reply within 24 hours."
        },
        {
            question: "Do you build responsive websites?",
            answer:
                "Absolutely! Every website I build is fully responsive and optimized for Desktop, Tablet and Mobile devices."
        }
    ];

    return (
        <>
            <section className="main-section">
                <Header />
                <section className="hero-section">

                    <div className="hero-left">

                        <span className="hero-tag">
                            👋 Hello There!
                        </span>

                        <h1>

                            I'm <span>Muhammad Salman</span>

                            <br />

                            Full Stack Developer

                            <br />

                            & AI Engineer

                        </h1>

                        <p>

                            I build modern web applications using React,
                            Node.js, Express and MySQL while exploring AI
                            technologies to create intelligent digital
                            solutions for businesses.

                        </p>

                        <div className="hero-buttons">

                            <button className="primary-btn" onClick={downloadCV}>
                                Download CV
                            </button>

                            <Link to = "/contact">
                            <button className="secondary-btn">
                                Hire Me
                            </button>
                            </Link>

                        </div>

                    </div>

                    <div className="hero-right">

                        <div className="image-box">

                            <img
                                src={Profile}
                                alt="Profile"
                            />

                        </div>

                    </div>

                </section>

                {/* ----------------- Skills ---------------- */}

                <section className="skills-section">

                    <p className="section-tag">
                        My Expertise
                    </p>

                    <h2>
                        What <span>I Do</span>
                    </h2>

                    <p className="skills-description">

                        I develop modern, scalable and responsive web
                        applications using the latest frontend and backend
                        technologies while focusing on clean code,
                        performance and user experience.

                    </p>

                    <div className="skills-grid">

                        <div className="skill-card">
                            <FaHtml5 />
                            <h3>HTML5</h3>
                        </div>

                        <div className="skill-card">
                            <FaCss3Alt />
                            <h3>CSS3</h3>
                        </div>

                        <div className="skill-card">
                            <FaJsSquare />
                            <h3>JavaScript</h3>
                        </div>

                        <div className="skill-card">
                            <FaReact />
                            <h3>React JS</h3>
                        </div>

                        <div className="skill-card">
                            <FaNodeJs />
                            <h3>Node JS</h3>
                        </div>

                        <div className="skill-card">
                            <SiExpress />
                            <h3>Express JS</h3>
                        </div>

                        <div className="skill-card">
                            <SiMysql />
                            <h3>MySQL</h3>
                        </div>

                        <div className="skill-card">
                            <SiMongodb />
                            <h3>MongoDB</h3>
                        </div>

                        <div className="skill-card">
                            <FaGithub />
                            <h3>GitHub</h3>
                        </div>

                        <div className="skill-card">
                            <FaPython />
                            <h3>Python</h3>
                        </div>

                    </div>

                </section>

                {/* ----------------------- Education ---------------  */}

                <section className="education-section">

                    <p className="section-tag">
                        Education & Experience
                    </p>

                    <h2 className="section-title">
                        My <span>Academic</span> &
                        <span> Professional</span> Journey
                    </h2>

                    <div className="education-container">

                        {/* EDUCATION */}

                        <div className="edu-card">

                            <div className="card-header">

                                <div className="card-icon">
                                    🎓
                                </div>

                                <h3>Education</h3>

                            </div>

                            <div className="timeline">

                                <div className="timeline-item">

                                    <span>2024 - Present</span>

                                    <h4>Arid Institute Lahore</h4>

                                    <p>BS Computer Science</p>

                                </div>

                                <div className="timeline-item">

                                    <span>2025-2026</span>

                                    <h4>DigiSkills Pakistan</h4>

                                    <p>Data Analytics + AI Certification</p>

                                </div>


                                <div className="timeline-item">

                                    <span>2022 - 2024</span>

                                    <h4>Govt College Dahranwala</h4>

                                    <p>FSc Pre Engineering</p>

                                </div>


                            </div>

                        </div>

                        {/* EXPERIENCE */}

                        <div className="edu-card">

                            <div className="card-header">

                                <div className="card-icon">
                                    💼
                                </div>

                                <h3>Experience</h3>

                            </div>

                            <div className="timeline">

                                <div className="timeline-item">

                                    <span>June 2026- present</span>

                                    <h4>Webewis Technology</h4>

                                    <p>Backend Developement Internship</p>

                                </div>

                                <div className="timeline-item">

                                    <span>Nov 2025 - May 2026</span>

                                    <h4>Cappersoft</h4>

                                    <p>Data Entery Operator</p>

                                </div>

                                <div className="timeline-item">

                                    <span>2025</span>

                                    <h4>Office Management</h4>

                                    <p>MS Excel & Microsoft Word</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* ------------------ FAQS SECTION ------------------  */}

                <section className="faq-section">

                    <p className="section-tag">
                        Frequently Asked Questions
                    </p>

                    <h2 className="faq-title">
                        Questions? <span>Look Here</span>
                    </h2>

                    <div className="faq-container">

                        {faqs.map((faq, index) => (

                            <div
                                key={index}
                                className={`faq-item ${activeFAQ === index ? "active" : ""}`}
                            >

                                <div
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                >

                                    <h3>{faq.question}</h3>

                                    <span>

                                        {activeFAQ === index ? "−" : "+"}

                                    </span>

                                </div>

                                <div
                                    className={`faq-answer ${activeFAQ === index ? "show" : ""}`}
                                >

                                    <p>{faq.answer}</p>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>

                {/* -------------- Ended ---------------  */}

                <Footer />
            </section>
        </>

    )
}