import { useState, useEffect } from "react";
import "./Search.css";
import { formatViews, timeAgo } from "../../utils/format";
import API from "../../api/axios";

export default function Search() {

    const [search, setSearch] = useState("");
    const [videos, setVideos] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");


    const loadVideos = async () => {

        try {

            const response = await API.get("/videos");

            setVideos(response.data.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {
        loadVideos();
    }, []);

    // ==========================
    // Search Suggestions
    // ==========================

    const searchSuggestion = async (value) => {

        setSearch(value);

        if (value.trim() === "") {

            setSuggestions([]);

            loadVideos();

            return;
        }

        try {

            const response = await API.get(
                `/videos/suggestion?query=${encodeURIComponent(value)}`
            );

            setSuggestions(response.data.data);

        } catch (error) {

            console.log(error);

        }

    };

    // ==========================
    // Search Videos
    // ==========================

    const searchVideos = async (title = search) => {

        if (!title.trim()) {

            setMessage("Please enter a video title.");

            loadVideos();

            return;
        }

        try {

            setLoading(true);

            setMessage("");

            setSuggestions([]);

            const response = await API.get(
                `/videos/search?query=${title}`
            );

            setVideos(response.data.data);

            if (response.data.data.length === 0) {

                setMessage("No videos found.");

            }

        } catch (error) {

            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Something went wrong."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <>

            <div className="search-page">

                <div className="search-header">

                    <h1>Search Videos</h1>

                    <p>
                        Search videos from the database just like YouTube.
                    </p>

                </div>

                <div className="search-bar-container">

                    <div className="search-bar">


                        <input
                            type="text"
                            placeholder="Search videos..."
                            value={search}
                            onChange={(e) => searchSuggestion(e.target.value)}
                            onKeyDown={(e) => {

                                if (e.key === "Enter") {

                                    searchVideos();

                                }

                            }}
                        />

                        <button onClick={() => searchVideos()}>
                            Search
                        </button>

                    </div>

                    {
                        suggestions.length > 0 && (

                            <div className="suggestion-box">

                                {

                                    suggestions.map((item) => (

                                        <div
                                            key={item.id}
                                            className="suggestion-item"
                                            onClick={() => {

                                                setSearch(item.title);

                                                searchVideos(item.title);

                                            }}
                                        >
                                            🔍 {item.title}
                                        </div>

                                    ))

                                }

                            </div>

                        )
                    }

                </div>

                {

                    message &&

                    <p className="message">

                        {message}

                    </p>

                }

                {

                    loading &&

                    <div className="loading">

                        Searching...

                    </div>

                }

                <div className="video-grid">

                    {

                        videos.map((video) => (

                            <div
                                className="video-card"
                                key={video.id}
                            >

                                <img
                                    src={`http://localhost:3000/uploads/${video.thumbnail}`}
                                    alt={video.title}
                                    className="thumbnail"
                                />

                                <div className="video-info">

                                    <h3>{video.title}</h3>

                                    <p className="channel">
                                        {video.channel_name || "Unknown Channel"}
                                    </p>

                                    <p className="views">
                                        {formatViews(video.views)} views • {timeAgo(video.uploaded_at)}
                                    </p>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </>

    );

}