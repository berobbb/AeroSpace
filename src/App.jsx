import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './Components/NavBar/Navbar'
import { NewsLetter } from './Components/NewsLetter/NewsLetter'
import { About } from './Components/About/About'
import { Aviation } from './Components/Aviation/Aviation'
import { AstroPhysics } from './Components/AstroPhysics/AstroPhysics'
import { SpaceExploration } from './Components/SpaceExploration/SpaceExploration'
import { Defence } from './Components/Defence/Defence'
import { IndianOrganization } from './Components/IndianOrganization/IndianOrganization'
import { Reviews } from './Components/Review/Reviews'

function App() {

  return (
    <>
    <NavBar/>
    <About/>
    <Aviation/>
    <AstroPhysics/>
    <SpaceExploration/>
    <Defence/>
    <IndianOrganization/>
    <Reviews/>
    <NewsLetter/>
    </>
  )
}

export default App
