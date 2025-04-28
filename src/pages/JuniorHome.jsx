import React, { useEffect } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AOS from "aos"
import "aos/dist/aos.css"
import JuniorSlides from "../components/Junior Slides"

const Container = styled.div`
  font-family: "Comic Sans MS", "Segoe UI", sans-serif;
  color: #333;
`

const Header = styled.header`
  text-align: center;
  padding: 2rem 0;
  color: white;
  background: linear-gradient(
    135deg,
    #8e24aa,
    #d81b60
  ); /* Vibrant pink-purple gradient */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeInDown 1.5s;
  }

  p {
    font-size: 1.2rem;
    animation: fadeInUp 1.5s;
  }
`
const Sections = styled.section`
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`
const Section = styled.section`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    color: #8e24aa; /* Purple */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const ClassesGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100%;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const ClassCard = styled.div`
  background: linear-gradient(135deg, #f8bbd0, #f48fb1); /* Pink gradient */
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease-in-out;
  height: 200px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  h3 {
    font-size: 1.5rem;
    color: #8e24aa; /* Purple */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`

const JuniorHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <Container>
      {/* Carousel Section */}
      <JuniorSlides />

      {/* Header Section */}
      <Sections>
        {/* About Section */}
        <Section data-aos="fade-up">
          <div>
            <h2>About Our Junior Section</h2>
            <p>
              Our Junior Section is designed to provide a nurturing and engaging
              environment for children to grow academically, socially, and
              emotionally. We focus on building a strong foundation in literacy,
              numeracy, and critical thinking while encouraging creativity and
              exploration.
            </p>
          </div>
          <img src="../src/assets/images/IMG_2105.jpg" alt="Junior Section 1" />
        </Section>

        {/* Classes Section */}
        <Section data-aos="fade-up">
          <div>
            <h2>Our Classes</h2>
            <p>
              We offer a range of classes tailored to meet the developmental
              needs of children at different stages:
            </p>
            <ClassesGrid>
              <ClassCard data-aos="fade-up">
                <h3>Creche</h3>
                <p>
                  Providing care and early learning for infants and toddlers.
                </p>
              </ClassCard>
              <ClassCard data-aos="fade-up">
                <h3>Toddlers</h3>
                <p>
                  Encouraging exploration and social interaction for young
                  learners.
                </p>
              </ClassCard>
              <ClassCard data-aos="fade-up">
                <h3>Pre-Nursery</h3>
                <p>
                  Preparing children for structured learning in a fun
                  environment.
                </p>
              </ClassCard>
              <ClassCard data-aos="fade-up">
                <h3>Nursery 1 & 2</h3>
                <p>
                  Building foundational skills in literacy, numeracy, and
                  creativity.
                </p>
              </ClassCard>
              <ClassCard data-aos="fade-up">
                <h3>Basic 1 to 5</h3>
                <p>
                  Developing critical thinking, problem-solving, and academic
                  excellence.
                </p>
              </ClassCard>
            </ClassesGrid>
          </div>
        </Section>

        {/* Why Choose Us Section */}
        <Section data-aos="fade-up">
          <div>
            <h2>Why Choose Our Junior Section?</h2>
            <p>
              At our Junior Section, we provide:
              <ul>
                <li>A safe and nurturing environment.</li>
                <li>Experienced and caring teachers.</li>
                <li>Engaging and age-appropriate curriculum.</li>
                <li>Opportunities for creativity and exploration.</li>
              </ul>
            </p>
          </div>
          <img src="../src/assets/images/IMG_2468.jpg" alt="Junior Section 1" />
        </Section>

        {/* Contact Section */}
        <Section data-aos="fade-up">
          <div>
            <h2>Get in Touch</h2>
            <p>
              Want to learn more about our Junior Section? Contact us today and
              let us help you get started on this exciting journey!
            </p>
            <img src="../images/contact_us.jpg" alt="Contact Us" />
          </div>
        </Section>
      </Sections>
    </Container>
  )
}

export default JuniorHome
