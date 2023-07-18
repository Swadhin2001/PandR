import React from 'react'
import Header from '../components/Header'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import Footer from '../components/Footer'
import Body_5 from '../components/Body_5'
import header_image from '../assets/accounting-banner.jpg'
import banner_image1 from '../assets/As-a-small-business-owner-you-have-more-important-things-to-do-than-to-do-your-own-accounting.jpg'
import banner_image2 from '../assets/Leave-the-accounting-set-up-to-professionals.jpg'
import banner_image3 from '../assets/Accounting-is-just-the-start-point-Clear-and-relevant-financial-reporting-is-the-objective.jpg'
import banner_image4 from '../assets/Becoming-a-business-owner-is-a-huge-step-ensure-you-off-rightly-by-improving-compliance.jpg'
import banner_image5 from '../assets/Globalization-presents-tremendous-opportunities-but-with-significant-challenges.jpg'
import Elementor_container from '@/components/Elementor_container'
import card_image1 from '../assets/Accounting-Set-up.jpg'
import card_image2 from '../assets/Bookkeeping-&-Accounting.jpg'
import card_image3 from '../assets/Compensation-&-Benefits.jpg'
import card_image4 from '../assets/Periodic-Compliances.jpg'
import card_image5 from '../assets/Corporate-&-Regulatory.jpg'
import card_image6 from '../assets/Reporting-Analysis-&-Advisory.jpg'

function Accounting() {
  return (
    <>
        <Header image = {header_image} heading = "Accurate & timely bookkeeping" about = "essential for long-term viability of every small business" color = "white"/>
        <Elementor_widget_wrap
        about1 = "Consulting"
        about2 = "Accounting"
        about3 = "Assurance"
        about4 = "Tax"
      />
      <Body_5
        image1 = {banner_image1} heading1 = "As a small business owner, you have more important things to do than to do your own accounting." about1 = "When you first started out, and money was tight, the do-it-yourself method of accounting might have worked fine. But if you are planning to grow or are already growing, this is not done. You need to do more important things than to keep your own books. Even getting your admin staff to maintain books will not work because you will still end up spending substanital time and effort montoring and guiding. Professional, accurate & timely bookkeeping is essential to your company’s long-term viability for internal & external reasons."

        image2 = {banner_image2} heading2 = "Leave the accounting set-up to professionals" about2 = "If youre just starting a business, well set up accounting, reporting and systems that make it easy for you to keep track of where your money is going. If youve been in business for a while, but need help cleaning up your books, well help streamline your bookkeeping systems and set up a system of checks & balances. If you need setting up standard operating procedures to build an accounting system that provides accurate & timely financial information, well help set it up."

        image3 = {banner_image3} heading3 = "Accounting is just the start point. Clear and relevant financial reporting is the objective." about3 = "We are more than just accountants who record the events that took place. We may do the accounting for you or provide support and advise the internal accounting department, but we always remain focussed on the ultimate goal: providing clear and useful financial information so you can make the right decisions. We ensure that all your accounting obligations are met on time and in a correct manner. However, our assignment doesn’t stop there. We give you the figures but we make sure they mean something too. We do more than just keeping records, we analyse, report and advise."

        image4 = {banner_image4} heading4 = "Becoming a business owner is a huge step, ensure you start off rightly by improving compliance." about4 = "Starting a small business is a dream that many have, yet very few get to experience. One of the most challenging aspects of running a small business is operating in a compliant manner. Whether you are a small mom and pop retail operation with a physical brick and mortar location, or run an online service, you need to ensure compliance in multiple areas. Doing so helps you run a smooth operation and it can protect you, legally,  Owning a small business comes with enough risk and uncertainty already, so help improve the odds of long-term success by running a compliant business operation, with professional help"

        image5 = {banner_image5} heading5 = "Globalization presents tremendous opportunities, but with significant challenges." about5 = "It is not enough that you have formed your legal entity with a lot of care & diligence, after proper evaulation of the type of entity that best suits your business. Ongoing compliance with Ministry of Corporate Affairs regulations & Companies Act are mandatory, if you are operating a Pvt Ltd Co or LLP or OPC. No worries. Our Company Secretary will ensure that we make periodic filings & submissions & maintain all the needed records and meet all your corporate & regulatory obligationss."
      />
      <Elementor_container 
      heading = "Our Services under Accounting Practice"
      image1 = {card_image1} heading1 = "Accounting Set-up" about1 = "We help define your accounting objectives, policies & principles, set-up your accounting system & chart of accounts, implement & customise suitable accounting software, so you are able to obtain accurate & timely financial information from the system"

      image2 = {card_image2} heading2 = "Bookkeeping & Accounting" about2 = "We work with you to introduce a system of tracking and collating ongoing expenses and business inputs, in the course of performing bookkeeping services. We maintain books of accounts regularly, so you get business critical financial information consistently."

      image3 = {card_image3} heading3 = "Compensation & Benefits" about3 = "We manage compensation & benefits of your employees, manage their business reimbursements, compute payroll taxes, issue payslips, handle payroll compliances – PT, PF, ESI, TDS with a high degree of professionalism & with strict confidentiality"

      image4 = {card_image4} heading4 = "Periodic Compliances" about4 = "Compliance obligations in India are quite complicated with several computations, filing & remittances monthly, quarterly and yearly. Provisions of law specific to your business need detailed understanding, expertise & experience to handle, which our compliance team will professionally manage for you"

      image5 = {card_image5} heading5 = "Corporate & Regulatory" about5 = "Ongoing compliance with Ministry of Corporate Affairs regulations and Indian Companies Act are mandatory for private limited company. Our Company Secretary will ensure total compliance with these regulations including managing periodic filings, handling board meetings etc"

      image6 = {card_image6} heading6 = "Reporting, Analysis & Advisory" about6 = "Receiving accurate, reliable and timely financial information is the lifeline of modern business. We collate and review critical financial and business information to present them in the form of management reports, for effective business decision making. We analyse the reports for you & advise suitably"
      />
      <Footer/>
    </>
  )
}

export default Accounting
