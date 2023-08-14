import React from 'react'

function Image_left(props) {
  return (
    <div className='container-1200'>
        <div className="row row-odd">
            <div className="col-md-6 body-right-image-about about-mobile-space p-0" >
              <div className='image-about-right'>
                <h4 className='pb-3 body-image-h4' >{props.heading}</h4>
                <p className='pb-2 body-image-p'>{props.about}</p>
              </div>
            </div>
            <div className="col-md-6 body-image-right p-0" style = {{"backgroundImage": `url(${props.image.src})`}}>
            </div>
        </div>
    </div>
  )
}

export default Image_left
