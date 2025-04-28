import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { FaTimes, FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa"
import ReactDOM from "react-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Container = styled.div`
  padding: 2rem 4rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #07611c;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
  background: black;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Side = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;

  .carousel {
    width: 100%;
    max-width: 400px;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`

const ImageContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;
  @media (max-width: 768px) {
    justify-content: center;
  }

  div {
    width: 150px;
    min-height: 150px;
    border: 1px solid #ccc;
    @media (max-width: 768px) {
      justify-content: center;
      width: 150px;
    }
    &:hover {
      cursor: pointer;
      border: 1px solid #07611c;
      transform: scale(1.05);
    }

    img {
      width: 100%;
      min-height: 100%;
      height: 150px;
      object-fit: cover;
    }
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 60vh;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #07611c;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    text-align: center;
  }
`

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  color: #555;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`

const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    color: #5cff7c;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`

const DownloadButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border: none;
  background: #07611c;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #064d14;
  }
`

const MiniGallery = () => {
  const [galleries, setGalleries] = useState([]) // State for gallery images
  const [selectedImageIndex, setSelectedImageIndex] = useState(null) // State for the selected image index

  useEffect(() => {
    axios("https://eltonsapi.onrender.com/random-images/") // Fetch galleries from the backend
      .then((response) => {
        setGalleries(response.data) // Assuming the backend returns a list of galleries
      })
      .catch((error) => {
        console.error("Error fetching galleries:", error)
      })
  }, [])

  const openModal = (index) => {
    setSelectedImageIndex(index) // Set the selected image index for the modal
  }

  const closeModal = () => {
    setSelectedImageIndex(null) // Close the modal
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
  }

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <h1>Mini Gallery</h1>
        <p>
          Explore our collection of beautiful moments captured at Eltons
          Christian School.
        </p>
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
              <img src={gallery.image} alt={gallery.title} />
            </div>
          ))}
        </ImageContainer>
      </Wrapper>

      {/* Modal Popup */}
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
          document.body // Render the modal at the root level of the DOM
        )}
    </Container>
  )
}

export default MiniGallery
