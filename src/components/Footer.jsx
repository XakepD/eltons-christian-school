import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background: url(../images/foot.jpg);
  background-size: cover;
  background-color: #000000;
  color: white;
  padding: 20px 50px;
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

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
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
          <a href="#home">Home</a>
          <a href="#about-us">About Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#admissions">Admissions</a>
          <a href="#contact-us">Contact Us</a>
        </Column>

        {/* Contact Section */}
        <Column>
          <h3>Contact Us</h3>
          <p>Email: info@eltonsschool.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 School Lane, Education City</p>
          <SocialIcons>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </SocialIcons>
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
