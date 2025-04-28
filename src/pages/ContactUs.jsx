import React from "react"
import styled from "styled-components"
import "animate.css"

import Contact from "../components/Contact"
import Maps from "../components/Maps"

const Container = styled.div``

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  background: url("../src/assets/images/banner.jpg") no-repeat center center;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;

  h1 {
    font-size: 2.5rem;
    animation: fadeInDown 1.5s;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    animation: fadeInUp 1.5s;
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
