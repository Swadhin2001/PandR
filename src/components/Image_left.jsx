import React from 'react'
import Image from 'next/image'

function Image_left(props) {
  return (
    <div className='container '>
        <div className="row g-0">
            <div className="col col-md-6 ">
              <Image
                src = {props.image}
                alt = ""
                className='img-fluid'
              />
            </div>
            <div className="col col-md-6 vertical-center">
              <div className='mx-5 px-3' >
                <h4 style = {{"fontWeight": "600", "fontSize": "24px"}}>{props.heading}</h4>
                <p style = {{"fontWeight":"400", "fontSize": "15px"}} >{props.about}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Image_left
