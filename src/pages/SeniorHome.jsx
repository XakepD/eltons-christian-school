import React from "react"
import styled from "styled-components"
import SeniorSlides from "../components/SeniorSlides"
import {
  FaChalkboardTeacher,
  FaBook,
  FaUserGraduate,
  FaStar,
} from "react-icons/fa"
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
  }

  img {
    flex: 1;
    max-width: 500px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const FeaturesSection = styled.section`
  background-color: ${theme.primary};
  padding: 4rem 2rem;
  text-align: center;
  color: ${theme.white};

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    font-family: ${theme.fonts.secondary};
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const FeatureCard = styled.div`
  background-color: ${theme.white};
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  color: ${theme.text};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 3rem;
    color: ${theme.secondary};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: ${theme.primary};
    margin-bottom: 1rem;
    font-family: ${theme.fonts.secondary};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
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

const SeniorHome = () => {
  return (
    <Container>
      <SeniorSlides />

      <Section>
        <div>
          <h2>About Our Senior Section</h2>
          <p>
            Our Senior Section is dedicated to preparing students for higher
            education and life beyond school. We focus on academic excellence,
            leadership development, and character building. Our curriculum is
            designed to challenge students while providing the support they need
            to succeed.
          </p>
        </div>
        <img src="../src/assets/images/IMG_2508.jpg" alt="Senior Section" />
      </Section>

      <Section>
        <div>
          <h2>Our Classes</h2>
          <p>
            We offer a range of classes tailored to meet the academic and
            developmental needs of our senior students:
          </p>
          <ClassesGrid>
            <ClassCard>
              <h3>JSS 1 (Kabod)</h3>
              <p>Building a strong foundation in core subjects.</p>
            </ClassCard>
            <ClassCard>
              <h3>JSS 2 (Kadosh)</h3>
              <p>Encouraging critical thinking and advanced learning.</p>
            </ClassCard>
            <ClassCard>
              <h3>JSS 3 (Khayl)</h3>
              <p>Preparing for external exams and challenges.</p>
            </ClassCard>
            <ClassCard>
              <h3>SSS 1</h3>
              <p>Specialized subjects for career paths.</p>
            </ClassCard>
          </ClassesGrid>
        </div>
      </Section>

      <FeaturesSection>
        <h2>Why Choose Our Senior Section?</h2>
        <FeaturesGrid>
          <FeatureCard>
            <FaChalkboardTeacher />
            <h3>Experienced Teachers</h3>
            <p>
              Our teachers are highly qualified and dedicated to nurturing every
              student's potential.
            </p>
          </FeatureCard>
          <FeatureCard>
            <FaBook />
            <h3>Comprehensive Curriculum</h3>
            <p>
              Our curriculum is designed to foster academic excellence and
              critical thinking.
            </p>
          </FeatureCard>
          <FeatureCard>
            <FaUserGraduate />
            <h3>Leadership Development</h3>
            <p>
              We provide opportunities for students to grow as leaders and role
              models.
            </p>
          </FeatureCard>
          <FeatureCard>
            <FaStar />
            <h3>Character Building</h3>
            <p>
              We emphasize moral and ethical values to shape well-rounded
              individuals.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <Section>
        <div>
          <h2>Get in Touch</h2>
          <p>
            Want to learn more about our Senior Section? Contact us today and
            let us help you take the next step in your academic journey!
          </p>
        </div>
        <img src="../src/assets/images/IMG_3583.jpg" alt="Contact Us" />
      </Section>
    </Container>
  )
}

export default SeniorHome
