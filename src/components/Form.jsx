import React from 'react'
import Link from 'next/link'
function Form() {
    return (
        <div>
            <form>
                    <h4 className='form-h4'>Please fill the below form for your assistance</h4>
                    <div className="mb-1">
                        <input type="text" id="disabledTextInput" className="form-control rounded-0" placeholder="Name*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}}/>
                    </div>
                    <div className="mb-1">
                        <input type="text" id="disabledTextInput" className="form-control rounded-0" placeholder="Business Email*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}}/>
                    </div>
                    <div className="mb-1">
                        <input type="text" id="disabledTextInput" className="form-control rounded-0" placeholder="Phone Number*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}}/>
                    </div>
                    <div className="mb-3">
                        <textarea class="form-control" placeholder="How can he help?*" id="floatingTextarea" style={{"backgroundColor" : "#F9F9F9", "border": '0', "color": "#2B2B2B"}}></textarea>
                    </div>
                    <div className="mb-3">
                        <p className='form-p'>We care about your privacy. By submitting this form, you will receive the requested information, as well as occasional related business insights from PandR. You can unsubscribe at any time. For details, view our  
                        <Link href = "/policy" className='text-decoration-none'> Privacy Policy</Link>.</p>
                    </div>
                    <button type="submit" className="btn btn-dark rounded-0">Get in Touch</button>
            </form>
        </div>
    )
}

export default Form
