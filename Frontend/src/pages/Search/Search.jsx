import { useState } from "react";
import "./Search.css";
import { formatViews, timeAgo } from "../../utils/format";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import API from "../../api/axios";

export default function Search() {

    const [search, setSearch] = useState("");

    const [videos, setVideos] = useState([]);

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState("");

    const searchVideos = async () => {

        if (!search.trim()) {

            setMessage("Please enter a video title.");

            setVideos([]);

            return;

        }

        try {

            setLoading(true);

            setMessage("");

            const response = await API.get(

                `/videos/search?query=${search}`

            );


            setVideos(response.data.data);

            if (response.data.data.length === 0) {

                setMessage("No videos found.");

            }

        }

        catch (error) {

            console.log(error);

            setMessage(

                error.response?.data?.message ||

                "Something went wrong."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>

            <Header />

            <div className="search-page">

                <div className="search-header">

                    <h1>

                        Search Videos

                    </h1>

                    <p>

                        Search videos from the database just like YouTube.

                    </p>

                </div>

                <div className="search-bar">

                    <input

                        type="text"

                        placeholder="Search videos..."

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                        onKeyDown={(e) => {

                            if (e.key === "Enter") {

                                searchVideos();

                            }

                        }}

                    />

                    <button

                        onClick={searchVideos}

                    >

                        Search

                    </button>

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

                                    <h3>

                                        {video.title}

                                    </h3>

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

            <Footer />

        </>

    );

}