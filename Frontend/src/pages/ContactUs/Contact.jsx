import Header from "../../components/Header/Header";
import "./Contact.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios"

import { FaEnvelope, FaMapMarkerAlt, FaSkype, FaTelegram, FaWhatsapp } from 'react-icons/fa';

function Contact() {

  const navigate = useNavigate();

  const [formData, setFormData ] = useState({
    name : "",
    email : "",
    phone : "",
    message : ""
  })

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/contact",
        formData
      )

      alert("Form Submitted 👌 We will conatact you ...");
      navigate("/");
    } catch(error) {
      console.error("Form submitted failed", error);
      alert(error?.response?.data?.message || "Form submit failed . Please try again");
    }
  }
  return (
    <>

        <Header />
      <section className="contact-section">


        <div className="contact-info">

          <p className="small-heading">Contact Me</p>

          <h1>
            Let's Build Your
            <span> Next Project</span>
          </h1>

          <p className="description">
            Have an idea? We'd love to hear about it.
            Tell us your requirements and we'll help turn
            your vision into reality.
          </p>

          <div className="info">
            <FaWhatsapp className="info-icon"/>
            <span>+92 321 1959032</span>
          </div>

          <div className="info">
            <FaEnvelope className="info-icon"/>
            <span>msalmanarain75@gmail.com</span>
          </div>

          <div className="info">
            <FaSkype className="info-icon"/>
            <span>Muhammad Salman</span>
          </div>

          <div className="info">
            <FaTelegram className="info-icon"/>
            <span>Telegram 0321-1959032</span>
          </div>

          <div className="info">
            <FaMapMarkerAlt className="info-icon"/>
            <span>Gullberg III, Lahore, Pakistan</span>
          </div>

        </div>

        <div className="contact-form">

          <form onSubmit={handelSubmit}>

            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Muhammad Salman"
                onChange={handelChange}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                onChange={handelChange}
              />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+92 300 1234567"
                onChange={handelChange}
              />
            </div>

            <div className="input-group">
              <label>Your Message</label>

              <textarea
                rows="7"
                name="message"
                id="message"
                placeholder="Write your message..."
                onChange={handelChange}
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default Contact;