import React from "react"
import styled from "styled-components"
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

const StepsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
  background-color: ${theme.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1.5rem;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }

  div {
    h2 {
      font-size: 1.8rem;
      color: ${theme.primary};
      margin-bottom: 1rem;
      font-family: ${theme.fonts.secondary};
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: ${theme.text};
    }
  }
`

const InfoSection = styled.section`
  background-color: ${theme.white};
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: ${theme.primary};
    margin-bottom: 1.5rem;
    font-family: ${theme.fonts.secondary};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto 1.5rem;
    color: ${theme.text};

    a {
      color: ${theme.primary};
      font-weight: 600;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${theme.secondary};
        text-decoration: underline;
      }
    }
  }
`

const Admissions = () => {
  return (
    <Container>
      <Header>
        <h1>Admissions</h1>
        <p>
          Join our vibrant community of learners! Follow the steps below to
          begin your journey at Eltons Christian School.
        </p>
      </Header>

      <StepsSection>
        <Step>
          <img src="../src/assets/images/submit.png" alt="Submit Application" />
          <div>
            <h2>Step 1: Submit an Application</h2>
            <p>
              Complete the application form and provide the necessary documents,
              including previous academic records and a copy of the student's
              birth certificate.
            </p>
          </div>
        </Step>

        <Step>
          <img src="../src/assets/images/take.png" alt="Take Assessment" />
          <div>
            <h2>Step 2: Take an Assessment</h2>
            <p>
              Students may be required to take an academic assessment to help us
              determine the best placement for their success.
            </p>
          </div>
        </Step>

        <Step>
          <img src="../src/assets/images/receive.png" alt="Receive Offer" />
          <div>
            <h2>Step 3: Receive an Offer</h2>
            <p>
              After completing the interview and assessment, you will receive an
              admission decision. If accepted, you will receive an offer letter
              with further instructions.
            </p>
          </div>
        </Step>

        <Step>
          <img
            src="../src/assets/images/complete.png"
            alt="Complete Enrollment"
          />
          <div>
            <h2>Step 4: Complete Enrollment</h2>
            <p>
              Secure your spot by completing the enrollment process, including
              payment of fees and submission of any remaining documents.
            </p>
          </div>
        </Step>
      </StepsSection>

      <InfoSection>
        <h2>Need More Information?</h2>
        <p>
          If you have any questions about the admissions process, feel free to
          contact our admissions office at{" "}
          <a href="mailto:eltonchristianschool@gmail.com">
            eltonchristianschool@gmail.com
          </a>{" "}
          or call us at <a href="tel:+2348036702706">+2348036702706</a>.
        </p>
        <p>
          We look forward to welcoming you to the Eltons Christian School
          family!
        </p>
      </InfoSection>
    </Container>
  )
}

export default Admissions
