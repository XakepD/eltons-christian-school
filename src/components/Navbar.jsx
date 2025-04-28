import React, { useState } from "react"
import styled from "styled-components"
import "animate.css"
import { Link } from "react-router-dom"

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 6px double #000000;

  width: 100%;
  margin: 0;
  padding: 0rem 3rem;
  top: 0;
  left: 0;
  background-color: white;
  box-sizing: border-box;
  z-index: 1000;
  position: sticky;
  a {
    text-decoration: none;

    color: #07611c;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-wrap: wrap;
  }
`

const Logo = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: linear-gradient(to right, #07611c, red);
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: auto;
    height: 50px;
  }

  &:hover {
    color: #07611c;
  }
`

const NavLinks = styled.ul`
  display: flex;
  flex: 2;
  list-style: none;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    position: absolute;
    top: 60px; /* Position below the hamburger menu */
    left: 0;
    z-index: 999;
  }
`

const NavLink = styled.li`
  position: relative;

  a {
    text-decoration: none;
    color: #000000;
    font-size: 1rem;
    font-weight: 600;
    animation: swing 1s;
    transition: color 0.3s;

    &:hover {
      color: #07611c;
      animation: swing 1s;
    }
  }
`

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: none;
  flex-direction: column;

  ${NavLink}:hover & {
    display: flex;
  }

  a {
    color: black;
    padding: 0.3rem 0;
    font-size: 0.9rem;

    &:hover {
      color: #07611c;
    }
  }

  @media (max-width: 768px) {
    position: static;
    display: flex;
    background-color: transparent;
    padding: 0;

    a {
      color: black;
      font-size: 1rem;
    }
  }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: #000000;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Image = styled.img`
  width: 30px;
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false) // Close the menu when a link is clicked
  }

  return (
    <NavbarContainer>
      <a href="/">
        <Logo>
          <Image src="../src/assets/images/hlogo.png" alt="Logo" /> Eltons
          <br />
          Christian School
        </Logo>
      </a>
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <NavLink>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/about-us" onClick={closeMenu}>
            About Us
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/curriculum" onClick={closeMenu}>
            Curriculum
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/admissions" onClick={closeMenu}>
            Admissions
          </Link>
        </NavLink>
        <NavLink>
          <a href="#section" onClick={closeMenu}>
            Section
          </a>
          <Dropdown>
            <a href="/junior" onClick={closeMenu}>
              Junior
            </a>
            <a href="/senior" onClick={closeMenu}>
              Senior
            </a>
          </Dropdown>
        </NavLink>
        <NavLink>
          <Link to="/contact-us" onClick={closeMenu}>
            Contact Us
          </Link>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar
