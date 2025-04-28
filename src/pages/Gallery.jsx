import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"
import { FaArrowLeft, FaArrowRight, FaTimes, FaDownload } from "react-icons/fa"
import { saveAs } from "file-saver"

const Container = styled.div``

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: url("../src/assets/images/banner.jpg") no-repeat center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;

  h1 {
    font-size: 2.5rem;
    animation: fadeInDown 1.5s;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    animation: fadeInUp 1.5s;
  }
`

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  padding: 4rem;
`

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 500px;
  height: auto;
  max-height: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
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
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 10px;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #07611c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #064d14;
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
  color: white;
  cursor: pointer;

  &:hover {
    color: #ff0000;
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
  color: white;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.5);

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

const Gallery = () => {
  const { slug } = useParams()
  const [images, setImages] = useState([])
  const [galleryTitle, setGalleryTitle] = useState("")
  const [galleryDescription, setGalleryDescription] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(null)

  useEffect(() => {
    axios(`http://127.0.0.1:8000/image/${slug}/`)
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
  }

  const closeModal = () => {
    setCurrentImageIndex(null)
  }

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }
  const downloadImage = () => {
    const imageUrl = `http://127.0.0.1:8000/${images[currentImageIndex].image}`
    const fileName = `image-${currentImageIndex + 1}.jpg` // Set the default filename
    saveAs(imageUrl, fileName) // Use file-saver to download the image
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
              src={`http://127.0.0.1:8000/${image.image}`}
              alt={image.gallery}
              onClick={() => openModal(index)}
            />
          </ImageCard>
        ))}
      </GalleryContainer>

      {/* Modal Popup */}
      {currentImageIndex !== null && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal} />
            <img
              src={`http://127.0.0.1:8000/${images[currentImageIndex].image}`}
              alt={images[currentImageIndex].gallery}
            />
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
