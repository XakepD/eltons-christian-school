import React, { useState } from "react"
import styled, { ThemeProvider, keyframes } from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// Light and Dark Themes
const lightTheme = {
  background: "#f9f9f9",
  text: "#000",
  boxBackground: "#fff",
  buttonBackground: "#07611c",
  buttonHover: "#064d14",
}

const darkTheme = {
  background: "#121212",
  text: "#fff",
  boxBackground: "#1e1e1e",
  buttonBackground: "#1db954",
  buttonHover: "#1aa34a",
}

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s, color 0.3s;
  animation: ${fadeIn} 1s ease-in-out;
`

const LoginBox = styled.div`
  width: 400px;
  padding: 2rem;
  background-color: ${(props) => props.theme.boxBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background-color 0.3s;
  border-radius: 10px;
  animation: ${slideIn} 1s ease-in-out;
`

const Title = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  animation: ${fadeIn} 1.2s ease-in-out;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: ${fadeIn} 1.4s ease-in-out;
`

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background-color: ${(props) => props.theme.boxBackground};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s, color 0.3s;

  &:focus {
    border-color: ${(props) => props.theme.buttonBackground};
  }
`

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.theme.buttonBackground};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  animation: ${fadeIn} 1.6s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  animation: ${fadeIn} 1.8s ease-in-out;
`

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.boxBackground};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.buttonBackground};
    color: white;
  }
`

const FooterText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.text};
  animation: ${fadeIn} 2s ease-in-out;
`

const AdminLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const response = await axios.post("http://127.0.0.1:8000/admin-login/", {
        username,
        password,
      })

      if (response.status === 200) {
        // Redirect to the Django admin dashboard
        navigate("/admin")
      }
    } catch (err) {
      setError("Invalid username or password. Please try again.")
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <ToggleButton onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </ToggleButton>
        <LoginBox>
          <Title>Admin Login</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Login</Button>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </Form>
          <FooterText>
            © 2025 Eltons Christian School. All rights reserved.
          </FooterText>
        </LoginBox>
      </Container>
    </ThemeProvider>
  )
}

export default AdminLogin
