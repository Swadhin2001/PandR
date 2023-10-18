import React, { useRef } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser';


function Form() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lx93ifh', 'template_yllq8nq', form.current, 'Y3UVXcCoXI8VTQpSm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <form ref= {form} onSubmit={sendEmail}>
                <h4 className='form-h4'>Please fill the below form for your assistance</h4>
                <div className="mb-1">
                    <input type="text" id="TextInput" className="form-control rounded-0 form-focus shadow-none" placeholder="Name*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}} required name = "form-name" />
                </div>
                <div className="mb-1">
                    <input type="email" id="TextInput" className="form-control rounded-0 form-focus shadow-none" placeholder="Business Email*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}} required name = "form-email"/>
                </div>
                <div className="mb-1">
                    <input type="text" id="TextInput" className="form-control rounded-0 form-focus shadow-none" placeholder="Phone Number*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}} required name = "form-phonenumber"/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control form-focus shadow-none" placeholder="How can he help?*" id="floatingTextarea" style={{"backgroundColor" : "#F9F9F9", "border": '0', "color": "#2B2B2B"}} name = "form-help"></textarea>
                </div>
                <div className="mb-3">
                    <p className='form-p form-focus shadow-none'>We care about your privacy. By submitting this form, you will receive the requested information, as well as occasional related business insights from PandR. You can unsubscribe at any time. For details, view our  
                    <Link href = "/policy" className='text-decoration-none'> Privacy Policy</Link>.</p>
                </div>
                <input type="submit" className="btn btn-dark rounded-0" value="Get in Touch"/>
            </form>
        </div>
    )
}

export default Form
