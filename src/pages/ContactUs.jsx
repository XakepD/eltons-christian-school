import React from "react"
import styled from "styled-components"
import "animate.css"

import Contact from "../components/Contact"
import Maps from "../components/Maps"
const theme = {
  primary: "#1a5276",
  secondary: "#d4ac0d",
  accent: "#e74c3c",
  light: "#f8f9fa",
  dark: "#343a40",
  text: "#333",
  white: "#ffffff",
  fonts: {
    primary: "'Open Sans', sans-serif",
    secondary: "'Montserrat', sans-serif",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
}

const Container = styled.div`
  background-color: ${theme.white};
  color: ${theme.text};
  font-family: ${theme.fonts.primary};
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(rgba(26, 82, 118, 0.8), rgba(26, 82, 118, 0.9)),
    url("../src/assets/images/banner.jpg") no-repeat center center;
  background-size: cover;
  color: ${theme.white};
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    font-family: ${theme.fonts.secondary};
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`
const Sections = styled.div`
  padding: 2rem 4rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`
const ContactUs = () => {
  return (
    <Container>
      <Header>
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Reach out to us using the form below or
          through our contact details.
        </p>
      </Header>
      <Sections>
        <Contact />
        <Maps />
      </Sections>
    </Container>
  )
}

export default ContactUs
