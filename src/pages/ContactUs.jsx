import React from "react"
import styled from "styled-components"
import "animate.css"

const Container = styled.div`
  padding: 2rem 6rem;
  background-color: #f9f9f9;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #07611c;
    animation: fadeInDown 1.5s;
  }

  p {
    font-size: 1.2rem;
    color: #333;
    margin-top: 0.5rem;
    animation: fadeInUp 1.5s;
  }
`

const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ContactForm = styled.form`
  flex: 1;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  animation: fadeIn 1.5s;

  h2 {
    font-size: 1.8rem;
    color: #07611c;
    margin-bottom: 1rem;
    text-align: center;
  }

  label {
    display: block;
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
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
    background-color: #07611c;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #064d14;
    }
  }
`

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1.5s;
  }
`

const InfoSection = styled.div`
  margin: 2rem 0;
  text-align: center;
  animation: fadeInUp 1.5s;

  h2 {
    font-size: 2rem;
    color: #07611c;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  a {
    color: #07611c;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

const MapContainer = styled.div`
  margin: 2rem 0;
  text-align: center;

  iframe {
    width: 100%;
    max-width: 800px;
    height: 400px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1.5s;
  }
`

const ContactUs = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Reach out to us using the form below or
          through our contact details.
        </p>
      </Header>

      {/* Form and Image Section */}
      <FormSection>
        <ContactForm>
          <h2>Send Us a Message</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </ContactForm>

        <ImageContainer>
          <img src="../images/img4.jpg" alt="Contact Us" />
        </ImageContainer>
      </FormSection>

      {/* Contact Information Section */}
      <InfoSection>
        <h2>Contact Information</h2>
        <p>
          Email:{" "}
          <a href="mailto:info@eltonsschool.com">info@eltonsschool.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+123 456 7890</a>
        </p>
        <p>Address: 123 School Lane, Education City</p>
      </InfoSection>

      {/* Map Section */}
      <MapContainer>
        <h2>Find Us</h2>
        <iframe
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=eltons%20&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          allowFullScreen=""
          loading="lazy"
          title="School Location"
        ></iframe>
      </MapContainer>
    </Container>
  )
}

export default ContactUs
