import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "animate.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { FaChalkboardTeacher, FaChild, FaBook, FaSmile } from "react-icons/fa"
import Welcome from "../components/Welcome"
import Slides from "../components/Slides"
import Contact from "../components/Contact"
import MiniGallery from "../components/MiniGallery"

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  position: absolute;
  bottom: 20px;
  @media (max-width: 768px) {
    position: relative;
  }

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #5cff7c; /* Light green hover effect */
    }
  }
`

const WhyChooseUsSection = styled.section`
  margin: 3rem 0;
  padding: 4rem;
  background: rgba(0, 0, 0, 0.1);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1.5s;
  display: flex;
  gap: 30px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .feature {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: #000000;
      padding: 1.3rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      svg {
        font-size: 2.5rem;
        color: #5cff7c;
      }

      div {
        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1rem;
          line-height: 1.5;
        }
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
const WhyContent = styled.div`
  flex: 2;
`
const WhyImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  div {
    img {
      width: 100%;
      filter: grayscale(0.5);
      border-top: 20px solid #000000;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`
const Container = styled.div`
  background: url("../src/assets/images/bg-image.jpg") no-repeat center center
    fixed;
  background-size: cover;
  backdrop-filter: blur(35px);
  color: #333;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  padding: 3rem 6rem;
  gap: 2rem;
  background: whitesmoke;
  flex-wrap: wrap;
  margin-top: 30px;
  @media (max-width: 768px) {
    padding: 2rem;
    text-align: left;
  }

  div {
    flex: 1;
  }

  img {
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  h2 {
    color: #07611c;
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`

const TestimonialsCarousel = styled(Slider)`
  padding: 2rem;
  background: #fff8f0;
  text-align: center;

  .slick-slide p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
  }
`

const LevelsSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`

const LevelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const LevelCard = styled.div`
  background: #f0f0f0;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #07611c;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
  }
`
const Home = () => {
  const testimonialsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    })
  }, [])

  return (
    <Container>
      <Slides />
      <Welcome />

      {/* Mission Section */}
      <Section reverse={false} data-aos="fade-right">
        <div>
          <h2>Our Mission</h2>
          <p>
            We are committed to partnering with parents to educate the minds and
            nuture the hearts of learners for the glory of God in a Christ
            centered environment
          </p>
        </div>
        <img src="../images/img6.jpg" alt="Mission" />
      </Section>

      <Section reverse={true} data-aos="fade-left">
        <div>
          <h2>About Us</h2>
          <p>
            Eltons Christian School has been a beacon of education and faith for
            over a decade. Our programs support students from diverse
            backgrounds with quality learning experiences.
          </p>
        </div>
        <img src="../images/img3.jpg" alt="About Us" />
      </Section>
      <WhyChooseUsSection data-aos="fade-up">
        <WhyContent>
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature" data-aos="fade-up">
              <FaChalkboardTeacher />
              <div>
                <h3>Experienced Teachers</h3>
                <p>
                  Our teachers are highly qualified and dedicated to nurturing
                  every child’s potential.
                </p>
              </div>
            </div>
            <div className="feature" data-aos="fade-up">
              <FaChild />
              <div>
                <h3>Child-Centered Learning</h3>
                <p>
                  We focus on creating a safe and engaging environment for every
                  child to thrive.
                </p>
              </div>
            </div>
            <div className="feature" data-aos="fade-up">
              <FaBook />
              <div>
                <h3>Comprehensive Curriculum</h3>
                <p>
                  Our curriculum is designed to foster academic excellence and
                  creativity.
                </p>
              </div>
            </div>
            <div className="feature" data-aos="fade-up">
              <FaSmile />
              <div>
                <h3>Happy Students</h3>
                <p>
                  We ensure that every child enjoys their learning journey with
                  us.
                </p>
              </div>
            </div>
          </div>
        </WhyContent>
        <WhyImage data-aos="fade-down">
          <div>
            <img src="../src/assets/images/becca.jpg" alt="" srcset="" />
          </div>
        </WhyImage>
      </WhyChooseUsSection>
      <LevelsSection data-aos="fade-up">
        <h2>🧒👦 Our School Levels</h2>
        <LevelsGrid>
          <LevelCard data-aos="fade-up">
            <h3>🎨 Early Years</h3>
            <p>
              Nursery & Kindergarten – Building the foundation through play,
              care, and discovery.
            </p>
          </LevelCard>
          <LevelCard data-aos="fade-right">
            <h3>📖 Primary School</h3>
            <p>Developing skills in literacy, numeracy, and curiosity.</p>
          </LevelCard>
          <LevelCard data-aos="fade-left">
            <h3>🏫 Junior Secondary</h3>
            <p>Cultivating deeper learning and character.</p>
          </LevelCard>
          <LevelCard data-aos="fade-up">
            <h3>🎓 Senior Secondary</h3>
            <p>Preparing for higher education and the world beyond.</p>
          </LevelCard>
        </LevelsGrid>
      </LevelsSection>
      <MiniGallery />

      <TestimonialsCarousel {...testimonialsSettings}>
        <div>
          <p>
            "Eltons Christian School has changed my life. The teachers are
            amazing!"
          </p>
        </div>
        <div>
          <p>
            "I love the environment and the opportunities to grow academically."
          </p>
        </div>
        <div>
          <p>
            "The best decision I ever made was joining Eltons Christian School."
          </p>
        </div>
      </TestimonialsCarousel>

      <Section reverse={false} data-aos="fade-right">
        <div>
          <h2>Admissions</h2>
          <p>
            Our admissions process is simple and welcoming. Contact us today to
            find out how you can join our growing family.
          </p>
        </div>
        <img src="../src/assets/images/car2.jpg" alt="Admissions" />
      </Section>
      <Sections>
        {" "}
        <Contact />
      </Sections>
    </Container>
  )
}

export default Home
