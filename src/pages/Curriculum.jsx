import React, { useEffect } from "react"
import styled from "styled-components"
import "animate.css"
import AOS from "aos"
import "aos/dist/aos.css"

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
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`

const Sections = styled.div`
  padding: 2rem 4rem;
  max-width: 1400px;
  margin: 0 auto;

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
  padding: 2.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h2 {
      font-size: 1.8rem;
      color: ${theme.primary};
      margin-bottom: 1.5rem;
      font-family: ${theme.fonts.secondary};
      position: relative;
      padding-bottom: 0.5rem;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background: ${theme.secondary};
      }
    }

    h3 {
      font-size: 1.4rem;
      color: ${theme.primary};
      margin: 1.5rem 0 0.8rem;
      font-family: ${theme.fonts.secondary};
      font-weight: 600;
    }

    h4 {
      font-size: 1.1rem;
      color: ${theme.secondary};
      margin: 1rem 0 0.5rem;
      font-family: ${theme.fonts.secondary};
    }

    p,
    ul {
      font-size: 1rem;
      color: ${theme.text};
      line-height: 1.6;
    }

    ul {
      margin-left: 1.2rem;
      margin-bottom: 1rem;
      padding-left: 0.5rem;
    }

    li {
      margin-bottom: 0.4rem;
      position: relative;
      padding-left: 1rem;

      &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${theme.secondary};
        font-weight: bold;
      }
    }
  }

  img {
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1.5s;
    object-fit: cover;
    height: 100%;
    max-height: 500px;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 100%;
      max-height: 300px;
    }
  }
`

const SubjectLevelsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SubjectLevel = styled.div`
  background: ${theme.light};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: ${theme.primary};
    border-bottom: 2px solid ${theme.secondary};
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  h4 {
    margin-top: 1.2rem;
  }
`

const SeniorSecondaryTracks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`

const Curriculum = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <h1>Curriculum & Examinations</h1>
        <p>
          At Eltons Christian School, our curriculum is designed to provide a
          balanced and comprehensive education, preparing students for both
          national and international examinations. We are committed to nurturing
          academic excellence, godly character, and practical life skills in
          every child.
        </p>
      </Header>

      <Sections>
        {/* Curriculum Overview */}
        <Section reverse={false} data-aos="fade-up">
          <div>
            <h2>Curriculum Overview</h2>
            <p>
              Our curriculum is broad-based and dynamic, combining the Nigerian
              National Curriculum with select international best practices. This
              ensures our students are well-equipped for success in a rapidly
              changing world.
            </p>
            <ul>
              <li>
                <strong>Early Years (Nursery & Kindergarten):</strong> Focus on
                foundational literacy, numeracy, social, and motor skills
                through play-based learning.
              </li>
              <li>
                <strong>Primary (Grades 1-5):</strong> Emphasis on core
                subjects, creativity, and critical thinking with project-based
                learning approaches.
              </li>
              <li>
                <strong>Junior Secondary (Grades 7-9):</strong> Broad curriculum
                with introduction to vocational subjects.
              </li>
              <li>
                <strong>Senior Secondary:</strong> Specialized academic and
                vocational tracks with leadership and character development
                programs.
              </li>
            </ul>
          </div>
          <img
            src="../src/assets/images/primary.jpg"
            alt="Curriculum Overview"
          />
        </Section>
        {/* Subjects Offered */}
        <Section reverse={true} data-aos="fade-up">
          <div>
            <h2>Subjects Offered</h2>
            <p>
              We offer a carefully structured range of subjects tailored to each
              educational level:
            </p>

            <SubjectLevelsContainer>
              <SubjectLevel>
                <h3>Primary School (Grades 1-6)</h3>
                <ul>
                  <li>English Language & Literature</li>
                  <li>Mathematics</li>
                  <li>Basic Science & Technology</li>
                  <li>Social Studies & Civic Education</li>
                  <li>Christian Religious Studies</li>
                  <li>French Language</li>
                  <li>ICT/Computer Studies</li>
                  <li>Creative Arts & Music</li>
                  <li>Physical & Health Education</li>
                  <li>Handwriting & Phonics (Lower Primary)</li>
                </ul>
              </SubjectLevel>

              <SubjectLevel>
                <h3>Junior Secondary (Grades 7-9)</h3>
                <ul>
                  <li>English Studies</li>
                  <li>Mathematics</li>
                  <li>Basic Science</li>
                  <li>Basic Technology</li>
                  <li>Social Studies</li>
                  <li>Christian Religious Studies</li>
                  <li>French Language</li>
                  <li>Computer Studies</li>
                  <li>Business Studies</li>
                  <li>Home Economics</li>
                  <li>Agricultural Science</li>
                  <li>Cultural & Creative Arts</li>
                  <li>Physical & Health Education</li>
                </ul>
              </SubjectLevel>

              <SubjectLevel>
                <h3>Senior Secondary </h3>
                <p>Students choose from three academic tracks:</p>
                <SeniorSecondaryTracks>
                  <div>
                    <h4>Science Track</h4>
                    <ul>
                      <li>English Language</li>
                      <li>Mathematics</li>
                      <li>Physics</li>
                      <li>Chemistry</li>
                      <li>Biology</li>
                      <li>Further Mathematics</li>
                      <li>Agricultural Science</li>
                      <li>Technical Drawing</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Arts & Humanities</h4>
                    <ul>
                      <li>English Literature</li>
                      <li>Government</li>
                      <li>Economics</li>
                      <li>Christian Religious Studies</li>
                      <li>History</li>
                      <li>Geography</li>
                      <li>Visual Arts</li>
                      <li>Music</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Business Track</h4>
                    <ul>
                      <li>Commerce</li>
                      <li>Accounting</li>
                      <li>Economics</li>
                      <li>Business Studies</li>
                      <li>Office Practice</li>
                      <li>Computer Studies</li>
                      <li>Mathematics</li>
                    </ul>
                  </div>
                </SeniorSecondaryTracks>
              </SubjectLevel>
            </SubjectLevelsContainer>
          </div>
        </Section>
        {/* Examinations */}
        {/* <Section reverse={false} data-aos="fade-up">
          <div>
            <h2>Examinations</h2>
            <p>
              Our students are prepared for a variety of internal and external
              examinations, ensuring they are ready for the next stage of their
              academic journey:
            </p>
            <ul>
              <li>
                <strong>Continuous Assessment:</strong> Weekly tests, termly
                exams, and projects
              </li>
              <li>
                <strong>Primary 6:</strong> National Common Entrance Examination
              </li>
              <li>
                <strong>JSS 3:</strong> Basic Education Certificate Examination
                (BECE)
              </li>
              <li>
                <strong>SSS 3:</strong> West African Senior School Certificate
                Examination (WASSCE)
              </li>
              <li>
                <strong>SSS 3:</strong> National Examinations Council (NECO)
                Exams
              </li>
              <li>
                <strong>Optional:</strong> Cambridge Checkpoint, IGCSE for
                international pathways
              </li>
              <li>
                <strong>Other:</strong> SAT, TOEFL for students pursuing
                overseas education
              </li>
            </ul>
          </div>
          <img src="../src/assets/images/exams.jpg" alt="Examinations" />
        </Section>

      
        <Section reverse={true} data-aos="fade-up">
          <div>
            <h2>Co-curricular Activities</h2>
            <p>
              We believe in the holistic development of every child through:
            </p>
            <ul>
              <li>
                <strong>Academic Clubs:</strong> Press Club, Debate, JETS
                (Junior Engineers, Technicians and Scientists), Literary Society
              </li>
              <li>
                <strong>Creative Arts:</strong> Drama, Choir, Band, Art Club
              </li>
              <li>
                <strong>Sports:</strong> Football, Basketball, Athletics, Table
                Tennis
              </li>
              <li>
                <strong>Leadership:</strong> Student Council, Prefect System,
                Peer Mentoring
              </li>
              <li>
                <strong>Community Service:</strong> Environmental Club, Charity
                Initiatives
              </li>
              <li>
                <strong>Special Programs:</strong> Career Day, Entrepreneurship
                Week, Science Fair
              </li>
            </ul>
          </div>
          <img
            src="../src/assets/images/extracurricular.jpg"
            alt="Co-curricular Activities"
          />
        </Section>{" "}
        */}
      </Sections>
    </Container>
  )
}

export default Curriculum
