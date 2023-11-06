import React from 'react'

function Image_left(props) {
  return (
    <>
      <div className='container-1200'>
          <div className="row g-0" >
              <div className="col-md-6 body-image-left p-0" style = {{"backgroundImage": `url(${props.image.src})`}}>
              </div>
              <div className="col-md-6 body-left-image-about about-mobile-space p-0" >
                <div className='image-about'>
                  <h4  className='pb-3 body-image-h4-left' >{props.heading}</h4>
                  <p  className='pb-2 body-image-p' >{props.about}</p>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Image_left
