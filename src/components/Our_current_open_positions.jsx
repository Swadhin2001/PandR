import React from 'react'
import Image from 'next/image'
import image1 from '@/assets/Integrity-and-trust-matters-in-our-practice.jpg'
import { motion } from 'framer-motion'


function Our_current_open_positions() {
    return (
        <div>
            <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
                <h4 className='text-center curr-pos-heading' >Our Current Open Positions</h4>
                <p className='text-center'>If you think you are suitable for the below positions, please write to us with a copy of your latest CV at <a href="#" className='text-decoration-none'> HR@PandR.in</a></p>
            </motion.div>
            <div className="d-flex justify-content-center pb-5">
                <motion.div className="container-1140" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <div className='d-flex border border-secondary our-curr-pos'>
                                <Image src={image1} alt="" style={{ "width": "170px", "height": "242px", "objectFit": "cover" }} />
                                <div style={{ "padding": "15px 0px 0px 15px" }}>
                                    <h4 className='current-pos-h4 pb-3 m-0'>Manager Audit & Tax: 1 Position</h4>
                                    <p className='current-pos-p pe-1 m-0'>Qualified Chartered Accountant with 2+ years post qualification experience in CA firm. The Manager would be responsible to plan & execute agreed professional client engagements independently, with support with team of executives & articles. In addition to the client servicing, the role also requires the Manager to provide guidance & mentorship to the team.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='d-flex border border-secondary our-curr-pos'>
                                <Image src={image1} alt="" style={{ "width": "170px", "height": "242px", "objectFit": "cover" }} />
                                <div style={{ "padding": "15px 0px 0px 15px" }}>
                                    <h4 className='current-pos-h4 pb-3 m-0'>Senior Executive Audit & Tax- 3 Positions</h4>
                                    <p className='current-pos-p pe-1 m-0'>Graduate with degree in commerce, semi-qualified with experience of at least 3+ years, with ability to independently handle the audits & related engagements in consulting, audit, and tax matters for subsidiaries of global clients or domestic clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Our_current_open_positions
