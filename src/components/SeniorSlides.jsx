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
  justify-content: flex-end;
  align-items: flex-start;
  background: linear-gradient(
    to right,
    rgba(26, 82, 118, 0.7),
    rgba(26, 82, 118, 0.3)
  );
  text-align: left;
  color: ${theme.white};
  padding: 3rem;
  box-sizing: border-box;

  h1 {
    font-size: 3rem;
    font-family: ${theme.fonts.secondary};
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    color: ${theme.secondary};
    animation: slideInLeft 1s ease;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    font-family: ${theme.fonts.primary};
    max-width: 600px;
    margin-bottom: 1.5rem;
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
    border: 2px solid ${theme.secondary};
    background: transparent;
    color: ${theme.white};
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      background: ${theme.secondary};
      color: ${theme.primary};
      transform: translateX(10px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
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

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1.5rem;
    align-items: center;
    text-align: center;
    background: linear-gradient(
      to bottom,
      rgba(26, 82, 118, 0.7),
      rgba(26, 82, 118, 0.3)
    );

    button:hover {
      transform: translateY(-3px);
    }
  }
`

const SeniorSlides = () => {
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
          <img src="../src/assets/images/car1.jpg" alt="Senior Students" />
          <Overlay>
            <h1>Welcome to the Senior Section</h1>
            <p>Preparing students for academic success and leadership</p>
            <button>Learn More</button>
          </Overlay>
        </Slide>
        <Slide>
          <img src="../src/assets/images/car2.jpg" alt="Classroom" />
          <Overlay>
            <h1>Welcome to the Senior Section</h1>
            <p>Advanced learning in a supportive environment</p>
          </Overlay>
        </Slide>
        <Slide>
          <img src="../src/assets/images/senior.jpg" alt="Graduation" />
          <Overlay>
            <h1>Welcome to the Senior Section</h1>
            <p>Building the foundation for future success</p>
            <button>View Programs</button>
          </Overlay>
        </Slide>
      </Slider>
    </CarouselContainer>
  )
}

export default SeniorSlides
