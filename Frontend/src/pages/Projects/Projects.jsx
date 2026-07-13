import "./Projects.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { useState } from "react";

import {
    FaGithub,
    FaExternalLinkAlt,
    FaSearch
} from "react-icons/fa";

import projects from "./projectsData";

function Projects() {

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    const categories = [
        "All",
        "React",
        "JavaScript",
        "HTML"
    ];

    const filteredProjects = projects.filter((project) => {

        const matchesSearch =

            project.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =

            category === "All"

                ? true

                : project.category === category;

        return matchesSearch && matchesCategory;

    });

    return (

        <>

            <Header />

            <section className="projects-page">

                <div className="projects-heading">

                    <p className="section-tag">

                        My Portfolio

                    </p>

                    <h1>

                        Latest <span>Projects</span>

                    </h1>

                    <p>

                        Explore some of my recent work including
                        React applications, JavaScript projects,
                        Full Stack development and UI Designs.

                    </p>

                </div>

                {/* Search */}

                <div className="search-box">

                    <FaSearch />

                    <input

                        type="text"

                        placeholder="Search Project..."

                        value={search}

                        onChange={(e) =>
                            setSearch(e.target.value)
                            
                        }

                    />

                </div>

                {/* Categories */}

                <div className="filter-buttons">

                    {

                        categories.map((item) => (

                            <button

                                key={item}

                                className={
                                    category === item
                                        ? "active-filter"
                                        : ""
                                }

                                onClick={() =>
                                    setCategory(item)
                                }

                            >

                                {item}

                            </button>

                        ))

                    }

                </div>

                {/* Cards */}

                <div className="projects-grid">

                    {filteredProjects.length > 0 ? (

                        filteredProjects.map((project) => (

                            <div className="project-card" key={project.id}>

                                <img src={project.image} alt={project.title} />

                                <div className="project-content">

                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>

                                    <h2>{project.title}</h2>

                                    <p>{project.description}</p>

                                    <div className="project-buttons">

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaGithub />
                                            GitHub
                                        </a>

                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaExternalLinkAlt />
                                            Live Demo
                                        </a>

                                    </div>

                                </div>

                            </div>

                        ))

                    ) : (

                        <div className="no-projects">

                            <h2>No Projects Found 😔</h2>

                            <p>
                                Try searching with another keyword or select a different category.
                            </p>

                        </div>

                    )}

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Projects;