import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
       <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<><Navbar /><Home/></>}></Route>
      <Route path='/add'element={<><Navbar /><Add/></>}></Route>
       </Routes>
    </>
  )
}

export default App
