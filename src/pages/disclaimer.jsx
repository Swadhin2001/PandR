import React from 'react'
import Navbar_light from '@/components/Navbar_light'
import logo from '@/assets/black-logo.png'
import Footer from '@/components/Footer'

function Disclaimer() {
  return (
    <>
      <Navbar_light></Navbar_light>
      <div className="container my-5">
        <h1 className='disclaimer-h1'>Disclaimer</h1>
        <br />
        <br />
        <div>
          <h4 className='disclaimer-h4'> No Rendering of Advice</h4>
          <br />
          <p className='disclaimer-p'>The information contained within this website is provided for informational purposes only and is not intended to substitute for obtaining consulting, audit, accounting, tax, or financial advice from our firm.
            <br />
            <br />
            Presentation of the information via the Internet is not intended to create, and receipt does not constitute, an auditor-client relationship. Internet subscribers, users and online readers are advised not to act upon this information without seeking the service of a chartered accountant
          </p>
        </div>
        <div>
          <h4 className='disclaimer-h4'>Accuracy of Information</h4>
          <br />
          <p className='disclaimer-p'>While we use reasonable efforts to furnish accurate and up-to-date information, we do not warrant that any information contained in or made available through this website is accurate, complete, reliable, current or error-free.
            <br />
            <br />
            We assume no liability or responsibility for any errors or omissions in the content of this website or such other materials or communications. If you wish to contact the webmaster of this website, please write to the contact details provided in the Contact Us page.
          </p>
        </div>
        <div>
          <h4 className='disclaimer-h4'>Disclaimer of Warranties and Limitations of Liability</h4>
          <br />
          <p className='disclaimer-p'>This website is provided on an “as is” and “as available” basis. Use of this website is at your own risk. We and our suppliers disclaim all warranties. Neither we nor our suppliers shall be liable for any damages of any kind with the use of this website.
          </p>
        </div>
        <div>
          <h4 className='disclaimer-h4'>Links to Third Party Websites</h4>
          <br />
          <p className='disclaimer-p'>For your convenience, this website may contain hyperlinks to websites and servers maintained by third parties. We do not control, evaluate, endorse or guarantee content found in those sites. We do not assume any responsibility or liability for the actions, products, services and content of these sites or the parties that operate them. Your use of such sites is entirely at your own risk. </p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Disclaimer