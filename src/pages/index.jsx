import { Inter } from 'next/font/google'
import React, { Fragment } from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import Footer from '../components/Footer'
import Body_5 from '@/components/Body_5'
import header_image from '@/assets/Home-banner.jpg'
import banner_image1 from '../assets/We-are-a-full-service-New-age-CA-firm-with-our-office-in-Bangalore-India.jpg'
import banner_image2 from '../assets/The-choice-of-a-CA-firm-can-make-significant-difference-to-your-business.jpg'
import banner_image3 from '../assets/Providing-support-you-deserve.jpg'
import banner_image4 from '../assets/Professionalism-knowledge-trust-&-independence-define-us.jpg'
import banner_image5 from '../assets/Fostering-knowledge-to-empower-our-clients.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div  >
      
      <Header image = {header_image} heading = "New-age firm of substance" about = "professionalism, knowledge, trust & independence define us" color = "white"/>
      <Elementor_widget_wrap
        heading1 = "Consulting" about1= "Diverse range of our service offerings, domain expertise, experience of partners and engagement team make us ideally suited to provide you with enriching consulting experience"

        heading2 = "Accounting" about2 = "Accounting is essential for management & statutory purposes. Know more about our scalable and flexible accounting model to generate business critical periodic financial statements"

        heading3 = "Assurance" about3 = "With more than a decade of proven expertise in providing assurance services to clients from various industries, stake holders can be assured of reliable & trustworthy opinion on the financial statements."

        heading4 = "Tax" about4 = "Prudent tax planning and strategy is often the key to successfully & legally reducing your tax liability. We go beyond tax compliance & proactively recommend tax strategies to optimise your tax."
      />
      <Body_5 image1 = {banner_image1} heading1 = "We are a full service New-age CA firm, with our office in Bangalore, India" about1 = {<Fragment>Prakash & Rajaguru is a full service chartered accountancy firm based out of Bangalore, Karnataka, India. We are a member of the Institute of Chartered Accountants of India (ICAI) from April 2010 and have completed 10+ highly successful years in the profession. CA Rajaguru CG and CA AR Pai are currently the two partners of the firm and are well supported by several associates. All of us are driven by only one vision – to provide exceptional services to our clients with a high degree of professionalism, knowledge, trust & independence. <br /> <br /><Link href = "/about-us" className = "text-decoration-none text-black"> <i className="fa fa-angle-double-right color-black" aria-hidden= "true"style={{"fontSize":"15px", "fontWeight": "900", "lineHeight":"15px"}}></i> Know more about us</Link> </Fragment>} 

      image2 = {banner_image2} heading2 = "The choice of a CA firm can make significant difference to your business." about2 = "During these days of rapid economic & regulatory reforms that the country is undergoing, serious advice & support on accounting, tax, compliance, statutory and regulatory matters and other critical matters concerning your business is crucial for its existence, sustenance and growth. Our services benefit companies of all sizes including but not limitied to India subsidiaries of foreign parent companies, stand-alone companies operating in India, funded companies, closely held companies, start-ups, product companies, services companies etc. Choose a firm that specialises in your particular field or industry, and you’ll benefit from specific expertise that matches your scale, nature and type of business."

       image3 = {banner_image3} heading3 = "Providing support you deserve" about3 = "We create value for our clients through our consultative approach, backed by great attitdue and premium support. You have worked hard to get where you are. You deserve a firm that works as hard as you, to help you achieve more success, assurance & growth. Our abilities to visualise and plan ahead, backed by precise execution is our key differentiator and our clients appreciate us for this quality. Through our hands on consultative approach, we can truly empower your business and drive it towards success"

        image4 = {banner_image4} heading4 = "Professionalism, knowledge, trust & independence define us" about4 ={<Fragment>These four words represent our underlying values and define our identity. We live these values each day. <br/><br /> We are highly  <b>professional</b>  in our approach, work & attitude. We have expert<b> knowledge</b>  in our domain & service offerings. You can absolutely <b>trust</b>   our words & actions every time. <br/><br /> We work closely with our clients, but with high degree of  <b>independence</b></Fragment>}
       
        image5= {banner_image5} heading5 = "Fostering knowledge to empower our clients"
        about5 = "Doing business, especially in a land as complex and diversified as India, with a federal structure necessitates our clients to be equipped with a basic understanding & knowledge of various laws of the country & state, which impact their business. It is our endeavour to constantly study & monitor the changes in law and update our clients, to prepare them better to embrace inevitabe change and insulate their business from impending risks and exposure."/>
      <Footer/>
    </div>
  )
}
