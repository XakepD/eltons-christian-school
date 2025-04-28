import React, { useEffect } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AOS from "aos"
import "aos/dist/aos.css"
import {
  FaChalkboardTeacher,
  FaBook,
  FaUserGraduate,
  FaStar,
} from "react-icons/fa"

import SeniorSlides from "../components/SeniorSlides"

const Container = styled.div`
  background: #121212; /* Dark background */
  font-family: "Segoe UI", sans-serif;
  color: #e0e0e0; /* Light text color */
`
const WhyChooseUsSection = styled.section`
  padding: 3rem 2rem;
  background: #1e1e2f; /* Dark section background */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  margin: 2rem 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #64b5f6; /* Light blue */
    margin-bottom: 2rem;
  }

  .features {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    height: 100%;

    .feature {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      height: inherit;
      background: linear-gradient(
        135deg,
        #424242,
        #616161
      ); /* Dark gray gradient */
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
      width: 250px;
      svg {
        font-size: 3rem;
        color: #64b5f6; /* Light blue */
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.5rem;
        color: #64b5f6; /* Light blue */
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1rem;
        color: #bdbdbd; /* Light gray */
      }
    }
  }
`
const Header = styled.header`
  text-align: center;
  padding: 3rem 0;
  color: #ffffff;
  background: linear-gradient(
    135deg,
    #0d47a1,
    #1565c0
  ); /* Deep blue gradient */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

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

const CarouselContainer = styled.div`
  margin: 2rem 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 2rem;
  background: #1e1e2f; /* Dark section background */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1s ease-in-out;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    color: #64b5f6; /* Light blue */
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
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  }
`
const Sections = styled.section`
  padding: 2rem;
`
const ClassesGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const ClassCard = styled.div`
  background: linear-gradient(
    135deg,
    #424242,
    #616161
  ); /* Dark gray gradient */
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 1s ease-in-out;

  min-height: 200px;
  @media (max-width: 768px) {
    height: auto;
  }

  h3 {
    font-size: 1.5rem;
    color: #64b5f6; /* Light blue */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`

const TestimonialSection = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: #1e1e2f; /* Dark background */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #64b5f6; /* Light blue */
    margin-bottom: 1rem;
  }

  blockquote {
    font-size: 1rem;
    font-style: italic;
    color: #bdbdbd; /* Light gray */
    margin: 1rem 0;
  }
`

const SeniorHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <Container>
      {/* Header Section */}

      <SeniorSlides />

      {/* Carousel Section */}
      <Sections>
        {/* About Section */}
        <Section data-aos="fade-up">
          <div>
            <h2>About Our Senior Section</h2>
            <p>
              Our Senior Section is dedicated to preparing students for higher
              education and life beyond school. We focus on academic excellence,
              leadership development, and character building. Our curriculum is
              designed to challenge students while providing the support they
              need to succeed.
            </p>
          </div>

          <img src="../src/assets/images/IMG_2508.jpg" alt="Slide 5" />
        </Section>

        {/* Classes Section */}
        <Section data-aos="fade-up" reverse>
          <div>
            <h2>Our Classes</h2>
            <p>
              We offer a range of classes tailored to meet the academic and
              developmental needs of our senior students:
            </p>
            <ClassesGrid>
              <ClassCard data-aos="fade-up">
                <h3>JSS 1 (Kabod)</h3>
                <p>
                  Building a strong foundation in core subjects and fostering
                  curiosity.
                </p>
              </ClassCard>
              <ClassCard data-aos="fade-up">
                <h3>JSS 2 (Kadosh)</h3>
                <p>
                  Encouraging critical thinking and preparing students for
                  advanced learning.
                </p>
              </ClassCard>
              <ClassCard data-aos="fade-up">
                <h3>JSS 3 (Khayl)</h3>
                <p>
                  Preparing students for external exams and academic challenges.
                </p>
              </ClassCard>
              <ClassCard data-aos="fade-up">
                <h3>SSS 1</h3>
                <p>
                  Introducing specialized subjects and preparing students for
                  their chosen career paths.
                </p>
              </ClassCard>
            </ClassesGrid>
          </div>
        </Section>

        {/* Testimonials Section */}
        <WhyChooseUsSection data-aos="fade-up">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature" data-aos="fade-up">
              <FaChalkboardTeacher />
              <h3>Experienced Teachers</h3>
              <p>
                Our teachers are highly qualified and dedicated to nurturing
                every student’s potential.
              </p>
            </div>
            <div className="feature" data-aos="fade-up">
              <FaBook />
              <h3>Comprehensive Curriculum</h3>
              <p>
                Our curriculum is designed to foster academic excellence and
                critical thinking.
              </p>
            </div>
            <div className="feature" data-aos="fade-up">
              <FaUserGraduate />
              <h3>Leadership Development</h3>
              <p>
                We provide opportunities for students to grow as leaders and
                role models.
              </p>
            </div>
            <div className="feature" data-aos="fade-up">
              <FaStar />
              <h3>Character Building</h3>
              <p>
                We emphasize moral and ethical values to shape well-rounded
                individuals.
              </p>
            </div>
          </div>
        </WhyChooseUsSection>

        {/* Contact Section */}
        <Section data-aos="fade-up">
          <div>
            <h2>Get in Touch</h2>
            <p>
              Want to learn more about our Senior Section? Contact us today and
              let us help you take the next step in your academic journey!
            </p>
          </div>
          <img src="../src/assets/images/IMG_3583.jpg" alt="Slide 5" />
        </Section>
      </Sections>
    </Container>
  )
}

export default SeniorHome
