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
function All() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/galleryc" element={<ToGallery />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default All
