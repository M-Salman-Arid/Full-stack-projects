import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import API from "../../api/axios";

function Header() {

    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const [user, setUser] = useState({
        username: "",
        email: ""
    });

    useEffect(() => {

        const getProfile = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await API.get("/home", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data);

            } catch (error) {

                console.error(error.response?.data || error.message);

            }

        };

        getProfile();

    }, []);

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        navigate("/login");

    };

    const deleteAccount = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account?\n\nThis action cannot be undone."
        );

        if (!confirmDelete) return;

        try {

            const token = localStorage.getItem("token");

            const response = await API.delete("/delete", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert(response.data.message);

            localStorage.removeItem("token");

            navigate("/login");

        } catch (error) {

            alert(error.response?.data?.message || "Something went wrong");

        }

    };

    return (

        <header className="header">

            <div className="logo">
                <Link to="/">
                    <h1>M-Salman</h1>
                </Link>
            </div>

            {/* Hamburger Button */}
            <div
                className="menu-toggle"
                onClick={() => setShowMenu(!showMenu)}
            >
                {showMenu ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation */}
            <nav className={`nav-links ${showMenu ? "active" : ""}`}>

                <Link
                    to="/about"
                    onClick={() => setShowMenu(false)}
                >
                    About Me
                </Link>

                <Link
                    to="/services"
                    onClick={() => setShowMenu(false)}
                >
                    Services
                </Link>

                <Link
                    to="/projects"
                    onClick={() => setShowMenu(false)}
                >
                    Projects
                </Link>

                <Link
                    to="/contact"
                    onClick={() => setShowMenu(false)}
                >
                    Contact Me
                </Link>

                {/* Mobile Profile */}
                <div className="mobile-profile">

                    <button
                        className="logout-btn"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        Your Profile ▼
                    </button>

                    {showDropdown && (

                        <div className="mobile-dropdown">

                            <div className="profile-info">
                                <h3>{user.username}</h3>
                                <p>{user.email}</p>
                            </div>

                            <button
                                className="profile-item"
                                onClick={logout}
                            >
                                🚪 Logout
                            </button>

                            <button
                                className="profile-item delete-account"
                                onClick={deleteAccount}
                            >
                                🗑 Delete Account
                            </button>

                        </div>

                    )}

                </div>

            </nav>

            {/* Desktop Profile */}
            <div className="profile-menu desktop-profile">

                <button
                    className="logout-btn"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    Your Profile ▼
                </button>

                {showDropdown && (

                    <div className="profile-dropdown">

                        <div className="profile-info">
                            <h3>{user.username}</h3>
                            <p>{user.email}</p>
                        </div>

                        <button
                            className="profile-item"
                            onClick={logout}
                        >
                            🚪 Logout
                        </button>

                        <button
                            className="profile-item delete-account"
                            onClick={deleteAccount}
                        >
                            🗑 Delete Account
                        </button>

                    </div>

                )}

            </div>

        </header>

    );
}

export default Header;