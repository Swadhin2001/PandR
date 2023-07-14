import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Image_left(props) {
  return (
    <div className='container'> 
        <div className="row g-0">
            <div className="col col-md-6 vertical-center">
              <div className='mx-5 px-3'>
                <h4 style = {{"fontWeight":"600", "fontSize": "24px"}} >{props.heading}</h4>
                <p style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about}</p>
                <Link href={`${props.link}`} className='text-decoration-none text-dark'>{props.linkText}</Link>
              </div>
            </div>
            <div className="col col-md-6">
              <Image
                src = {props.image}
                alt = ""
                className='img-fluid'
              />
              {console.log(props)}
            </div>
        </div>
    </div>
  )
}

export default Image_left
