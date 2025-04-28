import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "animate.css"

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

  .self-writing {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #ffcc00;
    font-weight: bold;
    animation: typing 3s steps(20, end), blink-caret 0.5s step-end infinite;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: #ffcc00;
      }
    }
  }
`

const Sections = styled.div`
  padding: 2rem 4rem;
  @media (max-width: 768px) {
    padding: 2rem;
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
const TypewriterEffect = ({ text, speed, deleteSpeed, loop }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isDeleting) {
          setDisplayedText(displayedText.slice(0, -1))
          setIndex(index - 1)
        } else {
          if (index < text.length) {
            setDisplayedText(displayedText + text[index])
            setIndex(index + 1)
          }
        }

        if (index === text.length) {
          setIsDeleting(true)
        }

        if (index === 0 && isDeleting) {
          setIsDeleting(false)
          if (loop) {
            setIndex(0)
            setDisplayedText("")
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    )

    return () => clearInterval(interval)
  }, [index, text, speed, deleteSpeed, isDeleting, loop, displayedText])

  return <h1 className="typewriter-text">{displayedText}</h1>
}

const Admissions = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <TypewriterEffect
          text="Admission in progress..."
          speed={100}
          deleteSpeed={50}
          loop={true}
        />
        <p>
          Join our vibrant community of learners! Follow the steps below to
          begin your journey at Eltons Christian School.
        </p>
      </Header>

      {/* Steps Section */}
      <Sections>
        <StepsSection>
          <Step>
            <img src="../src/assets/images/submit.png" alt="Step 1" />
            <div>
              <h2>Step 1: Submit an Application</h2>
              <p>
                Complete the online application form and provide the necessary
                documents, including previous academic records and a copy of the
                student's birth certificate.
              </p>
            </div>
          </Step>

          {/* Removed Step 2 */}

          <Step>
            <img src="../src/assets/images/take.png" alt="Step 1" />
            <div>
              <h2>Step 2: Take an Assessment</h2>
              <p>
                Students may be required to take an academic assessment to help
                us determine the best placement for their success.
              </p>
            </div>
          </Step>

          <Step>
            <img src="../src/assets/images/receive.png" alt="Step 1" />
            <div>
              <h2>Step 3: Receive an Offer</h2>
              <p>
                After completing the interview and assessment, you will receive
                an admission decision. If accepted, you will receive an offer
                letter with further instructions.
              </p>
            </div>
          </Step>

          <Step>
            <img src="../src/assets/images/complete.png" alt="Step 1" />
            <div>
              <h2>Step 4: Complete Enrollment</h2>
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
      </Sections>
    </Container>
  )
}

export default Admissions
