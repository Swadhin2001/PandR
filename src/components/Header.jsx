import React from 'react'
import Navbar from './Navbar'
import Navbar_new from './Navbar_new'

function Header(props) {
  return (
    <div className='navbarBody' style = {{"backgroundImage" : `url(${props.image.src})`}}>
     <Navbar/>
     {/* <Navbar_new></Navbar_new> */}
      <div className="details details-mobile" style = {{"color": `${props.color}`}}>
        <h1 className='header-heading'>{props.heading}</h1>
        <p style = {{"fontWeight":"600", "fontSize": "24px"}} className='header-about'>{props.about}</p>
      </div>
    </div>
  )
}

export default Header
