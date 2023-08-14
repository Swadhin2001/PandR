import React from 'react'
import Card_Image from './Card_Image'
import image1 from '@/assets/CA_Rajaguru_CG.jpg'
import image2 from '@/assets/CA_AR_Pai.jpg'
import image3 from '@/assets/CA_Prathik_N.jpg'
import image4 from '@/assets/CA_Niraj_Thacker.jpg'
import image5 from '@/assets/CA_Sripada_M.jpg'
import image6 from '@/assets/CA_Vruti_Mehta.jpg'
import image7 from '@/assets/CA_Ganesh_Kamath.jpg'
import image8 from '@/assets/Yogaraj_S_M.jpg'
import image9 from '@/assets/rashmi.jpg'
import { motion } from 'framer-motion'

function Our_team_body() {
  return (
    <>
    <motion.h4 className='text-center m-5' style = {{"fontWeight": "700", "fontSize": "26px", "lineHeight": "35px"}} initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} transition={{ duration: 1}}>Leadership Team @ PandR</motion.h4>
    <div className='container d-flex justify-content-center my-5'>
        <div className="container-1000">
            <div className="row">
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
                    <Card_Image image = {image1} heading = "CA Rajaguru CG" about = "Chartered Accountant Leads Assurance & Tax Practice"/>
                </motion.div>
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
                    <Card_Image image = {image2} heading = "CA AR Pai" about ="Chartered Accountant Leads Assurance & Tax Practice"/>
                </motion.div>
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}>
                    <Card_Image image = {image3} heading = "CA Prathik N" about = "Chartered Accountant Group Head Assurance & Tax Practice"/>
                </motion.div>
            </div>
            <div className="row">
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
                    <Card_Image image = {image4} heading = "CA Niraj Thacker" about = "Chartered Accountant Leads Financial Planning & Wealth Management"/>
                </motion.div>
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
                    <Card_Image image = {image5} heading = "CA Sripada M" about = "Chartered Accountant Leads Transfer Pricing & International Taxation" />
                </motion.div>
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}>
                    <Card_Image image = {image6} heading = "CA Vruti Mehta" about = "Chartered Accountant Manager Audit  & Tax"/>
                </motion.div>
            </div>
            <div className="row">
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
                    <Card_Image image = {image7} heading = "CA Ganesh Kamath" about = "Chartered Accountant Manager Audit  & Tax"/>
                </motion.div>
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
                    <Card_Image image = {image8} heading = "Yogaraj S M" about ="Team Audit & Tax" />
                </motion.div>
                <motion.div className="col-md-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}>
                    <Card_Image image = {image9} heading = "Rashmi" about = "Team HR & Finance"/>
                </motion.div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Our_team_body
