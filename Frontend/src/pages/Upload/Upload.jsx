
import React, { useState } from "react";
import API from "../../api/axios";
import "./Upload.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Upload() {

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const MAX_SIZE = 2000 * 1024;

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));

        setMessage("");
    };

    const removeImage = () => {

        setImage(null);
        setPreview(null);
        setMessage("");

        document.getElementById("imageInput").value = "";
    };

    const uploadImage = async () => {

        if (!image) {

            setMessage("Please choose an image first.");
            return;
        }

        if (image.size > MAX_SIZE) {
            setMessage("Image size exceeds 2 MB limit");
            return;
        }

        try {

            setLoading(true);

            const formData = new FormData();

            formData.append("image", image);

            const response = await API.post(

                "/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }

            );

            setMessage(response.data.success || "Image uploaded successfully.");

        }

        catch (err) {

            console.log(err);
            console.log(err.message);

            setMessage(
                err.response?.data?.message ||
                err.message
            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>
            <Header />

            <div className="upload-container">

                {/* LEFT SIDE */}

                <div className="upload-left">

                    <h2>
                        Upload Image
                    </h2>

                    <p className="upload-description">

                        Upload an image to test to Check its validity and Size.

                    </p>

                    <div className="instruction-box">

                        <div className="instruction">
                            ✔ Maximum Image Size: <strong>2 MB</strong>
                        </div>

                        <div className="instruction">
                            ✔ Allowed Formats:
                            <strong> JPG, JPEG, PNG</strong>
                        </div>

                        <div className="instruction">
                            ✔ Backend validates image type.
                        </div>

                        <div className="instruction">
                            ✔ Invalid images are rejected automatically.
                        </div>

                        <div className="instruction">
                            ✔ Preview image before upload.
                        </div>

                    </div>

                    <button className="learn-btn">

                        Learn More

                    </button>

                </div>

                {/* RIGHT SIDE */}

                <div className="upload-right">

                    <div className="upload-card">

                        <h2>

                            Upload Image

                        </h2>

                        <label
                            htmlFor="imageInput"
                            className="upload-box"
                        >

                            {
                                preview ?

                                    <img
                                        src={preview}
                                        alt="Preview"
                                    />

                                    :

                                    <>

                                        <div className="upload-icon">

                                            📤

                                        </div>

                                        <p>

                                            Click to Select Image

                                        </p>

                                    </>
                            }

                        </label>

                        <input
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleImageChange}
                        />

                        {

                            image &&

                            <div className="file-details">

                                <p>

                                    <strong>File: </strong>

                                    {image.name}

                                </p>

                                <p>

                                    <strong>Size: </strong>

                                    {(image.size / 1024).toFixed(2)} KB

                                </p>

                            </div>

                        }

                        <div className="button-group">

                            {

                                image &&

                                <button
                                    className="remove-btn"
                                    onClick={removeImage}
                                >

                                    Remove

                                </button>

                            }

                            <button
                                className="upload-btn"
                                onClick={uploadImage}
                            >

                                {

                                    loading

                                        ?

                                        "Uploading..."

                                        :

                                        "Upload Image"

                                }

                            </button>

                        </div>

                        {

                            message &&

                            <p className="upload-message">

                                {message}

                            </p>

                        }

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}