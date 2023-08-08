import React from 'react'
import map from '@/assets/map.png'
import Image from 'next/image'
function Map() {
  return (
    <div>
      <div className="card rounded-0 border-0" style={{"width": "570px", "height": "440px"}}>
        <Image src={map} className="card-img-top" alt="..." style={{"objectFit": "cover", "height": "250px"}}/>
         <div className="py-3">
          <div className="card-body bg-black text-white text-center">
            <h4 className="card-text map-h4">Prakash and Rajaguru</h4>
            <p className="card-text map-p">185/7, 2nd Floor, Chandra Plaza <br/> 8th F Main Road, 26th Cross <br/> Chandra Plaza, Jayanagar 3rd Block <br/> Bangalore – 560011, Karnataka, India <br/> Phone: 91-80-26538257 <br/> Email: start@pandr.in</p>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Map
