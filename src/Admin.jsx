import React from "react"
import AdminLogin from "./pages/admin/AdminLogin"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const Admin = () => {
  return (
    <Router>
      <Routes>
     
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  )
}

export default Admin
