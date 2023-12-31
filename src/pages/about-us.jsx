import React, { Fragment } from 'react'
import image from '../assets/About_us-home-banner.jpg'
import Header from '../components/Header'
import Black_cards from '@/components/Black_cards'
import Link from 'next/link'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import image1 from '../assets/We-are-an-independent-firm-of-chartered-accountants-with-two-full-time-partners-and-several-associates.jpg'
import image2 from '../assets/Each-engagement-is-managed-by-a-qualified-manager-who-is-also-the-single-point-of-contact.jpg'
import image3 from '../assets/The-firm-has-more-than-thirty-experts-including-seven-chartered-accountants-and-several-associates.jpg'
import image4 from '../assets/Seeking-to-continously-provide-great-Ideas-and-solutions-that-benefit-you.jpg'
import image5 from '../assets/Adding-value-to-your-business-benefit-from-engaging-us.jpg'
import image6 from '../assets/Our-services-are-not-off-the-shelf-but-tailored-to-suit-your-unique-requirement.jpg'
import image7 from '../assets/Integrity-and-trust-matters-in-our-practice.jpg'
import Footer from '../components/Footer'
import Body_7_Left from '@/components/Body_7_Left'


function Aboutus_page() {
  return (
    <>
      <Header image = {image} heading = "Growth. Ideas. Solutions." about = "people you can count on, to make it happen" color = "black"/>
      <Black_cards/>
      <Body_7_Left
      image2 = {image1} heading2 = "We are an independent firm of chartered accountants, with two full time partners and several associates" about2={<Fragment>Prakash & Rajaguru is a full-service partnership firm of chartered accountants, based out of Bangalore, Karnataka, India. We are registered with the Institute of Chartered Accountants of India (ICAI) from April 2010 and have completed 12+ highly successful years in the profession. We work closely, yet independently with our clients, predominantly global companies having their presence in India and Indian startups. <br /> <br /> The firm is owned, managed and led by – <br /><br /> &nbsp;&nbsp; 1. Senior Partner CA Rajaguru CG <br />&nbsp;&nbsp; 2. Senior Partner CA AR Pai</Fragment>}

      image3 = {image2} heading3 = "Each engagement is managed by a qualified manager who is also the single point of contact" about3 = {<Fragment>We offer a range of services and specialise in <Link href='/consulting' className='text-decoration-none'>Consulting</Link>, <Link href='/accounting' className='text-decoration-none'>Accounting</Link>, <Link href='/assurance' className='text-decoration-none'>Assurance</Link> and <Link href='/tax' className='text-decoration-none'>Tax practices</Link>. We have dedicated in-house experts in each of these service offering who work together in focussed groups. We always start by analysing a client engagement from several points of view. This multidisciplinary approach is a major benefit for our clients as they get the best of expertise & experience. A customised team is created for large or complex engagement and this team is led by one of the partners and managed by a qualified manager who is also the single point of contact for the engagement.</Fragment>}

      image4 = {image3} heading4 = "The firm has more than thirty experts, including seven chartered accountants and several associates" about4 = {<Fragment>All team members are either chartered accountants or purusing their academic qualification in this profession. As a medium-sized office, we combine the best of both worlds. Our team is large enough to be able to offer guarantees and commitments regarding flexibility, speed and competences. At the same time, we are small enough to avoid bureaucracy and hierarchy. The commitment to clients and our engagement with them is great. The partners and qualified managers are directly approachable and actively involved  <br /><br /> <Link href = "/our-team" className='text-decoration-none text-dark'><i className="fa fa-angle-double-right color-black" aria-hidden= "true"style={{"fontSize":"15px", "fontWeight": "900", "lineHeight":"15px"}}></i> Meet Our Team</Link></Fragment>} 

      image5 = {image4} heading5 = "Seeking to continously provide great Ideas and solutions that benefit you" about5 = "We are driven by our constant quest for excellence. We are ever thinking about innovative ideas and out of the box thinking to make life simpler for our clients.  We challenge and push our employees and associates to always think ahead, assume a potential problem and identify the right solution on a proactive basis rather than reacting to a situation after its too late. More often, this approach has helped us stay ahead of the curve and has benefitted several clients immensely."

      image6 ={image5} heading6 = "Adding value to your business - benefit from engaging us" about6 = "We carry out work for a cross section of different clients across a range of industries. Building acute business awareness and strong personal judgement, we have gained expertise and experience working with businesses that are high-performing to those under financial pressures.   Our services benefit companies of all nature, size and type including but not limited to India subsidiaries of foreign parent companies, stand-alone companies operating in India, funded companies, closely held companies, start-ups, product companies, services companies etc"

      image7 = {image6} heading7 = "Our services are not 'off the shelf' but tailored to suit your unique requirement" about7 = "We have always beleieved that each client is unique. Each client situations are unique. We do not believe in the one size fits all solution. Each engagement is designed uniquely to cater to your specific requirement. We deliver all services to make your life as business owner easier and more profitable. From startups to big companies, we always assist our clients according to their needs and requirements. The aim is to develop a long-term financial vision for the company and the entrepreneurs."

      image8 = {image7} heading8 = "Integrity and trust matters in our practice!" about8 = "Since we might be dealing with your personal and business finances and tax, you need to have confidence that we have the highest level of integrity and are trustworthy.  As chartered accountants, we are bound by code of ethics to uphold a set of professional principles, endeavouring to always put our clients’ interests above our own. Practising means demonstrating a commitment to maintaining and developing professional standards, so you know your financial interests are always put first."/>

      <Footer/>
    </>
  );
}

export default Aboutus_page
