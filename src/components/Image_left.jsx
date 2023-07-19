import React from 'react'
import Image from 'next/image'

function Image_left(props) {
  return (
    <div className='container'>
        <div className="row ">
            <div className="col col-md-6 body-image-left" style = {{"backgroundImage": `url(${props.image.src})`}}>
            </div>
            <div className="col col-md-6 body-left-image-about" >
              <div className='mx-4 p-2'>
                <h4 style = {{"fontWeight": "600", "fontSize": "24px"}} className='pb-3'>{props.heading}</h4>
                <p style = {{"fontWeight":"400", "fontSize": "15px"}} >{props.about}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Image_left
