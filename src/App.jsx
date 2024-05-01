import React from 'react'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import EmployeeComponent from './components/EmployeeComponent'
import Contact from './components/contact'
function App() {

  return (
    <>
      <BrowserRouter>
      
        <HeaderComponent />

        <Routes>
          {/* Place the home route before the default route */}
          <Route path='/home' element={<Home />} />
          {/* Define other routes */}
          <Route path='/employees' element={<ListEmployeeComponent />} />
          <Route path='/add-employee' element={<EmployeeComponent />} />
          <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          
          {/* Default route */}
          <Route path='/*' element={<Home />} />
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
