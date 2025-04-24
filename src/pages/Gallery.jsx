import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

const Container = styled.div`
  padding: 2rem 6rem;
  background: url("../images/img6.jpg") no-repeat center center fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  backdrop-filter: blur(35px);
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #07611c;
    animation: fadeInDown 1.5s;
  }

  p {
    font-size: 1.2rem;
    color: #333;
    margin-top: 0.5rem;
    animation: fadeInUp 1.5s;
  }
`

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  padding: 2rem;
`

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 500px;
  height: auto;
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
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${ImageCard}:hover & {
    opacity: 1;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
  }
`

const Button = styled.a`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #07611c;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #064d14;
  }
`

const Gallery = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios("https://eltonsapi.onrender.com/images/")
      .then((response) => {
        setImages(response.data)
      })
      .catch((error) => {
        console.error("Error fetching gallery images:", error)
      })
  }, [])

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <h1>Gallery</h1>
        <p>Explore moments captured at Eltons Christian School.</p>
      </Header>

      {/* Gallery Section */}
      <GalleryContainer>
        {images.map((image) => (
          <ImageCard key={image.id}>
            <Image src={image.image} alt={image.gallery} />
            <ImageOverlay>
              <h3>{image.gallery}</h3>
              <p>Click to view full image</p>
              <Button
                href={image.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Image
              </Button>
            </ImageOverlay>
          </ImageCard>
        ))}
      </GalleryContainer>
    </Container>
  )
}

export default Gallery
