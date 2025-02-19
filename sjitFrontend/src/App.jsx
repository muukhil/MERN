import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/Components/Functional_Components/Home'
import About from './assets/Components/Functional_Components/About'
import Gallery from './assets/Components/Functional_Components/Gallery'
import Signup from './assets/Components/Functional_Components/Signup'
import Contact from './assets/Components/Functional_Components/Contact'
import NavBar from './assets/Components/Functional_Components/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <hr />
      <Home />
      <hr />
      <About />
      <hr />
      <Gallery />
      <hr />
      <Signup />
      <hr />
      <Contact />
    </div>
  )
}

export default App
