import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react"
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
const GalleryLinks = styled.div``
const Gall = styled.div``
const ToGallery = () => {
  const [galleries, setGallery] = useState([])

  useEffect(() => {
    axios("https://eltonsapi.onrender.com/gallery/")
      .then((response) => {
        setGallery(response.data)
      })
      .catch((error) => {
        console.error("Error fetching galleries:", error)
      })
  }, [])
  return [
    <Container>
      <GalleryLinks>
        {galleries.map((gallery) => (
          <Gall key={gallery.id}>
            <a href="/gallery">{gallery.title}</a>
          </Gall>
        ))}
      </GalleryLinks>
    </Container>,
  ]
}

export default ToGallery
