import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

const CarouselContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 2rem;
`

const Slide = styled.div`
  position: relative;
  height: 500px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: ${theme.breakpoints.md}) {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: center;
    filter: brightness(0.7);
    transition: transform 5s ease;
  }

  &:hover img {
    transform: scale(1.05);
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
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  );
  text-align: center;
  color: ${theme.white};
  padding: 3rem;
  box-sizing: border-box;

  h2 {
    font-size: 4rem;
    font-family: ${theme.fonts.secondary};
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: fadeInDown 1s ease;
    color: ${theme.secondary};

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.8rem;
    font-family: ${theme.fonts.primary};
    max-width: 800px;
    margin: 0 auto 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    animation: fadeInUp 1s ease;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1rem;
    }
  }

  button {
    margin-top: 1rem;
    padding: 1rem 3rem;
    font-size: 1.2rem;
    font-family: ${theme.fonts.secondary};
    font-weight: 600;
    border: none;
    background: ${theme.accent};
    color: ${theme.white};
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    letter-spacing: 1px;
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1rem;
      padding: 1rem;
    }

    &:hover {
      background: ${theme.primary};
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 2rem;
    line-height: 1.3;
  }
`

const Slides = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
    pauseOnHover: false,
  }

  return (
    <CarouselContainer>
      <Slider {...carouselSettings}>
        <Slide>
          <img src="../src/assets/images/car1.jpg" alt="School Building" />
          <Overlay>
            <h2>Welcome to Eltons Christian School</h2>
            <p>Inspiring Excellence, Building Character</p>
          </Overlay>
        </Slide>
        <Slide>
          <img src="../src/assets/images/slide2.jpg" alt="Students Learning" />
          <Overlay>
            <h2>Empowering Future Leaders</h2>
            <p>Providing Quality Education for Over a Decade</p>
          </Overlay>
        </Slide>
        <Slide>
          <img src="../src/assets/images/car3.jpg" alt="School Community" />
          <Overlay>
            <h2>Join Our Vibrant Community</h2>
            <p>Where Learning Meets Faith</p>
          </Overlay>
        </Slide>
      </Slider>
    </CarouselContainer>
  )
}

export default Slides
