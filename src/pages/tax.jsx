import React from 'react'
import Header from '../components/Header'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import Footer from '@/components/Footer'
import header_image from '../assets/tax-banner.jpg'
import banner_image1 from '../assets/We-analyse-the-tax-implications-of-events-and-decisions-and-we-advise-proactively.jpg'
import banner_image2 from '../assets/Government-has-reduced-tax-burden-on-small-traders-and-businessmen.jpg'
import banner_image3 from '../assets/Professionals-too-can-avail-presumptive-tax-benefits-&-file-their-taxes-conveniently.jpg'
import banner_image4 from '../assets/Globalization-presents-tremendous-opportunities-but-with-significant-challenges.jpg'
import banner_image5 from '../assets/Expatriate-and-non-resident-taxation-is-a-critical-but-complicated-subject-but-we-make-it-simple-&-easy.jpg'
import banner_image6 from '../assets/GST-affects-your-business-more-than-you-think-&-thats-why-it-is-critical-to-seek-expert-help.jpg'
import Elementor_container from '@/components/Elementor_container'
import card_image1 from '@/assets/Income-Tax-Planning-&-Support.jpg'
import card_image2 from '@/assets/Presumptive-Tax-for-Small-Business.jpg'
import card_image3 from '@/assets/Transfer-Pricing-&-International-Tax.jpg'
import card_image4 from '@/assets/GST-Planning-and-Support.jpg'
import card_image5 from '@/assets/Audit-under-Income-Tax-&-GST.jpg'
import card_image6 from '@/assets/Income-Tax-&-GST-Representation.jpg'
import Body_6 from '@/components/Body_6'
import Black_cards from '@/components/Black_cards'

function Tax() {
  return (
    <>
      <Header image = {header_image} heading = "Consider it done" about = "tax planning, preparing & filing - efficiently" color = "white"/>
      <Black_cards/>
      <Body_6
        image1 = {banner_image1} heading1 = "We analyse the tax implications of events and decisions, and we advise proactively" about1 = "Income tax laws in our country are complicated. Compliance with tax laws can be overwhelming. With so many important details to consider, it’s easy to make an error or omit something which could end up as a penalty, fine, or unwanted problem. We support you with tax planning, preparation and filing needs while remaining compliant with the continuously changing tax laws and regulations. The business economics of the company and the strategic choices of the business owner are the main focus, but the tax context is never absent."

        image2 = {banner_image2} heading2 = "Government has reduced tax burden on small traders and businessmen" about2 = "In case of small traders, manufacturers, retailers and other business doing turnover of upto Rs 2 Crore per annum, adopting the provisions of section 44AD, income is computed on presumptive basis at the rate of 8% of the turnover or gross receipts of the eligible business for the year or 6% of the turnover or gross receipts of the eligible business for the year, if turnover/gross receipt is received by an account payee cheque or an account payee bank draft or use of electronic clearing system through a bank account. Such tax payers need not maintain books of accounts."

        image3 = {banner_image3} heading3 = "Professionals too can avail presumptive tax benefits & file their taxes conveniently." about3 = "In case of specified professionals earning gross receipts of upto Rs 50 lakhs per annum, adopting the provisions of section 44ADA, income is computed on presumptive basis at the rate of 50% of the gross receipts of the eligible profession. Such professionals need not maintain books of accounts. Deduction such as under 80C ie provident fund, insurance premium, children tuition fees, specified investments, housing loan principal, etc can be availed. Similarly interest on housing loan can also be claimed as deduction."

        image4 = {banner_image4} heading4 = "Globalization presents tremendous opportunities for business, & also significant challenges." about4 = "The pricing of goods and services within a multi-divisional organization, particularly in regard to cross-border transactions, has emerged as one of the most contentious areas of international tax law. Transfer pricing issues arise when entities of multinational corporations resident in different jurisdictions transfer goods or provide services to one another. These entities do not deal at arm’s length and, thus, transactions between these entities may not be subject to ordinary market forces."

        image5 = {banner_image5} heading5 = "Expatriate and non-resident taxation is a critical but complicated subject, but we make it simple & easy." about5 = "When an expatriate, ie a foreign citizen works in India, his entire salary-related income is subject to tax in India, even if it is paid outside India. Expenses incurred by an employer in moving an expatriate to and from India and home-leave airfares are not considered taxable income in India. Similarly, payments made in an expatriate’s home country as retirements benefits are also not considered as income earned in India. Expatriate taxation is a complicated subject and one needs to consult professionals to be on top of expatriate tax obligations in the country."

        image6 = {banner_image6} heading6 = "GST affects your business more than you think & thats why it is critical to seek expert help" about6 = "The complex GST laws implemented in India affects every business. GST, being one of the largest tax reforms in India needs expert and professional approach at macro and micro levels.  It is important to develop a relationship with a firm that understands how your business works and how it impacts your GST. As GST experts, we make sure you stay on top of your GST obligations. We work with you to undertake comprehensive review of your business operations, help you to identify tax planning opportunities."
      />
      <Elementor_container
      heading = "Our Services under Tax Practice"
      image1= {card_image1} heading1 = "Income Tax Planning & Support" about1 = "Tax planning is the key to legally and successfully reducing tax liability. We go beyond tax compliance and proactively recommend tax saving strategies to maximize after-tax income for your business. We help prepare and timely file tax returns for your business, helping you avail all available benefits and deductions"
      image2 = {card_image2} heading2 = "Presumptive Tax for Small Business" about2 = "We will help you determine how to benefit from presumptive tax scheme applicable to certain business with turnover upto Rs 2 Crore and professionals with gross revenues upto Rs 50 lakhs and avail applicable benefits where your income will be considered as 8% of turnover for ‘business’ and 50% of gross receipts for ‘professions’ respectively, making it convenient, effective & easy."
      image3 = {card_image3} heading3 = "Transfer Pricing & International Tax" about3 = "With its potential to have a significant impact on the effective tax rate, businesses, especially India subsidiaries, must pay serious & close attention to their transfer pricing strategy, policies, documentation and reporting. Our services take care of transfer pricing and international tax issues for subisidaries of global entities operating in India."
      image4 = {card_image4} heading4 = "GST Planning and Support" about4 = "GST is a deceptively complicated tax. The rules and regulations are complex, leading to companies either over paying or under paying what they actually owe. We review your GST profile to identify opportunities to reduce your administrative burden or potential tax savings. We also help meet your GST compliances by computing GST liability, preparing & filing applicable returns."
      image5 = {card_image5} heading5 = "Audit under Income Tax & GST" about5 = "Based on Turnover or Gross receipts exceeding threshold limits prescribed by the Government, buinessess are required to get Income tax audit done. Tax audit is a review or examination of accounts of taxpayers, from an income tax viewpoint. It makes the process of income computation for filing of return of income easier."
      image6 = {card_image6} heading6 = "Income Tax & GST Representation" about6 = "When you recieve notice from Income tax or GST authorities, you would need professional help to draft suitable response. We help you resolve your tax issues & put an end to the misery or stress that the tax authorities can put you through notices, hearings, summons or assessments. We are qualified to represent you professionally."
      />
      <Footer/>
    </>
  )
}

export default Tax