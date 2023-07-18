import React from 'react'
import Header from '../components/Header'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import Footer from '../components/Footer'
import Home_Body from '@/components/Home_Body'

function Home_page() {
  return (
    <div>
      <Header imageUrl = "https://www.pandr.in/wp-content/uploads/2020/08/about-banner.jpg" heading = "New-age firm of substance" about = "professionalism, knowledge, trust & independence define us" color = "white"/>
      <Elementor_widget_wrap
        heading1 = "Consulting" about1= "Diverse range of our service offerings, domain expertise, experience of partners and engagement team make us ideally suited to provide you with enriching consulting experience"

        heading2 = "Accounting" about2 = "Accounting is essential for management & statutory purposes. Know more about our scalable and flexible accounting model to generate business critical periodic financial statements"

        heading3 = "Assurance" about3 = "With more than a decade of proven expertise in providing assurance services to clients from various industries, stake holders can be assured of reliable & trustworthy opinion on the financial statements."

        heading4 = "Tax" about4 = "Prudent tax planning and strategy is often the key to successfully & legally reducing your tax liability. We go beyond tax compliance & proactively recommend tax strategies to optimise your tax."
      />
      <Home_Body image1 = 'https://www.pandr.in/wp-content/uploads/2020/07/le-1.jpg' heading1 = "We are a full service New-age CA firm, with our office in Bangalore, India" about1 = "Prakash & Rajaguru is a full service chartered accountancy firm based out of Bangalore, Karnataka, India. We are a member of the Institute of Chartered Accountants of India (ICAI) from April 2010 and have completed 10+ highly successful years in the profession. CA Rajaguru CG and CA AR Pai are currently the two partners of the firm and are well supported by several associates. All of us are driven by only one vision – to provide exceptional services to our clients with a high degree of professionalism, knowledge, trust & independence." link = "/Aboutus_page" linkText = "&gt;&gt; Know more about us"

      image2 = 'https://www.pandr.in/wp-content/uploads/2020/08/h2.jpg' heading2 = "The choice of a CA firm can make significant difference to your business." about2 = "During these days of rapid economic & regulatory reforms that the country is undergoing, serious advice & support on accounting, tax, compliance, statutory and regulatory matters and other critical matters concerning your business is crucial for its existence, sustenance and growth. Our services benefit companies of all sizes including but not limitied to India subsidiaries of foreign parent companies, stand-alone companies operating in India, funded companies, closely held companies, start-ups, product companies, services companies etc. Choose a firm that specialises in your particular field or industry, and you’ll benefit from specific expertise that matches your scale, nature and type of business."

       image3 = 'https://www.pandr.in/wp-content/uploads/2020/08/h3.jpg' heading3 = "Providing support you deserve" about3 = "We create value for our clients through our consultative approach, backed by great attitdue and premium support. You have worked hard to get where you are. You deserve a firm that works as hard as you, to help you achieve more success, assurance & growth. Our abilities to visualise and plan ahead, backed by precise execution is our key differentiator and our clients appreciate us for this quality. Through our hands on consultative approach, we can truly empower your business and drive it towards success"

        image4 = 'https://www.pandr.in/wp-content/uploads/2020/08/h4.jpg' heading4 = "Professionalism, knowledge, trust & independence define us" about4 = "These four words represent our underlying values and define our identity. We live these values each day. We are highly professional in our approach, work & attitude. We have expert knowledge in our domain & service offerings. You can absolutely trust our words & actions every time. We work closely with our clients, but with high degree of independence."
        image5= '	https://www.pandr.in/wp-content/uploads/2020/07/sbo-6.jpg' heading5 = "Fostering knowledge to empower our clients"
        about5 = "Doing business, especially in a land as complex and diversified as India, with a federal structure necessitates our clients to be equipped with a basic understanding & knowledge of various laws of the country & state, which impact their business. It is our endeavour to constantly study & monitor the changes in law and update our clients, to prepare them better to embrace inevitabe change and insulate their business from impending risks and exposure."/>
      <Footer/>
    </div>
  )
}

export default Home_page
