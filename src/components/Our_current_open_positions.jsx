import React from 'react'
import Image from 'next/image'
import image1 from '@/assets/Integrity-and-trust-matters-in-our-practice.jpg'

function Our_current_open_positions() {
    return (
        <div>
            <h4 className='text-center curr-pos-heading' >Our Current Open Positions</h4>
            <p className='text-center'>If you think you are suitable for the below positions, please write to us with a copy of your latest CV at <a href="#" className='text-decoration-none'> HR@PandR.in</a></p>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <div className='d-flex border border-secondary'>
                            <Image src = {image1} alt = "" style = {{"width": "200px", "height": "280px", "objectFit": "cover"}}/>
                            <div>
                                <h4 className='current-pos-h4'>Manager Audit & Tax: 1 Position</h4>
                                <p className='current-pos-p'>Qualified Chartered Accountant with 2+ years post qualification experience in CA firm. The Manager would be responsible to plan & execute agreed professional client engagements independently, with support with team of executives & articles. In addition to the client servicing, the role also requires the Manager to provide guidance & mentorship to the team.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className='d-flex border border-secondary'>
                            <Image src = {image1} alt = "" style = {{"width": "200px", "height": "280px", "objectFit": "cover"}}/>
                            <div>
                                <h4 className='current-pos-h4'>Senior Executive Audit & Tax- 3 Positions</h4>
                                <p className='current-pos-p'>Graduate with degree in commerce, semi-qualified with experience of at least 3+ years, with ability to independently handle the audits & related engagements in consulting, audit, and tax matters for subsidiaries of global clients or domestic clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Our_current_open_positions
