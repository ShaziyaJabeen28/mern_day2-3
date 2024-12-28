import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import Tab from './components/Tab'
import StateBasic from './components/StateBasic'
import Counter from './components/Counter'
import Rav from './components/Rav'
import Api from './components/Api'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <h1>WELCOME TO HOME</h1>
      <h2>NICE TO MEET U</h2>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/state" element={<StateBasic />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/rav" element={<Rav />} />
        <Route path="/api" element={<Api />} />
        <Route path="/pro" element={<Product />} />
      </Routes>
    
    </>
  )
}

export default App
