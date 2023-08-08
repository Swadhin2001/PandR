import React from 'react'
import Header from '../components/Header'
import header_image from '../assets/team-banner.jpg'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import Footer from '@/components/Footer'
import Our_team_body from '@/components/Our_team_body'

function Our_team() {
  return (
    <>
      <Header image = {header_image} heading = "Providing support you deserve" about = "leading from the front to deliver quality & expertise" color = "white"/>
      <Elementor_widget_wrap
        about1 = "Consulting"
        about2 = "Accounting"
        about3 = "Assurance"
        about4 = "Tax"
      />
      <Our_team_body/>
      <Footer/>
    </>
  )
}

export default Our_team