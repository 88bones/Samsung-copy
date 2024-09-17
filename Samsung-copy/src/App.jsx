import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import ImageSlide from './Components/ImageSlide'
import image0 from './images/slider0.jpg'
import image1 from './images/slider1.jpeg'
import image2 from './images/slider2.png'
import image3 from './images/slider3.jpg'
import ShopTab from './Components/ShopTab'


function App() {

    const images=[ 
      {url: image0, title: "AI is here", text: "Galaxy AI is the future.", buttonText: "Learn More"},
      {url: image1, title:"Save upto Rs.20000.", text: "QLED TVs clearer than ever.", buttonText: "Learn More"},
      {url: image2, title:"Build your home.",text: "Samsung EcoSytem is the only ecosystem.", buttonText: "Learn More"},
      {url: image3, title:"New innovation unlike some.",text: "Our new handheld devices.", buttonText: "Learn More"},
    ]
    
  return (
    <>
      <NavBar/>
      <ImageSlide images={images}/>
      <ShopTab/>
    </>
  )
}

export default App
