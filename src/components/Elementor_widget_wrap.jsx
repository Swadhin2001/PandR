import React from 'react'
import Link from 'next/link'

function Elementor_widget_wrap(props) {
  return (
    <div className="container elementor-widget-wrap">
      <div className='row elementor-container'>
          <Link href = "/consulting" className='col-md-3  elementor-container'>
            <h2 className='text-light pb-1' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading1}</h2>
            <p className='text-light m-0' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about1}</p>
          </Link>
          <Link href = '/accounting' className='col-md-3  elementor-container'>
            <h2 className='text-light pb-1' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading2}</h2>
            <p className='text-light m-0' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about2}</p>
          </Link>
          <Link href = '/assurance' className='col-md-3  elementor-container'>
            <h2 className='text-light pb-1' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading3}</h2>
            <p className='text-light m-0' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about3}</p>
          </Link>
          <Link href = '/tax' className='col-md-3 elementor-container'>
            <h2 className='text-light pb-1' style = {{"fontWeight":"600", "fontSize": "18px"}}>{props.heading4}</h2>
            <p className='text-light m-0' style = {{"fontWeight":"400", "fontSize": "15px"}}>{props.about4}</p>
          </Link>
      </div>
    </div>
  )
}

export default Elementor_widget_wrap
