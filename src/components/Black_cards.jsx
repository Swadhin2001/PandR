import React from 'react'
import Link from 'next/link'


function Black_cards() {
  return (
    <div className=" d-flex justify-content-center black-mobile-space d-flex justify-content-center"  >
      <div className="container black-cards px-5 mx-5">
          <div className='row elementor-container '>
              <Link href = "/consulting" className='col-md-3 black-cards-container'>
                <p className='text-center m-0' style = {{"fontSize": "16px", "fontWeight": "400", "lineHeight": "20px"}}>Consulting</p>
              </Link>
              <Link href = "/accounting" className='col-md-3  black-cards-container'>
              <p className='text-center m-0' style = {{"fontSize": "16px", "fontWeight": "400", "lineHeight": "20px"}}>Accounting</p>
              </Link>
              <Link href = "/assurance" className='col-md-3 black-cards-container'>
              <p className='text-center m-0' style = {{"fontSize": "16px", "fontWeight": "400", "lineHeight": "20px"}}>Assurance</p>
              </Link>
              <Link href = "/tax" className='col-md-3 black-cards-container'>
              <p className='text-center m-0' style = {{"fontSize": "16px", "fontWeight": "400", "lineHeight": "20px"}}>Tax</p>
              </Link>              
          </div>
      </div>
    </div>
  )
}

export default Black_cards
