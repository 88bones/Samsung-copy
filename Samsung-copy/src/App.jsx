import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import ImageSlide from './Components/ImageSlide'
import image0 from './images/slider0.jpg'
import image1 from './images/slider1.jpeg'
import image2 from './images/slider2.png'
import image3 from './images/slider3.jpg'

function App() {

    const images=[image0,image1,image2,image3]

  return (
    <>
      <NavBar/>
      <ImageSlide images={images}/>
    </>
  )
}

export default App
