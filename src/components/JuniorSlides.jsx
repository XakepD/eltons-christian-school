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
  margin: 2rem 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`

const Slide = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    rgba(26, 82, 118, 0.3),
    rgba(26, 82, 118, 0.7)
  );
  text-align: center;
  color: ${theme.white};
  padding: 2rem;
  box-sizing: border-box;

  h1 {
    font-size: 3rem;
    font-family: ${theme.fonts.secondary};
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    color: ${theme.secondary};
    animation: bounceIn 1s ease;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    font-family: ${theme.fonts.primary};
    max-width: 600px;
    margin: 0 auto 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    animation: fadeIn 1.5s ease;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1.1rem;
    }
  }

  button {
    margin-top: 1rem;
    padding: 0.8rem 2.5rem;
    font-size: 1.1rem;
    font-family: ${theme.fonts.secondary};
    font-weight: 600;
    border: none;
    background: ${theme.accent};
    color: ${theme.white};
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: pulse 2s infinite;

    &:hover {
      background: ${theme.secondary};
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      animation: none;
    }
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1.5rem;
    line-height: 1.3;
  }
`

const JuniorSlides = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  }

  return (
    <CarouselContainer>
      <Slider {...carouselSettings}>
        <Slide>
          <img src="../src/assets/images/early.jpg" alt="Junior Students" />
          <Overlay>
            <h1>Welcome to the Junior Section</h1>
            <p>A place where learning is fun and exciting</p>
          </Overlay>
        </Slide>
        <Slide>
          <img src="../src/assets/images/car3.jpg" alt="Creative Activities" />
          <Overlay>
            <h1>Welcome to the Junior Section</h1>
            <p>Where creativity and imagination flourish</p>
            <button>Discover More</button>
          </Overlay>
        </Slide>
        <Slide>
          <img src="../src/assets/images/DSC_1641.jpg" alt="Happy Children" />
          <Overlay>
            <h1>Welcome to the Junior Section</h1>
            <p>Nurturing each child's unique potential</p>
          </Overlay>
        </Slide>
      </Slider>
    </CarouselContainer>
  )
}

export default JuniorSlides
