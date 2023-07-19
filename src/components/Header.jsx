import React from 'react'
import Navbar from './Navbar'

function Header(props) {
  return (
    <div className='navbarBody' style = {{"backgroundImage" : `url(${props.image.src})`}}>
     <Navbar/>
      <div className="details" style = {{"color": `${props.color}`}}>
        <h1 className='header-heading'>{props.heading}</h1>
        <p style = {{"fontWeight":"600", "fontSize": "24px"}} className='header-about'>{props.about}</p>
      </div>
    </div>
  )
}

export default Header
