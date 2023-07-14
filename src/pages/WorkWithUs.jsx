import React from 'react'
import Header from '../components/Header'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import Body from '../components/Body'
import Header_image from '../assets/work-with-us-banner.jpg'
import banner_image1 from '../assets/We_welcome_you_to_be_part.jpg'
import banner_image2 from '../assets/Our mission for our employees is to accelerate their growth.jpg'
import banner_image3 from '../assets/At PandR, our highly competent articled trainees are the flag bearers of the firm.jpg'
import banner_image4 from '../assets/At PandR, our culture revolves around team work and open door policy.jpg'
import banner_image5 from '../assets/Come, join us in our exciting journey.jpg'
import Footer from '../components/Footer'

function WorkWithUs() {
  return (
    <div>
      <Header image = {Header_image} heading = "Come, Join Us." about = "together, lets make a difference" color = "white"/>
      <Elementor_widget_wrap about1 = "Consulting" about2 = "Accounting" about3 = "Assurance" about4 = "Tax"/>
      <Body image2 = {banner_image1} heading2 = "We welcome you to be part of our success story and to carry the legacy forward" about2 = "Over the years, we have had the opportunity & previlge to work with several global companies from across the world, helping them with consulting, audit and tax services. We have also worked with several domestic entrepreneurs, helping them with consulting, tax and accounting support. We dedicate our success to the holisitc contributions by our committed and dedicated employees. We welcome you to join our robust and energetic team, as we together continue to deliver successful engagements to our global and domestic clients, writing success stories for them, and in the process, creating highly gainful experience and a great learning opportunity to our employees."

      image3 = {banner_image2} heading3 = "Our mission for our employees is to accelerate their growth: we do this by" about3 = "Nurturing their professional aspirations and enabling career progression through increased responsibilities, greater rewards and enhanced prospects. Fostering knowledge management through a range of practices to identify, acquire, utilize and distribute knowledge to result in confidence enhancement, creativity and innovation; Identify, coach and mentor talent and stimulate higher levels of performance. Cultivating a vibrant & energetic culture to identify and groom leaders and inspire leadership abilities beyond the confines of hierarchies;"

      image4 = {banner_image3} heading4 = "At PandR, our highly competent articled trainees are the flag bearers of the firm" about4 = "In the last 10+ years, the firm has provided high quality of academic training with practical exposure to live client situations to over 150 articled trainees. Majority of them have gone on to qualify as young chartered accountants and are today well placed in the industry or have joined the big four. Some of them are doing extremely well in their areas of practice. Our articled trainees are given opportunities to hone their leadership, technical & interpersonal skills by being single point of contacts for most of the client engagements, under the guidance of qualified managers and partners. And we are proud to say that they are truly our flag bearers and continue to bring laurels to our firm."

      image5 = {banner_image4} heading5 = "At PandR, our culture revolves around team work and open door policy." about5 = "Unhesitatingly, we are happy to state that we are a small but a high performing and effective delivery team. We have created an atmosphere of mutual trust and belief. We follow an open door policy where seniors and juniors work in complete co-hesion, unity & bonhomie. We encourage each other to celebrate every success and introspect every failure. Our doors are strictly closed for office politics. We follow minimal policies & procedures and encourage self-governance"

      image6 = {banner_image5} heading6 = "Come, join us in our exciting journey." about6 = "All our engagements with global or domestic clients provide you with high quality professional experience. You work alongside professionals and learn while you deliver your services on these live engagements, providing you unlimited enriched experience and expertise. We are very clear and specific in our goals – we strive to providing highly skilled consulting engagements, well supported by our assurance, accounting and tax support to our global and domestic clients. If this sounds good enough and if you are as ambitious and passionate as us with our stated mission, come, join us in our exciting journey."
      />
      <Footer/>
    </div>
  )
}

export default WorkWithUs
