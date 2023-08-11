import React from 'react'
import Header from '../components/Header'
import Header_image from '../assets/consulting-banner.jpg'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import Body_5 from '../components/Body_5'
import Footer from '../components/Footer'
import banner_image1 from '../assets/Consulting-for-India-entry-of-global-entities.jpg'
import banner_image2 from '../assets/Laying-the-foundation-for-successful-business.jpg'
import banner_image3 from '../assets/Proactive-&-realtime-consulting-can-positively-change-the-outcome-for-your-business.jpg'
import banner_image4 from '../assets/Providing-consultancy-and-advice-you-can-rely-on-at-all-times.jpg'
import banner_image5 from '../assets/Consulting-is-a-highly-specialised-service-&-needs-relevant-expertise-&-experience.jpg'
import Elementor_container from '../components/Elementor_container'
import card_image1 from '../assets/Consulting-for-Global-Entities.jpg'
import card_image2 from '../assets/Consulting-for-Start-ups.jpg'
import card_image3 from '../assets/Consulting-for-Small-Business.jpg'
import card_image4 from '../assets/Consulting-for-Top-Management.jpg'
import card_image5 from '../assets/Consulting-for-Merger-&-Acquisition.jpg'
import card_image6 from '../assets/Consulting-for-Compliances.jpg'
import Black_cards from '@/components/Black_cards'


function Consulting() {
  return (
    <>
      <Header image ={Header_image}  heading = "Proactive & realtime consulting" about = "the way forward for empowering successful business" color = "black"/>
      <Black_cards/>
      <Body_5 
      image1 = {banner_image1} heading1 = "Consulting for India entry of global entities" about1 = "Finding one’s feet in a foreign terrain, many have realized, may not be the simplest phenomenon to counter, especially in a country as diverse and complex as India. With our consulting services, global entities can rely on our expertise and proven analyses to get the answers and solutions they need and ensure they have made the right assessment and a great beginning, towards their foray into India. Experience success even before you have taken the first step for making an effective entry into India, for expanding your global business."
      
      image2 = {banner_image2} heading2 = "Laying the foundation for successful business" about2 = "The decision to start a new business is an exciting one, but as every experienced business owner knows, there’s more to it than developing a product & hoping it sells. An entrepreneur may probably be a “big picture” person with a broad vision who would rather not deal with nitty-gritty details like choosing a business entity, developing business policies, evaluating business risks etc. But these elements are as critical as the product being sold or services being rendered and needs careful consideration and planning"

      image3 = {banner_image3} heading3 = "Proactive & realtime consulting can positively change the outcome for your business" about3 = "Being proactive is a way of thinking and acting, constantly moving forrward, looking to the future, anticipating needs and problems and influencing possible outcomes, while making things happen. It is an act of creating or controlling a situation rather than just responding to it after it has happened. A proactive approach focuses on eliminating problems before they have a chance to appear. Businessess today need professionals and consultants who are proactive and realtime in their approach, thought and attitude."

      image4 = {banner_image4} heading4 = "Providing consultancy and advice you can rely on, at all times" about4 = "Engaging our firm, gives you the reassurance that the advice you are receiving is both accurate and informed. As a professional services firm, we comply with professional development standards, ensuring our knowledge and skills are always kept up-to-date.  We are bound by professional code of conduct and ethics and have to adhere to professional standards. We are governed by disciplinary procedures, while undergoing monitoring of compliance and quality reviews of our professional practice."

      image5 = {banner_image5} heading5 = "Consulting is a highly specialised service & needs relevant expertise & experience" about5 = "With a team of collaborative professionals and several man-years of expertise and experience built around us, we have created a niche in specialised consulting in several areas – consulting for global entities who want to enter into India to do business, start up consulting before kickstarting your business, small business consulting for those entities which cant afford to hire CXO’s, top-management consulting for board of diectors and management to help them make confident decisions on various matters."
      />
      <Elementor_container
      heading = "Our Services under Consulting Practice"
      image1 = {card_image1} heading1 = "Consulting for Global Entities" about1 = "Increasingly, more than ever before, global entities who want to create and operate a legal entity in India in their endeavour to do business here, need to carefully evaluate and engage firms that have expertise of guiding global companies with a proactive consulting approach, which would eliminate or mitigate all possible risks."

      image2 = {card_image2} heading2 = "Consulting for Start-ups" about2 = "The key to a successful & long-lasting business is to lay the right foundation in initial stages of business formation so things don’t go wrong later. As a start-up, when you first start out, and money is tight, the do-it-yourself approach puts you in deeper mess than you can imagine. Start-up consulting can eliminate potential derailing of your business and put you on the path to success"

      image3 = {card_image3} heading3 = "Consulting for Small Business" about3 = "Significant number of small businesses operate in the country in various forms. Despite being small, they are making serious contributions to the economy of the country & yet these business owners, with unlimited liabilities are the most vulnerable & need professional consulting with a partner who understands their requirements and can provide the desired levels of support"

      image4 = {card_image4} heading4 = "Consulting for Top Management" about4 = "While top management of an organisation is responsible for controlling and overseeing the entire organization, designing & developing goals, strategic plans, company policies, and making decisions on the direction of the business, we guide them with all the expertise, insights and consulting they need. Our experience of working with several clients across diverse industry puts us in a postition of great strength."

      image5 = {card_image5} heading5 = "Consulting for Merger & Acquisition" about5 = "Merger or an Acqusition sounds great on paper but those working behind the scenes know how complicated things can get. We work with our clients to simplify the process of M&A, providing high end consulting on pre-merger & post-merger strategies and implementation, integration, due diligence, capital strucuring and everything else that comes with and M&A process."

      image6 = {card_image6} heading6 = "Consulting for Compliances" about6 = "Business changes come as waves, gathering shape, gaining energy and momentum and  crash against companies that come in their path. Those companies that anticipate and respond quickly to these waves of change  rise with the tide; those that dont are often crushed on impact. In these days of rapid economic reform and changes to laws that could impact your business, it is critical to be advised appropriately of impending changes."
      />      
      <Footer/>
    </>
  )
}

export default Consulting
