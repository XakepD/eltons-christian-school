import React from "react"
import styled from "styled-components"

const MapContainer = styled.div`
  margin: 2rem 0;
  text-align: center;

  iframe {
    width: 100%;
    max-width: 100vw;
    height: 400px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1.5s;
  }
`
const Maps = () => {
  return (
    <MapContainer>
      <h2>Find Us</h2>
      <iframe
        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=eltons%20&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        allowFullScreen=""
        loading="lazy"
        title="School Location"
      ></iframe>
    </MapContainer>
  )
}

export default Maps
