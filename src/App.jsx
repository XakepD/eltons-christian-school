import "./App.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Gallery from "./pages/Gallery"
import Admissions from "./pages/Admissions"
import Home from "./pages/Home"
import Curriculum from "./pages/Curriculum"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ToGallery from "./pages/ToGallery"
import AdminLogin from "./pages/admin/AdminLogin"

// Layout component to conditionally render Navbar and Footer
const Layout = ({ children, hideNavbarFooter }) => {
  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route
          path="/"
          element={
            <Layout hideNavbarFooter={false}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout hideNavbarFooter={false}>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout hideNavbarFooter={false}>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout hideNavbarFooter={false}>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/admissions"
          element={
            <Layout hideNavbarFooter={false}>
              <Admissions />
            </Layout>
          }
        />
        <Route
          path="/curriculum"
          element={
            <Layout hideNavbarFooter={false}>
              <Curriculum />
            </Layout>
          }
        />
        <Route
          path="/galleryc"
          element={
            <Layout hideNavbarFooter={false}>
              <ToGallery />
            </Layout>
          }
        />

        {/* Route without Navbar and Footer */}
        <Route
          path="/admin-login"
          element={
            <Layout hideNavbarFooter={true}>
              <AdminLogin />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
