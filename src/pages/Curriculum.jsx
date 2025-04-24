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
  margin: 2rem 0;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 2rem;
  background: white;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

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
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1.5s;
  }
`

const Curriculum = () => {
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
      <Section reverse={false}>
        <div>
          <h2>Early Years</h2>
          <p>
            Our Early Years program focuses on building a strong foundation for
            lifelong learning. Through play-based and hands-on activities, we
            nurture curiosity, creativity, and social skills in our youngest
            learners.
          </p>
        </div>
        <img src="../images/img9.jpg" alt="Early Years" />
      </Section>

      {/* Primary School Section */}
      <Section reverse={true}>
        <div>
          <h2>Primary School</h2>
          <p>
            In Primary School, we emphasize core subjects such as Mathematics,
            English, and Science while integrating arts, physical education, and
            technology. Our goal is to develop critical thinking and a love for
            learning.
          </p>
        </div>
        <img src="../images/img6.jpg" alt="Primary School" />
      </Section>

      {/* Middle School Section */}
      <Section reverse={false}>
        <div>
          <h2>Middle School</h2>
          <p>
            Our Middle School curriculum is designed to prepare students for the
            challenges of high school. We offer a balanced program that includes
            advanced academics, leadership opportunities, and extracurricular
            activities.
          </p>
        </div>
        <img src="../images/img8.jpg" alt="Middle School" />
      </Section>

      {/* High School Section */}
      <Section reverse={true}>
        <div>
          <h2>High School</h2>
          <p>
            In High School, students are encouraged to pursue their passions and
            prepare for higher education. We offer a wide range of subjects and
            electives, including Advanced Placement (AP) courses, to ensure
            college readiness.
          </p>
        </div>
        <img src="../images/img5.jpg" alt="High School" />
      </Section>

      {/* Extracurricular Activities Section */}
      <Section reverse={false}>
        <div>
          <h2>Extracurricular Activities</h2>
          <p>
            Beyond academics, we provide a variety of extracurricular
            activities, including sports, music, drama, and community service.
            These programs help students develop teamwork, leadership, and other
            essential life skills.
          </p>
        </div>
        <img
          src="../images/extracurricular.jpg"
          alt="Extracurricular Activities"
        />
      </Section>
    </Container>
  )
}

export default Curriculum
