import React from 'react'
import Link from 'next/link'

function Elementor_widget_wrap(props) {
  return (
      <div className='elementor_widget_wrap d-flex justify-content-center p-1 mx-3 align-middle'>
          <a href = "/Consulting">
            <h4 className='text-light' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading1}</h4>
            <p className='text-light' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about1}</p>
          </a>
          <a href = '/Accounting'>
            <h4 className='text-light' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading2}</h4>
            <p className='text-light' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about2}</p>
          </a>
          <a href = '/Assurance'>
            <h4 className='text-light' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading3}</h4>
            <p className='text-light' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about3}</p>
          </a>
          <a href = '/Tax' >
            <h4 className='text-light' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading4}</h4>
            <p className='text-light' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about4}</p>
          </a>
      </div>
  )
}

export default Elementor_widget_wrap
