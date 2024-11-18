import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Add from './components/Add'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
       <Route path='/' element={<Login/>}></Route>
       {/* <Route element={<PrivateRoute/>}/> */}
      <Route path='/home' element={<><Navbar /><Home/></>}></Route>
      <Route path='/add'element={<><Navbar /><Add/></>}></Route><Route/>
       </Routes>
    </>
  )
}

export default App
