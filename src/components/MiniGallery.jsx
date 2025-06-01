import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import AOS from "aos"
import "aos/dist/aos.css"
import { FaTimes, FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa"
import ReactDOM from "react-dom"
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

const Container = styled.div`
  padding: 4rem 2rem;
  background: ${theme.light};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 2rem 1rem;
  }
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.primary};
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: ${theme.secondary};
    }
  }

  p {
    font-size: 1.2rem;
    font-family: ${theme.fonts.primary};
    color: ${theme.text};
    max-width: 700px;
    margin: 0 auto;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${theme.white};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    padding: 1rem;
  }
`

const Side = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .carousel {
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    @media (max-width: ${theme.breakpoints.md}) {
      max-width: 400px;
    }

    img {
      width: 100%;
      height: 350px;
      object-fit: contain;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
`

const ImageContainer = styled.div`
  flex: 1.5;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.3rem;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  div {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid ${theme.light};

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

      &:after {
        content: "View";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(26, 82, 118, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.white};
        font-family: ${theme.fonts.secondary};
        font-size: 1.2rem;
        font-weight: bold;
      }
    }

    img {
      width: 100%;
      height: 100px;
      object-fit: center;

      @media (max-width: ${theme.breakpoints.md}) {
        height: 100px;

        width: 150px;
      }
    }
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  position: relative;
  background: ${theme.white};
  padding: 2rem;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90vh;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  img {
    max-width: 100%;
    max-height: 60vh;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.8rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.primary};
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    font-family: ${theme.fonts.primary};
    color: ${theme.text};
    text-align: center;
    margin-bottom: 1.5rem;
  }
`

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
  color: ${theme.text};
  cursor: pointer;
  transition: color 0.3s ease;
  background: transparent;
  border: none;
  padding: 0.5rem;

  &:hover {
    color: ${theme.accent};
  }
`

const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  color: ${theme.white};
  cursor: pointer;
  border-radius: 50%;
  background: rgba(26, 82, 118, 0.7);
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: ${theme.primary};
    transform: translateY(-50%) scale(1.1);
  }

  &.left {
    left: 20px;
  }

  &.right {
    right: 20px;
  }
`

const DownloadButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-family: ${theme.fonts.secondary};
  border: none;
  background: ${theme.primary};
  color: ${theme.white};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${theme.secondary};
    color: ${theme.dark};
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

const MiniGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  const [galleries, setGalleries] = useState([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  useEffect(() => {
    axios("http://192.168.107.187:8000/random-images/")
      .then((response) => {
        setGalleries(response.data)
      })
      .catch((error) => {
        console.error("Error fetching galleries:", error)
      })
  }, [])

  const openModal = (index) => {
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? galleries.length - 1 : prevIndex - 1
    )
  }

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === galleries.length - 1 ? 0 : prevIndex + 1
    )
  }

  const downloadImage = () => {
    const selectedImage = galleries[selectedImageIndex]
    const link = document.createElement("a")
    link.href = selectedImage.image
    link.download = selectedImage.title || "downloaded-image.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  return (
    <Container id="gallery">
      <Header>
        <h1>School Gallery</h1>
        <p>Explore moments from our vibrant school community</p>
      </Header>

      <Wrapper>
        <Side>
          <Slider {...carouselSettings} className="carousel">
            {galleries.map((gallery) => (
              <div key={gallery.id}>
                <img src={gallery.image} alt={gallery.title} />
              </div>
            ))}
          </Slider>
        </Side>
        <ImageContainer>
          {galleries.map((gallery, index) => (
            <div key={gallery.id} onClick={() => openModal(index)}>
              <img
                src={gallery.image}
                alt={gallery.title}
                data-aos="zoom-in"
                data-aos-delay={gallery.id * 50}
              />
            </div>
          ))}
        </ImageContainer>
      </Wrapper>

      {selectedImageIndex !== null &&
        ReactDOM.createPortal(
          <Modal>
            <ModalContent>
              <CloseButton onClick={closeModal} />
              <ArrowButton className="left" onClick={showPreviousImage}>
                <FaArrowLeft />
              </ArrowButton>
              <img
                src={galleries[selectedImageIndex].image}
                alt={galleries[selectedImageIndex].title}
              />
              <h2>{galleries[selectedImageIndex].title}</h2>
              <p>{galleries[selectedImageIndex].description}</p>
              <ArrowButton className="right" onClick={showNextImage}>
                <FaArrowRight />
              </ArrowButton>
              <DownloadButton onClick={downloadImage}>
                <FaDownload /> Download
              </DownloadButton>
            </ModalContent>
          </Modal>,
          document.body
        )}
    </Container>
  )
}

export default MiniGallery
