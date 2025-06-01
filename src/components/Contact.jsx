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

const theme = {
  primary: "#1a5276",
  secondary: "#d4ac0d",
  accent: "#e74c3c",
  light: "#f8f9fa",
  dark: "#343a40",
  text: "#333",
  white: "#ffffff",
}

const FormSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 4rem;
  background: ${theme.white};
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    background: white;
  }
  background: #020024;
  background: url("../src/assets/images/flower-shaped.svg"),
    linear-gradient(152deg, #343a40 0%, #384c5f 38%, #1a5276 100%);
  background-position: top right;
  background-repeat: no-repeat;
`
const ContactForm = styled.form`
  flex: 2;
  padding: 2rem;
  width: 100%;
  animation: fadeIn 1.5s;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 1.5rem;
    color: ${theme.white};
    margin-bottom: 1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 2px solid ${theme.primary};
    border-radius: 5px;
    font-size: 1rem;
    box-sizing: border-box;
    color: ${theme.text};
  }

  button {
    display: block;
    width: 30%;
    padding: 0.8rem;
    background-color: ${theme.secondary};
    color: ${theme.white};
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    @media (max-width: 768px) {
      width: 100%;
    }

    &:hover {
      background-color: ${theme.secondary};
      color: ${theme.primary};
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    padding-bottom: 2rem;
    background: url("../src/assets/images/flower-shaped.svg"),
      linear-gradient(152deg, #343a40 0%, #384c5f 38%, #1a5276 100%);
    background-position: top right;
    background-repeat: no-repeat;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    button {
      width: 100%;
      color: ${theme.primary};
      background-color: ${theme.white};
    }
  }
`

const InfoContainer = styled.div`
  flex: 1;
  animation: fadeIn 1.5s;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2rem;

  h2 {
    font-size: 1.5rem;
    color: ${theme.secondary};
  }

  p {
    font-size: 0.9rem;
    color: ${theme.white};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    vertical-align: middle;
    animation: fadeIn 1.5s;

    span {
      font-size: 1.2rem;
      color: ${theme.secondary};
    }
  }

  a {
    color: ${theme.white};
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
    gap: 1px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    span {
      color: ${theme.primary};
    }
    h2 {
      color: ${theme.primary};
    }
    a {
      color: ${theme.primary};
      font-weight: bold;
    }
    p {
      color: ${theme.dark};
      font-weight: bold;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${theme.secondary};
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: ${theme.accent}; /* Accent color for hover effect */
    }
  }
  @media (max-width: 768px) {
    a {
      color: ${theme.primary};
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
          <span>
            <FaEnvelope />
          </span>{" "}
          Email:{" "}
          <a href="mailto:eltonchristianschool@gmail.com">
            eltonchristianschool@gmail.com
          </a>
        </p>
        <p>
          <span>
            <FaPhoneAlt />
          </span>{" "}
          Phone: <a href="tel:+2348036702706">+2348036702706</a>
        </p>
        <p>
          <span>
            <FaMapMarkerAlt />
          </span>{" "}
          Address: 2 King Jesus Street, off Peace Drive, Abuloma, Rivers
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
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
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
