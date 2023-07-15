import React from 'react'
import Link from 'next/link'

function Elementor_widget_wrap(props) {
  return (
      <div className='elementor_widget_wrap d-flex justify-content-center  mx-4 align-middle'>
          <Link href = "/Consulting" >
            <h4 className='text-light' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading1}</h4>
            <p className='text-light py-2' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about1}</p>
          </Link>
          <Link href = '/Accounting'>
            <h4 className='text-light' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading2}</h4>
            <p className='text-light py-2' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about2}</p>
          </Link>
          <Link href = '/Assurance'>
            <h4 className='text-light' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading3}</h4>
            <p className='text-light py-2' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about3}</p>
          </Link>
          <Link href = '/Tax' >
            <h4 className='text-light' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading4}</h4>
            <p className='text-light py-2' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about4}</p>
          </Link>
      </div>
  )
}

export default Elementor_widget_wrap
