import React from 'react'
// import Image from 'next/image'
import Navbar from './Navbar'

function Header(props) {
  return (
    <div className='navbarBody' style = {{"backgroundImage" : `url(${props.imageUrl})`, "backgroundSize":"cover", "backgroundPosition":"bottom center"}}>
      {/* <Image
        src = {props.image}
        alt = ""
        style={{"width":"100%", "height": "89%" , "position": "absolute" ,"top":"0", "animation": "transitionIn 0.6s"}}
      /> */}
     <Navbar/>
      <div className="details" style = {{"color": `${props.color}`}}>
        <h1 style = {{"fontWeight":"600", "fontSize": "48px"}} className='m-0'>{props.heading}</h1>
        <p style = {{"fontWeight":"600", "fontSize": "24px"}}>{props.about}</p>
      </div>
    </div>
  )
}

export default Header
