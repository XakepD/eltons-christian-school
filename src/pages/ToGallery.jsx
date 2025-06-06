import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  padding: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 1rem;
    gap: 1rem;
    column-gap: 0.1rem;
  }
`

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #003111;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${ImageCard}:hover & {
    opacity: 1;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
  }
`

const CardContent = styled.div`
  padding: 1rem;
  text-align: center;

  h3 {
    font-size: 1.2rem;
    color: #07611c;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`

const ToGallery = () => {
  const [galleries, setGalleries] = useState([]) // Changed state name to "galleries"

  useEffect(() => {
    axios("https://eltonsapi.onrender.com/gallery/") // Fetch galleries from the backend
      .then((response) => {
        setGalleries(response.data) // Assuming the backend returns a list of galleries
      })
      .catch((error) => {
        console.error("Error fetching galleries:", error)
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
        {galleries.map((gallery) => (
          <ImageCard key={gallery.id}>
            <Image src={gallery.image} alt={gallery.name} />{" "}
            {/* Changed to "cover_image" */}
            <Link to={`/gallery/${gallery.slug}`}>
              <ImageOverlay>
                <h3>{gallery.name}</h3> {/* Display the gallery name */}
                <p>Click to explore gallery</p>
              </ImageOverlay>
            </Link>
            <CardContent>
              <h3>{gallery.name}</h3> {/* Display the gallery name */}
              <p>{gallery.description}</p>{" "}
              {/* Display the gallery description */}
            </CardContent>
          </ImageCard>
        ))}
      </GalleryContainer>
    </Container>
  )
}

export default ToGallery
