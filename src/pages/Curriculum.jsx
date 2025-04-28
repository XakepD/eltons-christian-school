import React from "react"
import styled from "styled-components"
import "animate.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

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
    text-align: center;
  }
`
const Sections = styled.div`
  padding: 2rem 4rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`
const Section = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 2rem;
  background: white;
  padding: 2rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 768px) {
    }

    h2 {
      font-size: 1.8rem;
      color: #07611c;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      color: #333;
      line-height: 1.5;
    }
  }

  img {
    max-width: 500px;
    border-radius: 2px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1.5s;
    @media (max-width: 768px) {
      width: 100%;
      max-width: 100%;
    }
  }
`

const Curriculum = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    })
  }, [])

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <h1>Our Curriculum</h1>
        <p>
          At Eltons Christian School, we offer a well-rounded curriculum that
          nurtures academic excellence, creativity, and character development.
        </p>
      </Header>

      {/* Early Years Section */}
      <Sections>
        <Section reverse={false} data-aos="fade-up">
          <div>
            <h2>Early Years</h2>
            <p>
              Our Early Years program focuses on building a strong foundation
              for lifelong learning. Through play-based and hands-on activities,
              we nurture curiosity, creativity, and social skills in our
              youngest learners.
            </p>
          </div>
          <img src="../src/assets/images/early.jpg" alt="Early Years" />
        </Section>

        {/* Primary School Section */}
        <Section reverse={true} data-aos="fade-up">
          <div>
            <h2>Primary School</h2>
            <p>
              In Primary School, we emphasize core subjects such as Mathematics,
              English, and Science while integrating arts, physical education,
              and technology. Our goal is to develop critical thinking and a
              love for learning.
            </p>
          </div>
          <img src="../src/assets/images/primary.jpg" alt="Primary School" />
        </Section>

        {/* Middle School Section */}
        <Section reverse={false} data-aos="fade-up">
          <div>
            <h2>Junior Secondary School</h2>
            <p>
              Our Junior Secondary School curriculum is designed to prepare
              students for the challenges of high school. We offer a balanced
              program that includes advanced academics, leadership
              opportunities, and extracurricular activities.
            </p>
          </div>
          <img src="../src/assets/images/junior.jpg" alt="Middle School" />
        </Section>

        {/* High School Section */}
        <Section reverse={true} data-aos="fade-up">
          <div>
            <h2>Senior Secondary School</h2>
            <p>
              In Senior Secondary School, students are encouraged to pursue
              their passions and prepare for higher education. We offer a wide
              range of subjects to ensure college readiness.
            </p>
          </div>
          <img src="../src/assets/images/senior.jpg" alt="High School" />
        </Section>

        {/* Extracurricular Activities Section */}
        <Section reverse={false} data-aos="fade-up">
          <div>
            <h2>Extracurricular Activities</h2>
            <p>
              Beyond academics, we provide a variety of extracurricular
              activities, including sports, music, drama, and community service.
              These programs help students develop teamwork, leadership, and
              other essential life skills.
            </p>
          </div>
          <img
            src="../images/extracurricular.jpg"
            alt="Extracurricular Activities"
          />
        </Section>
      </Sections>
    </Container>
  )
}

export default Curriculum
