import React from "react"
import styled from "styled-components"
import { FaEye, FaHome, FaHistory, FaUserTie } from "react-icons/fa"
import Welcome from "../components/Welcome"
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

const AboutSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: linear-gradient(rgba(26, 82, 118, 0.8), rgba(26, 82, 118, 0.9)),
    url("../src/assets/images/sch.jpg") no-repeat center center;
  background-size: cover;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: ${theme.text};
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 3rem;
    color: ${theme.secondary};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    color: ${theme.white};
    margin-bottom: 1rem;
    font-family: ${theme.fonts.secondary};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${theme.white};
  }
`

const TeamSection = styled.section`
  background-color: ${theme.white};
  padding: 4rem 2rem;
  text-align: center;
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const TeamCard = styled.div`
  background: ${theme.white};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 1rem;
    border: 3px solid ${theme.secondary};
  }

  h3 {
    font-size: 1.2rem;
    color: ${theme.primary};
    margin-bottom: 0.5rem;
    font-family: ${theme.fonts.secondary};
  }

  p {
    font-size: 1rem;
    color: ${theme.text};
  }
`

const AboutUs = () => {
  return (
    <Container>
      <Header>
        <h1>About Us</h1>
        <p>Learn more about Eltons Christian School</p>
      </Header>

      <Welcome />

      <AboutSection>
        <FeaturesGrid>
          <FeatureCard>
            <FaHome />
            <h2>Our Mission</h2>
            <p>
              Committed to partnering with parents to educate the minds and
              nurture the hearts of learners for the glory of God in a
              Christ-centered environment.
            </p>
          </FeatureCard>
          <FeatureCard>
            <FaHistory />
            <h2>Our History</h2>
            <p>
              Established in 2007, Eltons Christian School has been a beacon of
              education and faith. Our journey began with a vision to see lives
              transformed by the power of the gospel of Jesus Christ through
              Christian Education.
            </p>
          </FeatureCard>
          <FeatureCard>
            <FaEye />
            <h2>Our Vision</h2>
            <p>
              To see lives transformed by the power of the gospel of Jesus
              Christ through Christian Education.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </AboutSection>

      <TeamSection>
        <h2>Meet Our Team</h2>
        {/*   <TeamGrid>
          <TeamCard>
            <img src="../src/assets/images/team-01.png" alt="Team Member 1" />
            <h3>Mr Alfred</h3>
            <p>Principal</p>
          </TeamCard>
          <TeamCard>
            <img src="../src/assets/images/team-02.png" alt="Team Member 2" />
            <h3>Mrs Eboh</h3>
            <p>Admin</p>
          </TeamCard>
          <TeamCard>
            <img src="../src/assets/images/team-03.png" alt="Team Member 3" />
            <h3>Mrs Omolara Effiom</h3>
            <p>Proprietress</p>
          </TeamCard>
          <TeamCard>
            <img src="../src/assets/images/team-04.png" alt="Team Member 4" />
            <h3>Emily White</h3>
            <p>Head of Administration</p>
          </TeamCard>
        </TeamGrid>*/}
      </TeamSection>
    </Container>
  )
}

export default AboutUs
