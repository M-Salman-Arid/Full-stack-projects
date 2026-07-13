import "./Services.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import {
    FaCode,
    FaReact,
    FaServer,
    FaDatabase,
    FaMobileAlt,
    FaRocket,
    FaArrowRight
} from "react-icons/fa";

const services = [

    {
        id: 1,
        icon: <FaCode />,
        title: "Web Development",
        description:
            "Professional business websites, portfolios, landing pages and custom web applications built with modern technologies."
    },

    {
        id: 2,
        icon: <FaReact />,
        title: "React Development",
        description:
            "Interactive Single Page Applications (SPA) using React.js with reusable components and optimized performance."
    },

    {
        id: 3,
        icon: <FaServer />,
        title: "Backend Development",
        description:
            "Secure REST APIs using Node.js & Express with authentication, authorization and scalable architecture."
    },

    {
        id: 4,
        icon: <FaDatabase />,
        title: "Database Design",
        description:
            "Efficient MySQL & MongoDB database structures with optimized queries and secure data management."
    },

    {
        id: 5,
        icon: <FaMobileAlt />,
        title: "Responsive Design",
        description:
            "Pixel-perfect responsive websites that work beautifully on desktop, tablet and mobile devices."
    },

    {
        id: 6,
        icon: <FaRocket />,
        title: "Deployment",
        description:
            "Deploy applications securely with performance optimization, hosting configuration and maintenance."
    }

];

function Services() {

    return (

        <>

            <Header />

            <section className="services-page">

                {/* HERO */}

                <div className="services-hero">

                    <p className="section-tag">
                        What We Offer
                    </p>

                    <h1>

                        Premium <span>Digital Services</span>

                    </h1>

                    <p>

                        We build scalable, modern and responsive
                        web applications that help businesses
                        grow faster using the latest technologies.

                    </p>

                    <div className="hero-buttons">

                        <button className="primary-btn">

                            Get Started

                        </button>

                        <button className="secondary-btn">

                            Contact Us

                        </button>

                    </div>

                </div>

                {/* SERVICES */}

                <div className="services-heading">

                    <h2>

                        Our <span>Services</span>

                    </h2>

                    <p>

                        Everything you need to build modern,
                        secure and scalable digital products.

                    </p>

                </div>

                <div className="services-grid">

                    {

                        services.map((service) => (

                            <div

                                key={service.id}

                                className="service-card"

                            >

                                <div className="service-icon">

                                    {service.icon}

                                </div>

                                <h3>

                                    {service.title}

                                </h3>

                                <p>

                                    {service.description}

                                </p>

                                <button>

                                    Learn More

                                    <FaArrowRight />

                                </button>

                            </div>

                        ))

                    }

                </div>

                {/* ===========================
    DEVELOPMENT PROCESS
=========================== */}

                <div className="process-section">

                    <p className="section-tag">
                        Our Process
                    </p>

                    <h2>
                        How We Build
                        <span> Amazing Products</span>
                    </h2>

                    <div className="process-grid">

                        <div className="process-card">
                            <span>01</span>
                            <h3>Requirement Analysis</h3>
                            <p>
                                We understand your business goals,
                                audience and project requirements before
                                starting development.
                            </p>
                        </div>

                        <div className="process-card">
                            <span>02</span>
                            <h3>UI / UX Design</h3>
                            <p>
                                Modern user interface designs that are
                                attractive, responsive and easy to use.
                            </p>
                        </div>

                        <div className="process-card">
                            <span>03</span>
                            <h3>Development</h3>
                            <p>
                                Clean, scalable and secure frontend &
                                backend development using modern tools.
                            </p>
                        </div>

                        <div className="process-card">
                            <span>04</span>
                            <h3>Testing</h3>
                            <p>
                                Every feature is tested thoroughly for
                                performance, security and responsiveness.
                            </p>
                        </div>

                        <div className="process-card">
                            <span>05</span>
                            <h3>Deployment</h3>
                            <p>
                                We deploy your application with hosting,
                                optimization and long-term support.
                            </p>
                        </div>

                    </div>

                </div>

                {/* ===========================
    WHY CHOOSE US
=========================== */}

                <div className="why-section">

                    <div className="why-left">

                        <p className="section-tag">
                            Why Choose Webevis
                        </p>

                        <h2>

                            We Deliver More Than
                            <span> Just Code</span>

                        </h2>

                        <p>

                            At Webevis Technologies, we believe in creating
                            reliable, scalable and visually appealing digital
                            solutions. Our goal is to help businesses grow
                            through innovation and modern technology.

                        </p>

                    </div>

                    <div className="why-right">

                        <div className="feature-card">
                            ✔ Clean & Maintainable Code
                        </div>

                        <div className="feature-card">
                            ✔ Fully Responsive Websites
                        </div>

                        <div className="feature-card">
                            ✔ Modern UI / UX Design
                        </div>

                        <div className="feature-card">
                            ✔ Fast Performance
                        </div>

                        <div className="feature-card">
                            ✔ SEO Friendly Structure
                        </div>

                        <div className="feature-card">
                            ✔ Lifetime Technical Support
                        </div>

                    </div>

                </div>

                {/* ===========================
    STATISTICS
=========================== */}

                <div className="stats-section">

                    <div className="stat-box">

                        <h2>50+</h2>

                        <p>Projects Completed</p>

                    </div>

                    <div className="stat-box">

                        <h2>20+</h2>

                        <p>Happy Clients</p>

                    </div>

                    <div className="stat-box">

                        <h2>3+</h2>

                        <p>Years Experience</p>

                    </div>

                    <div className="stat-box">

                        <h2>99%</h2>

                        <p>Client Satisfaction</p>

                    </div>

                </div>

            </section>


            <Footer />

        </>

    );

}

export default Services;