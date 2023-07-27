import React from 'react'
import Header from '../components/Header'
import header_image from '../assets/team-banner.jpg'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import Footer from '@/components/Footer'

function Our_team() {
  return (
    <body>
      <Header image = {header_image} heading = "Providing support you deserve" about = "leading from the front to deliver quality & expertise" color = "white"/>
      <Elementor_widget_wrap
        about1 = "Consulting"
        about2 = "Accounting"
        about3 = "Assurance"
        about4 = "Tax"
      />
      <Footer/>
    </body>
  )
}

export default Our_team