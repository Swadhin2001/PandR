import React from 'react'
import Navbar from './Navbar'

function Header(props) {
  return (

    <>
      <Navbar/>
      <div className='herosection' style = {{"backgroundImage" : `url(${props.image.src})`}}>
        <div className="details details-mobile container-1200" style = {{"color": `${props.color}`}}>
          <h1 className='header-heading m-0'>{props.heading}</h1>
          <p className='header-about'>{props.about}</p>
        </div>
      </div>
    </>
  )
}

export default Header
