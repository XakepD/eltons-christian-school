import React from "react"
import "./FloatingButton.css" // We'll create this next

const FloatingButton = ({ onClick, position = "bottom-right" }) => {
  return (
    <button
      className={`floating-button ${position}`}
      onClick={onClick}
      aria-label="Floating action button"
    >
      Message Us on Whatsapp
    </button>
  )
}

export default FloatingButton
