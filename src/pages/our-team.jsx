import React from 'react'
import Header from '../components/Header'
import header_image from '../assets/team-banner.jpg'
import Footer from '@/components/Footer'
import Our_team_body from '@/components/Our_team_body'
import Black_cards from '@/components/Black_cards'

function Our_team() {
  return (
    <>
      <Header image = {header_image} heading = "Providing support you deserve" about = "leading from the front to deliver quality & expertise" color = "white"/>
      <Black_cards/>
      <Our_team_body/>
      <Footer/>
    </>
  )
}

export default Our_team