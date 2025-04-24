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

const StepsSection = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1.5s;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  div {
    flex: 1;

    h2 {
      font-size: 1.5rem;
      color: #07611c;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: #333;
      line-height: 1.5;
    }
  }
`

const InfoSection = styled.div`
  margin: 2rem 0;
  text-align: center;
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

  a {
    color: #07611c;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Admissions = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <h1>Admissions</h1>
        <p>
          Join our vibrant community of learners! Follow the steps below to
          begin your journey at Eltons Christian School.
        </p>
      </Header>

      {/* Steps Section */}
      <StepsSection>
        <Step>
          <img src="../images/step1.jpg" alt="Step 1" />
          <div>
            <h2>Step 1: Submit an Application</h2>
            <p>
              Complete the online application form and provide the necessary
              documents, including previous academic records and a copy of the
              student's birth certificate.
            </p>
          </div>
        </Step>

        <Step>
          <img src="../images/step2.jpg" alt="Step 2" />
          <div>
            <h2>Step 2: Schedule an Interview</h2>
            <p>
              Once your application is reviewed, our admissions team will
              contact you to schedule an interview with the student and their
              parents or guardians.
            </p>
          </div>
        </Step>

        <Step>
          <img src="../images/step3.jpg" alt="Step 3" />
          <div>
            <h2>Step 3: Take an Assessment</h2>
            <p>
              Students may be required to take an academic assessment to help us
              determine the best placement for their success.
            </p>
          </div>
        </Step>

        <Step>
          <img src="../images/step4.jpg" alt="Step 4" />
          <div>
            <h2>Step 4: Receive an Offer</h2>
            <p>
              After completing the interview and assessment, you will receive an
              admission decision. If accepted, you will receive an offer letter
              with further instructions.
            </p>
          </div>
        </Step>

        <Step>
          <img src="../images/step5.jpg" alt="Step 5" />
          <div>
            <h2>Step 5: Complete Enrollment</h2>
            <p>
              Secure your spot by completing the enrollment process, including
              payment of fees and submission of any remaining documents.
            </p>
          </div>
        </Step>
      </StepsSection>

      {/* Additional Information Section */}
      <InfoSection>
        <h2>Need More Information?</h2>
        <p>
          If you have any questions about the admissions process, feel free to
          contact our admissions office at{" "}
          <a href="mailto:admissions@eltonsschool.com">
            admissions@eltonsschool.com
          </a>{" "}
          or call us at <a href="tel:+1234567890">+123 456 7890</a>.
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
