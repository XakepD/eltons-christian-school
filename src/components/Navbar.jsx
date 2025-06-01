import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
const theme = {
  primary: "#1a5276",
  secondary: "#d4ac0d",
  accent: "#e74c3c",
  light: "#f8f9fa",
  dark: "#343a40",
  text: "#333",
  white: "#ffffff",
}

const NavbarContainer = styled.nav`
  background-color: ${theme.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 2rem;
`

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    height: 50px;
    margin-right: 1rem;
  }

  .logo-text {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.5rem;
      color: ${theme.primary};
      margin: 0;
      line-height: 1.2;
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    p {
      font-size: 0.8rem;
      color: ${theme.text};
      margin: 0;
    }
  }
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    height: calc(100vh - 80px);
    top: 70px;
    flex-direction: column;
    background-color: ${theme.white};
    padding: 2rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: left 0.3s ease;
    z-index: 999;
  }
`

const NavItem = styled.li`
  position: relative;

  a {
    color: ${theme.text};
    text-decoration: none;
    font-weight: 600;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s ease;
    font-size: 0.8rem;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${theme.secondary};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${theme.primary};

      &::after {
        width: 100%;
      }
    }

    &.active {
      color: ${theme.primary};

      &::after {
        width: 100%;
      }
    }
  }
`

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: ${theme.primary};
    margin: 5px 0;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"};
    }
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    // Close menu when route changes
    closeMenu()
  }, [location])

  return (
    <NavbarContainer>
      <NavContent>
        <Logo to="/" onClick={closeMenu}>
          <img
            src="../src/assets/images/hlogo.png"
            alt="Eltons Christian School Logo"
          />
          <div className="logo-text">
            <h1>Eltons Christian School</h1>
            <p>Educating for Eternity</p>
          </div>
        </Logo>

        <MobileMenuButton
          isOpen={isOpen}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        <NavLinks isOpen={isOpen}>
          <NavItem>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/about-us"
              className={location.pathname === "/about-us" ? "active" : ""}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/curriculum"
              className={location.pathname === "/curriculum" ? "active" : ""}
              onClick={closeMenu}
            >
              Curriculum
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/junior"
              className={location.pathname === "/junior" ? "active" : ""}
              onClick={closeMenu}
            >
              Junior
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/senior"
              className={location.pathname === "/senior" ? "active" : ""}
              onClick={closeMenu}
            >
              Senior
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/gallery"
              className={location.pathname === "/gallery" ? "active" : ""}
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/admissions"
              className={location.pathname === "/admissions" ? "active" : ""}
              onClick={closeMenu}
            >
              Admissions
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/contact-us"
              className={location.pathname === "/contact-us" ? "active" : ""}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </NavItem>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  )
}

export default Navbar
