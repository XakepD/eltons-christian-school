import React from "react"
import styled from "styled-components"
import "animate.css"

const Container = styled.div`
  padding: 2rem 6rem;
  background-color: #f9f9f9;
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

const Section = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  margin: 2rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    flex: 1;
  }

  img {
    flex: 1;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1.5s;
  }

  h2 {
    font-size: 2rem;
    color: #07611c;
    margin-bottom: 1rem;
    animation: fadeInLeft 1.5s;
  }

  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
    animation: fadeInRight 1.5s;
  }
`

const MissionVision = styled.div`
  text-align: center;
  margin: 2rem 0;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1.5s;

  h2 {
    font-size: 2rem;
    color: #07611c;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
  }
`

const AboutUs = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <h1>About Us</h1>
        <p>
          Learn more about Eltons Christian School, our mission, vision, and the
          values that drive us.
        </p>
      </Header>

      {/* History Section */}
      <Section reverse={false}>
        <div>
          <h2>Our History</h2>
          <p>
            Established over 20 years ago, Eltons Christian School has been a
            beacon of education and faith. Our journey began with a vision to
            provide quality education rooted in Christian values. Over the
            years, we have grown into a vibrant community of learners, teachers,
            and families dedicated to excellence.
          </p>
        </div>
        <img src="../images/history.jpg" alt="Our History" />
      </Section>

      {/* Mission and Vision Section */}
      <MissionVision>
        <h2>Our Mission</h2>
        <p>
          To inspire excellence, build character, and nurture a love for
          learning in every student through a Christ-centered education.
        </p>
        <h2>Our Vision</h2>
        <p>
          To be a leading Christian school that empowers students to become
          compassionate leaders and lifelong learners who make a positive impact
          on the world.
        </p>
      </MissionVision>

      {/* Values Section */}
      <Section reverse={true}>
        <div>
          <h2>Our Core Values</h2>
          <p>
            At Eltons Christian School, we are guided by the following core
            values:
          </p>
          <ul>
            <li>
              <strong>Faith:</strong> Rooted in Christian principles.
            </li>
            <li>
              <strong>Excellence:</strong> Striving for academic and personal
              growth.
            </li>
            <li>
              <strong>Integrity:</strong> Acting with honesty and respect.
            </li>
            <li>
              <strong>Community:</strong> Building strong relationships and
              partnerships.
            </li>
            <li>
              <strong>Service:</strong> Giving back to society and making a
              difference.
            </li>
          </ul>
        </div>
        <img src="../images/values.jpg" alt="Our Values" />
      </Section>

      {/* Team Section */}
      <Section reverse={false}>
        <div>
          <h2>Meet Our Team</h2>
          <p>
            Our dedicated team of educators and staff are passionate about
            providing the best learning experience for our students. With a
            commitment to excellence and a heart for service, our team works
            tirelessly to ensure every student thrives academically,
            spiritually, and socially.
          </p>
        </div>
        <img src="../images/team.jpg" alt="Our Team" />
      </Section>
    </Container>
  )
}

export default AboutUs
