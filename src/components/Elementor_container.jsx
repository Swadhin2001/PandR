import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'


function Elementor_container(props) {
  return (
    <div className='elementor-container-margin' >
      <motion.h2 className='text-center m-1 elementor-container-heading' initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
  transition={{ duration: 1}}>{props.heading}</motion.h2>
      <div className="d-flex justify-content-center p-0">
        <div className="container-1000 ">
            <div className=" row pt-4" >
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
                    <Card image = {props.image1} heading = {props.heading1} about = {props.about1}/>
                </motion.div>
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
                    <Card image = {props.image2} heading = {props.heading2} about = {props.about2}/>
                </motion.div>
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}>
                    <Card image = {props.image3} heading = {props.heading3} about = {props.about3}/>
                </motion.div>
            </div>
            <div className="row pt-4">
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
                    <Card image = {props.image4} heading = {props.heading4} about = {props.about4}/>
                </motion.div>
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
                    <Card image = {props.image5} heading = {props.heading5} about = {props.about5}/>
                </motion.div>
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}>
                    <Card image = {props.image6} heading = {props.heading6} about = {props.about6}/>
                </motion.div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Elementor_container
