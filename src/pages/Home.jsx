import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AOS from "aos"
import "aos/dist/aos.css"
import {
  FaChalkboardTeacher,
  FaChild,
  FaBook,
  FaSmile,
  FaCross,
  FaUsers,
  FaHeart,
} from "react-icons/fa"
import Welcome from "../components/Welcome"
import Slides from "../components/Slides"
import Contact from "../components/Contact"
import MiniGallery from "../components/MiniGallery"
import { useEffect } from "react"
import FloatingButton from "../components/FloatingButton"

// Theme variables
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
  overflow-x: hidden !important;
`

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  background-color: ${theme.white};
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${theme.primary};
  margin-bottom: 3rem;
  position: relative;
  font-family: ${theme.fonts.secondary};

  span {
    color: ${theme.white};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: ${theme.secondary};
  }
`

const WhyChooseUsSection = styled.section`
  background: linear-gradient(rgba(26, 82, 118, 0.8), rgba(26, 82, 118, 0.9)),
    url("../src/assets/images/car2.jpg") no-repeat center center;
  background-size: cover;
  color: ${theme.white};
  padding: 4rem 2rem;
  margin: 3rem 0;
  position: relative;

  @media (max-width: ${theme.breakpoints.sm}) {
    background: linear-gradient(rgba(26, 82, 118, 0.8), rgba(26, 82, 118, 0.9)),
      url("../src/assets/images/chse.jpg");
    background-size: center;
    background-position: center;
    background-repeat: no-repeat;
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    font-size: 2.5rem;
    color: ${theme.secondary};
    flex-shrink: 0;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-family: ${theme.fonts.secondary};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    font-family: ${theme.fonts.primary};
  }
`

const LevelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const LevelCard = styled.div`
  background: ${theme.white};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 130px;
    object-fit: center;
    margin-bottom: 1rem;
    border-radius: 4px;

    @media (max-width: ${theme.breakpoints.sm}) {
      height: 200px;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${theme.secondary};
  }

  h3 {
    color: ${theme.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: ${theme.fonts.secondary};
  }

  p {
    color: ${theme.text};
    line-height: 1.6;
    font-family: ${theme.fonts.primary};
  }
`

const MissionVisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const MissionVisionCard = styled.div`
  background: ${theme.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-left: 5px solid ${theme.secondary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: ${theme.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: ${theme.fonts.secondary};
  }

  p {
    color: ${theme.text};
    line-height: 1.6;
    font-family: ${theme.fonts.primary};
  }
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 3rem 0;

  img {
    width: 100%;
    height: 180px;
    object-fit: center;
    border-radius: 8px;
    transition: transform 0.3s ease;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    @media (max-width: ${theme.breakpoints.sm}) {
      height: 220px;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const TestimonialSection = styled.section`
  background: ${theme.primary};
  color: ${theme.white};
  padding: 4rem 2rem;
  margin: 3rem 0;
  text-align: center;
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }

  p {
    font-style: italic;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .author {
    font-weight: bold;
    color: ${theme.secondary};
  }

  .role {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Experienced Teachers",
      description:
        "Our teachers are highly qualified and dedicated to nurturing every child's potential.",
    },
    {
      icon: <FaChild />,
      title: "Child-Centered Learning",
      description:
        "We focus on creating a safe and engaging environment for every child to thrive.",
    },
    {
      icon: <FaBook />,
      title: "Comprehensive Curriculum",
      description:
        "Our curriculum is designed to foster academic excellence and creativity.",
    },
    {
      icon: <FaCross />,
      title: "Faith-Based Education",
      description:
        "We integrate Christian values into all aspects of learning.",
    },
    {
      icon: <FaUsers />,
      title: "Strong Community",
      description:
        "We foster a caring community where students feel valued and supported.",
    },
    {
      icon: <FaHeart />,
      title: "Character Development",
      description:
        "We emphasize the development of Christ-like character and integrity.",
    },
  ]

  const levels = [
    {
      title: "Early Years",
      description:
        "Nursery & Kindergarten – Building the foundation through play, care, and discovery.",
      image: "../src/assets/images/early.jpg",
    },
    {
      title: "Primary School",
      description: "Developing skills in literacy, numeracy, and curiosity.",
      image: "../src/assets/images/primary.jpg",
    },
    {
      title: "Junior Secondary",
      description: "Cultivating deeper learning and character.",
      image: "../src/assets/images/junior.jpg",
    },
    {
      title: "Senior Secondary",
      description: "Preparing for higher education and the world beyond.",
      image: "../src/assets/images/senior.jpg",
    },
  ]

  const testimonials = [
    {
      quote:
        "This school has provided an excellent environment for my child's growth both academically and spiritually.",
      author: "Mrs. Johnson",
      role: "Parent",
    },
    {
      quote:
        "The teachers are dedicated and truly care about each student's success.",
      author: "Mr. Thompson",
      role: "Parent",
    },
    {
      quote:
        "I've seen tremendous growth in my child's confidence and love for learning since joining Eltons.",
      author: "Mrs. Williams",
      role: "Parent",
    },
  ]

  const galleryImages = [
    "../src/assets/images/car1.jpg",
    "../src/assets/images/sch.jpg",
    "../src/assets/images/car3.jpg",
    "../src/assets/images/car4.jpg",
    "../src/assets/images/car5.jpg",
    "../src/assets/images/gallery6.jpg",
  ]

  return (
    <Container>
      <Slides />
      <Welcome />

      {/* Mission & Vision Section */}
      <Section>
        <SectionTitle>Our Mission & Vision</SectionTitle>
        <MissionVisionGrid>
          <MissionVisionCard data-aos="fade-right">
            <h3>Our Mission</h3>
            <p>
              We are committed to partnering with parents to educate the minds
              and nurture the hearts of learners for the glory of God in a
              Christ-centered environment.
            </p>
          </MissionVisionCard>
          <MissionVisionCard data-aos="fade-left">
            <h3>Our Vision</h3>
            <p>
              To see lives transformed by the power of the gospel of Jesus
              Christ through Christian Education.
            </p>
          </MissionVisionCard>
        </MissionVisionGrid>

        {/* Additional Images */}
        <ImageGrid>
          {galleryImages.slice(0, 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`School activity ${index + 1}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            />
          ))}
        </ImageGrid>
      </Section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection>
        <SectionTitle>
          <span>Why Choose Eltons Christian School?</span>
        </SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {feature.icon}
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </WhyChooseUsSection>

      {/* School Levels Section */}
      <Section>
        <SectionTitle>Our School Levels</SectionTitle>
        <LevelsGrid>
          {levels.map((level, index) => (
            <LevelCard
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={level.image} alt={level.title} style={{}} />
              <h3>{level.title}</h3>
              <p>{level.description}</p>
            </LevelCard>
          ))}
        </LevelsGrid>
      </Section>

      {/* Testimonials Section */}
      <TestimonialSection>
        <SectionTitle>
          <span>What Parents Say</span>
        </SectionTitle>
        <TestimonialGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p>"{testimonial.quote}"</p>
              <div className="author">{testimonial.author}</div>
              <div className="role">{testimonial.role}</div>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialSection>

      {/* Gallery Section */}
      <Section>
        <SectionTitle>School Life</SectionTitle>
        <ImageGrid>
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`School life ${index + 1}`}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            />
          ))}
        </ImageGrid>
      </Section>

      <MiniGallery />

      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Contact />
      </Section>
      <a
        href="https://wa.me/+2348036702706"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FloatingButton />
      </a>
    </Container>
  )
}

export default Home
