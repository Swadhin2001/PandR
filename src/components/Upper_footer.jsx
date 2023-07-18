import React from 'react'
import Image from 'next/image'
import image from '../assets/Footer-image.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Upper_footer() {
  return (
    <motion.div className='upperFooter p-0' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      <Image
        src={image}
        alt=""
        className='img-fluid'
        style={{ "width": "40%", "height": "100%" }}
      />
      <motion.div className="right" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <Link href='/Contact_us'>
          <button style ={{"fontWeight":"600", "fontSize":"18px"}} className='px-4 py-2'>Contact Us</button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Upper_footer
