import React from 'react'
import { motion } from 'framer-motion'
import UpperFooter from '../components/UpperFooter'
import Lower_footer from '../components/Lower_footer'
function Footer() {
  return (
    <>
    <div className="container-fluid footer-bg">
        <div className="row">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
            <UpperFooter></UpperFooter>
          </motion.div>
          <Lower_footer></Lower_footer>
          <p className='text-white text-center footer-p'>Copyright (c) 2023 Prakash and Rajaguru, Bangalore, India. All Rights Reserved.</p>
        </div>
    </div>  
    </>
  )
}

export default Footer
