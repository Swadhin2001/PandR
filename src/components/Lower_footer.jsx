import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Comp5() {
  return (
    <div className='container p-5'>
      <div className='row g-0'>
        <motion.div className="footer1 col-4 mx-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h4 style={{ "fontWeight": "700", "fontSize": "18px" }}>Contact Us</h4>
          <p className='py-3' style={{ "fontWeight": "400", "fontSize": "14px" }}>
            <strong>
              Prakash & Rajaguru
              <br/>
            </strong>
            185/7, 2nd Floor, Chandra Plaza
            <br/>
            8th F Main Road, 26th Cross
            <br/>
            Chandra Plaza, Jayanagar 3rd Block
            <br/>
            Bangalore – 560011, Karnataka, India
            <br/>
            Phone: 91-80-26538257
            <br/>
            Email: start@pandr.in
          </p>
        </motion.div>
        <motion.div className="footer2 col-2 mx-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h4 style={{ "fontWeight": "700", "fontSize": "18px" }} className='py-2'>Home</h4>
          <Link href="/Aboutus_page" style={{ "fontWeight": "400", "fontSize": "14px" }} className='py-1'>About Us</Link>
          <Link href="/Our_team" style={{ "fontWeight": "400", "fontSize": "14px" }} className='py-1'>Our Team</Link>
          <Link href="/WorkWithUs" style={{ "fontWeight": "400", "fontSize": "14px" }} className='py-1'>Work With Us</Link>
        </motion.div>
        <motion.div className="footer3 col-2 mx-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h4 style={{ "fontWeight": "700", "fontSize": "18px" }} className='py-2'>Services</h4>
          <Link href="/Consulting" style={{ "fontWeight": "400", "fontSize": "14px" }} className='py-1'>Consulting</Link>
          <Link href="/Accounting" style={{ "fontWeight": "400", "fontSize": "14px" }} className='py-1'>Accounting</Link>
          <Link href="/Assurance" style={{ "fontWeight": "400", "fontSize": "14px" }} className='py-1'>Assurance</Link>
          <Link href="/Tax" style={{ "fontWeight": "400", "fontSize": "14px" }} className='py-1' >Tax</Link>
        </motion.div>
        <motion.div className="footer4 col-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h4 style={{ "fontWeight": "700", "fontSize": "18px" }} className='py-2'>Others</h4>
          <Link href="/Disclaimer" style={{ "fontWeight": "400", "fontSize": "14px" }} className='py-1'>Disclaimer</Link>
          <Link href="/Privacy_policy" style={{ "fontWeight": "400", "fontSize": "14px" }} className='py-1'>Privacy Policy</Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Comp5
