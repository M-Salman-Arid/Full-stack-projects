import { useState } from "react";
import "./UploadVideo.css";
import API from "../../api/axios";

export default function UploadVideo() {

    const [formData, setFormData] = useState({

        title: "",

        channel_name: "",

        description: ""

    });

    const [thumbnail, setThumbnail] = useState(null);

    const [video, setVideo] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = new FormData();

        data.append("title", formData.title);

        data.append("channel_name", formData.channel_name);

        data.append("description", formData.description);

        data.append("thumbnail", thumbnail);

        data.append("video", video);

        try {

            setLoading(true);

            const response = await API.post(

                "/videos/upload",

                data,

                {

                    headers: {

                        "Content-Type": "multipart/form-data"

                    }

                }

            );

            alert(response.data.message || "Video uploaded successfully!");

        }

        catch (error) {

            console.log(error);

            alert(error.response?.data?.message || "Upload failed");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>

            <div className="upload-page">

                <div className="upload-card">

                    <h1>Upload Video</h1>

                    <p>Share your content with the world.</p>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label>Video Title</label>

                            <input
                                type="text"
                                name="title"
                                placeholder="Enter video title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>Channel Name</label>

                            <input
                                type="text"
                                name="channel_name"
                                placeholder="Enter channel name"
                                value={formData.channel_name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>Description</label>

                            <textarea
                                name="description"
                                rows="5"
                                placeholder="Video description..."
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>

                        </div>

                        <div className="form-group">

                            <label>Thumbnail</label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setThumbnail(e.target.files[0])}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>Video File</label>

                            <input
                                type="file"
                                accept="video/*"
                                onChange={(e) => setVideo(e.target.files[0])}
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="upload-btn"
                        >

                            {

                                loading

                                    ? "Uploading..."

                                    : "Upload Video"

                            }

                        </button>

                    </form>

                </div>

            </div>

        </>

    );

}