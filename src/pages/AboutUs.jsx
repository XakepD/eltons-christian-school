import React from "react"
import styled from "styled-components"
import { FaEye, FaHome, FaHistory, FaUserTie } from "react-icons/fa"

const Container = styled.div`
  color: #333;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: url("../src/assets/images/banner.jpg") no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;

  h1 {
    font-size: 3rem;
    animation: fadeInDown 1.5s;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    animation: fadeInUp 1.5s;
  }
`

const About = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  row-gap: 20px;
  flex-wrap: wrap;
  padding: 4rem;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    height: auto;
    div {
      max-width: 100%;
    }
  }

  div {
    padding: 1rem;
    background: whitesmoke;
    max-width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    height: inherit;
    @media (max-width: 768px) {
      max-width: 100%;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-size: 50px;
      color: #07611c;
      text-align: center;
      width: 100%;
    }

    h1 {
      font-weight: bold;
      font-size: 1.5rem;
      margin: 1rem 0;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.5;
      color: #555;
    }
  }
`

const TeamSection = styled.div`
  padding: 4rem 2rem; /* Blue gradient */
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2.5rem;
    color: #004d40; /* Cool dark teal */
    margin-bottom: 2rem;
  }
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const TeamCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.2rem;
    color: #004d40; /* Cool dark teal */
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`

const AboutUs = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <h1>About Us</h1>
        <p>Learn more about Eltons Christian School</p>
      </Header>

      {/* About Section */}
      <About>
        <div>
          <span>
            <FaHome />
          </span>
          <h1>Mission</h1>
          <p>
            Committed to partnering with parents to educate the minds and
            nurture the hearts of learners for the glory of God in a
            Christ-centered environment.
          </p>
        </div>
        <div>
          <span>
            <FaEye />
          </span>
          <h1>Vision</h1>
          <p>
            To see lives transformed by the power of the gospel of Jesus Christ
            through Christian Education.
          </p>
        </div>
        <div>
          <span>
            <FaHistory />
          </span>
          <h1>History</h1>
          <p>
            Established in 2007, Eltons Christian School has been a beacon of
            education and faith. Our journey began with a vision to see lives
            transformed by the power of the gospel of Jesus Christ through
            Christian Education. Over the years, we've grown into a vibrant
            community of learners, teachers, and families dedicated to
            excellence.
          </p>
        </div>
      </About>

      {/* Our Team Section */}
      <TeamSection>
        <h2>Meet Our Team</h2>
        <TeamGrid>
          <TeamCard>
            <img src="../src/assets/images/team1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Principal</p>
          </TeamCard>
          <TeamCard>
            <img src="../src/assets/images/team2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Vice Principal</p>
          </TeamCard>
          <TeamCard>
            <img src="../src/assets/images/team3.jpg" alt="Team Member 3" />
            <h3>Michael Brown</h3>
            <p>Head of Academics</p>
          </TeamCard>
          <TeamCard>
            <img src="../src/assets/images/team4.jpg" alt="Team Member 4" />
            <h3>Emily White</h3>
            <p>Head of Administration</p>
          </TeamCard>
        </TeamGrid>
      </TeamSection>
    </Container>
  )
}

export default AboutUs
