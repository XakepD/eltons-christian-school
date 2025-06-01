import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaDownload,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa"
import { saveAs } from "file-saver"

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
  font-family: ${theme.fonts.primary};
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(rgba(26, 82, 118, 0.8), rgba(26, 82, 118, 0.9)),
    url("../src/assets/images/banner.jpg") no-repeat center center;
  background-size: cover;
  color: ${theme.white};
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    font-family: ${theme.fonts.secondary};
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 250px;
  height: 200px;
  max-height: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 120px;
    max-height: 150px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
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
  background: #ffffff53;
  padding: 2rem;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  min-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;

  img {
    max-width: 100%;
    max-height: 60vh;
    border-radius: 10px;
    margin-bottom: 1rem;
    transform: scale(${(props) => props.zoom});
    transition: transform 0.3s ease-in-out;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: ${theme.primary};
    color: ${theme.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    z-index: 2000;

    &:hover {
      background-color: ${theme.secondary};
      color: ${theme.primary};
    }
  }
`

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  color: ${theme.white};
  cursor: pointer;

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
  font-size: 2rem;
  color: ${theme.white};
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.5);

  &:hover {
    color: ${theme.secondary};
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`

const ZoomControls = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  button {
    background-color: ${theme.primary};
    color: ${theme.white};
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: ${theme.secondary};
      color: ${theme.primary};
    }
  }
`

const Gallery = () => {
  const { slug } = useParams()
  const [images, setImages] = useState([])
  const [galleryTitle, setGalleryTitle] = useState("")
  const [galleryDescription, setGalleryDescription] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(null)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    axios(`https://eltonsapi.onrender.com/image/${slug}/`)
      .then((response) => {
        setImages(response.data.images)
        setGalleryTitle(response.data.gallery_title)
        setGalleryDescription(response.data.gallery_description)
      })
      .catch((error) => {
        console.error("Error fetching gallery images:", error)
      })
  }, [slug])

  const openModal = (index) => {
    setCurrentImageIndex(index)
    setZoom(1) // Reset zoom when opening a new image
  }

  const closeModal = () => {
    setCurrentImageIndex(null)
  }

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
    setZoom(1) // Reset zoom when switching images
  }

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
    setZoom(1) // Reset zoom when switching images
  }

  const downloadImage = () => {
    const imageUrl = `https://eltonsapi.onrender.com/${images[currentImageIndex].image}`
    const fileName = `image-${currentImageIndex + 1}.jpg` // Set the default filename
    saveAs(imageUrl, fileName) // Use file-saver to download the image
  }

  const zoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3)) // Limit zoom to 3x
  }

  const zoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1)) // Limit zoom to 1x
  }

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <h1>{galleryTitle || "Gallery"}</h1>
        <p>
          {galleryDescription ||
            "Explore moments captured at Eltons Christian School"}
        </p>
      </Header>

      {/* Gallery Section */}
      <GalleryContainer>
        {images.map((image, index) => (
          <ImageCard key={image.id}>
            <Image
<<<<<<< HEAD
              src={`https://eltonsapi.onrender.com/${image.image}`}
=======
              src={`https://eltonschristianschool.onrender.com/${image.image}`}
>>>>>>> 2eacafbb4d9c30e1ec74d73194a2ff1f4cd768aa
              alt={image.gallery}
              onClick={() => openModal(index)}
            />
          </ImageCard>
        ))}
      </GalleryContainer>

      {/* Modal Popup */}
      {currentImageIndex !== null && (
        <Modal>
          <ModalContent zoom={zoom}>
            <CloseButton onClick={closeModal} />
            <img
<<<<<<< HEAD
              src={`https://eltonsapi.onrender.com/${images[currentImageIndex].image}`}
=======
              src={`https://eltonschristianschool.onrender.com/${images[currentImageIndex].image}`}
>>>>>>> 2eacafbb4d9c30e1ec74d73194a2ff1f4cd768aa
              alt={images[currentImageIndex].gallery}
            />
            <ZoomControls>
              <button onClick={zoomIn}>
                <FaSearchPlus /> Zoom In
              </button>
              <button onClick={zoomOut}>
                <FaSearchMinus /> Zoom Out
              </button>
            </ZoomControls>
            <button onClick={downloadImage}>
              <FaDownload /> Download
            </button>
            <ArrowButton className="left" onClick={showPreviousImage}>
              <FaArrowLeft />
            </ArrowButton>
            <ArrowButton className="right" onClick={showNextImage}>
              <FaArrowRight />
            </ArrowButton>
          </ModalContent>
        </Modal>
      )}
    </Container>
  )
}

export default Gallery
