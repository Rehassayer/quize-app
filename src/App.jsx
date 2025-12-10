
import React from 'react'
import Login from './Components/Login/login'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './Auth/ProtectedRoutes'
import Quize from './Components/Quize/Quize'
import { AuthProvider } from './Auth/AuthContext'
const App = () => {
  return (
    <AuthProvider>

    <BrowserRouter>
    <Routes>
    <Route path= "/" element={<Login/>}/>
    <Route path= "/login" element={<Login/>}/>
    <Route path= "/home" element={
      <ProtectedRoutes>
        <Quize />
      </ProtectedRoutes>
    }/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
