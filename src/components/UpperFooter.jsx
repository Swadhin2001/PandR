import React from 'react'
import image from '../assets/Footer-image.jpg'
import Link from 'next/link'

function UpperFooter() {
  return (
    <div className='container-1200'>
      <div className="row ">
        <div className="col-md-4 footer-image" style={{ "backgroundImage": `url(${image.src})` }}>
        </div>
        <div className="col-md-8 footer-button mobile-version-footer" >
          <Link href = "/contact-us">
            <button style={{ "fontWeight": "600", "fontSize": "18px" }} className='px-4 py-2 footer-btn'>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpperFooter
