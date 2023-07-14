import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

function Comp1(props) {
  return (
    <div className='navbarBody'>
      <Image
        src = {props.image}
        alt = ""
        style={{"width":"100%", "height": "89%" , "position": "absolute" ,"top":"0", "animation": "transitionIn 0.6s"}}
      />
     <Navbar/>
      <div className="details" style = {{"color": `${props.color}`}}>
        <h1 style = {{"fontWeight":"600", "fontSize": "48px"}}>{props.heading}</h1>
        <p style = {{"fontWeight":"600", "fontSize": "24px"}}>{props.about}</p>
      </div>
    </div>
  )
}

export default Comp1
