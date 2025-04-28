import React, { useState } from "react"
import styled from "styled-components"
import emailjs from "emailjs-com" // Import EmailJS
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa"

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  position: absolute;
  bottom: 20px;
  @media (max-width: 768px) {
    position: relative;
  }

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #5cff7c; /* Light green hover effect */
    }
  }
`

const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  border-radius: 10px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #f9f9f921;
    padding: 2rem;
  }
`

const ContactForm = styled.form`
  flex: 1;
  padding: 2rem;
  background-color: #ffffff;
  width: 100%;
  animation: fadeIn 1.5s;
  box-sizing: border-box;
  height: 100%;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #000000;
    margin-bottom: 1rem;
    text-align: center;
  }

  label {
    display: block;
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  button {
    display: block;
    width: 100%;
    padding: 0.8rem;
    background-color: #000000;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ffffff;
      border: solid 2px black;
      color: black;
    }
  }
`

const InfoContainer = styled.div`
  flex: 1;
  background: url("./src/assets/images/ib.png") no-repeat;
  background-size: 200px;
  background-position: bottom right;
  position: relative;
  background-color: #000000;
  height: 500px;
  animation: fadeIn 1.5s;

  padding: 2rem;
  @media (max-width: 768px) {
    height: 500px !important;
    background-size: 100px;

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 2rem;
    color: #ffffff;
    margin-top: -1rem;
    top: 20px;
  }

  p {
    font-size: 1rem;
    color: #ffffff;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    vertical-align: middle;
    animation: fadeIn 1.5s;
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        "service_qbrl0ip", // Replace with your EmailJS Service ID
        "template_8tvjgl7", // Replace with your EmailJS Template ID
        formData,
        "1lEbEXahpgJvwiizL" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
          setStatus("Message sent successfully!")
          setFormData({ name: "", email: "", message: "" }) // Reset form
        },
        (error) => {
          console.error("FAILED...", error)
          setStatus("Failed to send message. Please try again.")
        }
      )
  }

  return (
    <FormSection>
      <InfoContainer>
        <h2>Contact Information</h2>
        <p>
          <FaEnvelope /> Email:{" "}
          <a href="mailto:eltonchristianschool@gmail.com">
            eltonchristianschool@gmail.com
          </a>
        </p>
        <p>
          <FaPhoneAlt /> Phone: <a href="tel:+2348036702706">+2348036702706</a>
        </p>
        <p>
          <FaMapMarkerAlt /> Address: 2 King Jesus street, off Peace Drive,
          Abuloma, Rivers
        </p>

        {/* Social Media Links */}
        <SocialLinks>
          <a
            href="https://www.facebook.com/eltonschoolphc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/eltonschool2007/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/+2348036702706"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </SocialLinks>
      </InfoContainer>
      <ContactForm onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
        {status && <p>{status}</p>}
      </ContactForm>
    </FormSection>
  )
}

export default Contact
