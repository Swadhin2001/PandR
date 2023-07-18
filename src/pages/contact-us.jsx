import React from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import header_image from '../assets/contactus-banner.jpg'

function Contact_us() {
  return (
    <div>
      <Header imageUrl = "	https://www.pandr.in/wp-content/uploads/2020/07/wwu-header.jpg" heading = "Contact Us" about = "contact us" color = "white"/>
      <Elementor_widget_wrap
        about1 = "Consulting"
        about2 = "Accounting"
        about3 = "Assurance"
        about4 = "Tax"
      />
      <Footer/>
    </div>
  )
}

export default Contact_us