import React from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import Map from '@/components/Map'
import Form from '@/components/Form'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import header_image from '../assets/contactus-banner.jpg'

function Contact_us() {
  return (
    <>
      <Header image = {header_image} heading = "Contact Us" about = "contact us" color = "white"/>
      <Elementor_widget_wrap
        about1 = "Consulting"
        about2 = "Accounting"
        about3 = "Assurance"
        about4 = "Tax"
      />
      <div className="my-5">
        <div className="container-1200 d-flex justify-content-center">
          <div className="container-1140">
            <div className="row">
              <div className="col-md-6 my-3">
                <Form/>
              </div>
              <div className="col-md-6">
                <h4 className='text-center map-heading py-2'>Reach us at</h4>
                <Map/>
              </div>
            </div>
        </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact_us