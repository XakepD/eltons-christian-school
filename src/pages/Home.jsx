import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "animate.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Container = styled.div`
  background: #f5f5f5;
  font-family: "Segoe UI", sans-serif;
  color: #333;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const CarouselContainer = styled.div`
  position: relative;
`

const Slide = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  color: white;
  padding: 3rem;
  box-sizing: border-box;
  line-height: 0.5;

  h2 {
    font-size: 3rem;
    animation: fadeInDown 1s;
  }

  p {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    animation: fadeInUp 1s;
  }

  button {
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    border: none;
    background: #ff4c60;
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #e03e4f;
  }
`

const WelcomeAddress = styled.section`
  padding: 4rem 2rem;
  background: #07611c4e;
  color: white;
  display: flex;
  gap: 2rem;
  border-radius: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
  }

  div {
    max-width: 600px;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  padding: 3rem 6rem;
  gap: 2rem;
  background: white;
  flex-wrap: wrap;

  div {
    flex: 1;
  }

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const VideoContainer = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background: #f0f0f0;

  video {
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
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

const ContactContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 3rem 2rem;
  background: #e9f5ec;
`

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  label {
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background: #07611c;
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #064d14;
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
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

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
      <CarouselContainer>
        <Slider {...carouselSettings}>
          <Slide>
            <img src="../images/IMG_2306.jpeg" alt="Slide 1" />
            <Overlay>
              <h2>Welcome to Eltons Christian School</h2>
              <p>Inspiring Excellence, Building Character</p>
              <button>Enroll Now</button>
            </Overlay>
          </Slide>
          <Slide>
            <img src="../images/img6.jpg" alt="Slide 2" />
            <Overlay>
              <h2>Empowering Future Leaders</h2>
              <p>Providing Quality Education for Over 20 Years</p>
              <button>Enroll Now</button>
            </Overlay>
          </Slide>
          <Slide>
            <img src="../images/img1.jpg" alt="Slide 3" />
            <Overlay>
              <h2>Join Our Vibrant Community</h2>
              <p>Where Learning Meets Faith</p>
              <button>Enroll Now</button>
            </Overlay>
          </Slide>
        </Slider>
      </CarouselContainer>
      <WelcomeAddress data-aos="fade-up">
        <img src="../images/welcome.jpg" alt="Welcome" />
        <div>
          <h1>Welcome to Eltons Christian School</h1>
          <p>
            At Eltons Christian School, we are dedicated to nurturing young
            minds and inspiring excellence in every student. Our mission is to
            provide a holistic education that fosters academic achievement,
            spiritual growth, and personal development.
          </p>
        </div>
      </WelcomeAddress>

      {/* Mission Section */}
      <Section reverse={false} data-aos="fade-right">
        <div>
          <h2>Our Mission</h2>
          <p>
            We are committed to providing a nurturing environment where students
            can grow academically, spiritually, and socially. We aim to inspire
            excellence and foster a love for learning.
          </p>
        </div>
        <img src="../images/img6.jpg" alt="Mission" />
      </Section>

      <Section reverse={true} data-aos="fade-left">
        <div>
          <h2>About Us</h2>
          <p>
            Eltons Christian School has been a beacon of education and faith for
            over 20 years. Our programs support students from diverse
            backgrounds with quality learning experiences.
          </p>
        </div>
        <img src="../images/img3.jpg" alt="About Us" />
      </Section>
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
      <VideoContainer>
        <h2>Our Campus</h2>
        <video controls autoPlay loop muted>
          <source src="../images/cont.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>

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
        <img src="../images/img7.jpg" alt="Admissions" />
      </Section>

      <ContactContainer>
        <video
          controls
          autoPlay
          loop
          muted
          style={{ maxWidth: "500px", borderRadius: "10px" }}
        >
          <source src="../images/camp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <ContactForm>
          <h2>Contact Us</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </ContactForm>
      </ContactContainer>
    </Container>
  )
}

export default Home
