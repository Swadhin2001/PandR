import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Image_left(props) {
  return (
    <div className='container'>
        <div className="row g-0">
            <div className="col col-md-6 " style={{"display": "flex","alignItems": "center"}}>
              <div className='mx-3 p-2 ' style={{}}>
                <h4 style = {{"fontWeight":"600", "fontSize": "24px"}} className='pb-3' >{props.heading}</h4>
                <p style = {{"fontWeight":"400", "fontSize": "15px"}} className='pb-2'>{props.about}</p>
                <Link href={`${props.link}`} className='text-decoration-none text-dark'>{props.linkText}</Link>
              </div>
            </div>
            <div className="col col-md-6" style = {{"backgroundImage": `url(${props.image})`, "backgroundPosition":"center center", "backgroundRepeat":"no-repeat", "backgroundSize": "cover", "height": "500px"}}>
            </div>
        </div>
    </div>
  )
}

export default Image_left
