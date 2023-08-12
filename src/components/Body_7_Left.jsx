import React from 'react'
import { motion } from 'framer-motion'
import Image_left from './Image_left'
import Image_right from './Image_right'

function Body_7_Left(props) {
  return (
    <div className="d-flex justify-content-center">

      <div className='mainBody'>
        <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
            <Image_left image = {props.image2} heading = {props.heading2} about = {props.about2}/>
          </motion.div>
          <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
            <Image_right ight image = {props.image3} heading = {props.heading3} about = {props.about3}/>
          </motion.div>
          <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
            <Image_left image = {props.image4} heading = {props.heading4} about = {props.about4}/>
          </motion.div>
          <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
            <Image_right image = {props.image5} heading = {props.heading5} about = {props.about5}/>
          </motion.div>
          <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
            <Image_left image = {props.image6} heading = {props.heading6} about = {props.about6}/>
          </motion.div>
          <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
            <Image_right image = {props.image7} heading = {props.heading7} about = {props.about7}/>
          </motion.div>
          <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
            <Image_left image = {props.image8} heading = {props.heading8} about = {props.about8}/>
          </motion.div>
      </div>
    </div>
  )
}

export default Body_7_Left
