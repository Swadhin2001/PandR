import React, { useRef, useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser';


function Form() {
    const form = useRef();
    const [username, setUserName] = useState ("");
    const [email, setEmail] = useState ("");
    const [phn, setPhn] = useState ("");
    const [about, setAbout] = useState ("");

    const submitbtn =()=>{
        setAbout("");
        setEmail("");
        setUserName("");
        setPhn("");
        if (username != "" && email != "" && about != "" && phn != ""){
            alert ("Form Submitted Successfully!");
        }
        else{
            alert ("Please fill the form");
        }
    }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lx93ifh', 'template_yllq8nq', form.current, 'Y3UVXcCoXI8VTQpSm')
      .then((result) => {
          console.log(result.text);
          console.log("success");
        }, (error) => {
            console.log(error.text);
            console.log("not success");
      });
  };
    return (
        <div>
            <form ref= {form} onSubmit={sendEmail}>
                <h4 className='form-h4'>Please fill the below form for your assistance</h4>
                <div className="mb-1">
                    <input value = {username} id="TextInput" className="form-control rounded-0 form-focus shadow-none" placeholder="Name*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}}  name = "form-name"  onChange={(e)=> setUserName(e.target.value)} required/>
                </div>
                <div className="mb-1">
                    <input type="email" id="TextInput" className="form-control rounded-0 form-focus shadow-none" placeholder="Business Email*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}} required name = "form-email" value = {email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="mb-1">
                    <input type="number" id="TextInput" value = {phn} className="form-control rounded-0 form-focus shadow-none" placeholder="Phone Number*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}} required name = "form-phonenumber"  onChange={(e)=> setPhn(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control form-focus shadow-none" placeholder="How can he help?*" id="floatingTextarea" style={{"backgroundColor" : "#F9F9F9", "border": '0', "color": "#2B2B2B"}} name = "form-help" value = {about} onChange={(e)=> setAbout(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <p className='form-p form-focus shadow-none'>We care about your privacy. By submitting this form, you will receive the requested information, as well as occasional related business insights from PandR. You can unsubscribe at any time. For details, view our  
                    <Link href = "/policy" className='text-decoration-none'> Privacy Policy</Link>.</p>
                </div>
                <input type="submit" className="btn btn-dark rounded-0" value="Get in Touch" onClick={submitbtn}/>
            </form>
        </div>
    )
}

export default Form
