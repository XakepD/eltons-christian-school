import React from "react"
import styled from "styled-components"
import JuniorSlides from "../components/JuniorSlides"
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
  background-color: ${theme.light};
  color: ${theme.text};
  font-family: ${theme.fonts.primary};
  overflow-x: hidden;
`

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    padding: 2rem 1rem;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    background-color: ${theme.white};

    @media (max-width: ${theme.breakpoints.md}) {
      flex-direction: column;
    }
  }

  div {
    flex: 1;
    h2 {
      font-size: 2rem;
      color: ${theme.primary};
      margin-bottom: 1.5rem;
      font-family: ${theme.fonts.secondary};
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    ul {
      margin-bottom: 1.5rem;
      li {
        margin-bottom: 0.5rem;
        position: relative;
        padding-left: 1.5rem;

        &::before {
          content: "•";
          color: ${theme.secondary};
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: -0.2rem;
        }
      }
    }
  }

  img {
    flex: 1;
    max-width: 500px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`

const ClassCard = styled.div`
  background-color: ${theme.white};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.3rem;
    color: ${theme.primary};
    margin-bottom: 1rem;
    font-family: ${theme.fonts.secondary};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`

const JuniorHome = () => {
  return (
    <Container>
      <JuniorSlides />

      <Section>
        <div>
          <h2>About Our Junior Section</h2>
          <p>
            Our Junior Section is designed to provide a nurturing and engaging
            environment for children to grow academically, socially, and
            emotionally. We focus on building a strong foundation in literacy,
            numeracy, and critical thinking while encouraging creativity and
            exploration.
          </p>
        </div>
        <img src="../src/assets/images/IMG_2105.jpg" alt="Junior Section" />
      </Section>

      <Section>
        <div>
          <h2>Our Classes</h2>
          <p>
            We offer a range of classes tailored to meet the developmental needs
            of children at different stages:
          </p>
          <ClassesGrid>
            <ClassCard>
              <h3>Creche</h3>
              <p>Providing care and early learning for infants and toddlers.</p>
            </ClassCard>
            <ClassCard>
              <h3>Toddlers</h3>
              <p>Encouraging exploration and social interaction.</p>
            </ClassCard>
            <ClassCard>
              <h3>Pre-Nursery</h3>
              <p>Preparing children for structured learning.</p>
            </ClassCard>
            <ClassCard>
              <h3>Nursery 1 & 2</h3>
              <p>Building foundational skills in core subjects.</p>
            </ClassCard>
            <ClassCard>
              <h3>Basic 1 to 5</h3>
              <p>Developing critical thinking and academic excellence.</p>
            </ClassCard>
          </ClassesGrid>
        </div>
      </Section>

      <Section>
        <div>
          <h2>Why Choose Our Junior Section?</h2>
          <ul>
            <li>A safe and nurturing environment</li>
            <li>Experienced and caring teachers</li>
            <li>Engaging and age-appropriate curriculum</li>
            <li>Opportunities for creativity and exploration</li>
            <li>Focus on holistic development</li>
          </ul>
        </div>
        <img src="../src/assets/images/IMG_2468.jpg" alt="Junior Activities" />
      </Section>

      <Section>
        <div>
          <h2>Get in Touch</h2>
          <p>
            Want to learn more about our Junior Section? Contact us today and
            let us help you get started on this exciting journey!
          </p>
        </div>
        <img src="../images/contact_us.jpg" alt="Contact Us" />
      </Section>
    </Container>
  )
}

export default JuniorHome
