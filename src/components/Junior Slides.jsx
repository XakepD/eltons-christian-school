import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CarouselContainer = styled.div`
  position: relative;
  box-sizing: border-box;
`

const Slide = styled.div`
  position: relative;
  height: 300px;
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
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  color: white;
  padding: 3rem;
  box-sizing: border-box;
  line-height: 0.5;

  h2 {
    font-size: 3rem;
    animation: fadeInDown 1s;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    animation: fadeInUp 1s;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
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
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    line-height: 1.2;
  }
`

const JuniorSlides = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <CarouselContainer>
      <Slider {...carouselSettings}>
        <Slide>
          <img src="../src/assets/images/early.jpg" alt="Junior Section 1" />
          <Overlay>
            <h1>Welcome to the Junior Section</h1>
            <p>A place where learning is fun</p>
          </Overlay>
        </Slide>
        <Slide>
          <img src="../src/assets/images/car3.jpg" alt="Slide 2" />
          <Overlay>
            <h1>Welcome to the Junior Section</h1>
            <p>A place where creativity is encouraged</p>
          </Overlay>
        </Slide>
        <Slide>
          <img src="../src/assets/images/car3.jpg" alt="Slide 3" />
          <Overlay>
            <h1>Welcome to the Junior Section</h1>
            <p>A place where every child is special!</p>
          </Overlay>
        </Slide>
        <Slide>
          <img src="../src/assets/images/early.jpg" alt="Slide 4" />
          <Overlay>
            <h2>Join Our Vibrant Community</h2>
            <p>Where Learning Meets Faith</p>
            <button>Enroll Now</button>
          </Overlay>
        </Slide>
        <Slide>
          <img src="../src/assets/images/DSC_1641.jpg" alt="Slide 5" />
          <Overlay>
            <h2>Join Our Vibrant Community</h2>
            <p>Where Learning Meets Faith</p>
            <button>Enroll Now</button>
          </Overlay>
        </Slide>
      </Slider>
    </CarouselContainer>
  )
}

export default JuniorSlides
