import React from "react"
import styled from "styled-components"
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa" // Import additional icons

const FooterContainer = styled.footer`
  bottom: 0;

  background: url(../src/assets/images/overlay-top.png) top center no-repeat;
  background-color: black;
  background-size: contain;
  color: white;
  padding: 50px;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const Column = styled.div`
  flex: 1;
  max-width: 300px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #f4a261;
  }

  p,
  a {
    font-size: 0.9rem;
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    display: block;

    &:hover {
      color: #f4a261;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #f4a261;
    }
  }
`

const Copyright = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #ccc;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* About Section */}
        <Column>
          <h3>About Us</h3>
          <p>
            Eltons Christian School is dedicated to providing quality education
            in a nurturing environment. We inspire excellence and foster a love
            for learning in every student.
          </p>
        </Column>

        {/* Quick Links Section */}
        <Column>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/gallery">Gallery</a>
          <a href="/admissions">Admissions</a>
          <a href="/contact-us">Contact Us</a>
        </Column>

        {/* Contact Section */}
        <Column>
          <h3>Contact Us</h3>
          <p>
            {" "}
            <FaEnvelope /> Email: eltonchristianschool@gmail.com
          </p>
          <p>
            <FaPhoneAlt /> Phone: +2348036702706
          </p>
          <p>
            <FaMapMarkerAlt /> Address: 2 King Jesus street, off Peace Drive,
            Abuloma, Rivers
          </p>
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
        </Column>
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()} Eltons Christian School. All rights
        reserved.
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
