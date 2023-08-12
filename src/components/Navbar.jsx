import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/new-white-logo.png'

function Navbar(props) {

  return (
    <>
    <div className="d-flex justify-content-center">
      <div className="container-1200">
        <nav className="navbar navbar-expand-lg " style= {{"animation": "transitionIn 2s"}}>
          <div className="container-fluid p-0 ">
            <Link className="navbar-brand text-light logo" href="/Home_page" style={{"fontWeight":"600", "fontSize":"16px"}}>
              <Image
                src = {logo}
                alt = " "
                style = {{"width": "41%", "height": "20%"}}
                className='p-0'
              />
            </Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item nav-padding" >
                    <Link className="nav-link active text-white p-0" aria-current="page" href='/about-us' style={{"fontWeight":"600", "fontSize":"16px","color":`${props.color}`}}>About Us</Link>
                </li>
                <li className="nav-item nav-padding">
                  <Link className="nav-link text-white p-0" href="/our-team" style={{"fontWeight":"600", "fontSize":"16px", "color":`${props.color}`}}>Our Team</Link>
                </li>
                <div className="dropdown nav-padding">
                  <button className="nav-link dropdown-toggle text-white p-0" href="#" id="dropdownMenuButton" type="button" data-mdb-toggle="dropdown" aria-expanded="false" style={{"fontWeight":"600", "fontSize":"16px", "color":`${props.color}`}}>
                    Services
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><Link className="dropdown-item text-dark" href= '/consulting' style = {{"color":`${props.color}`}}>Consulting</Link></li>
                    <li><Link className="dropdown-item text-dark" href = '/accounting' style = {{"color":`${props.color}`}} >Accounting</Link></li>
                    <li><Link className="dropdown-item text-dark" href = '/assurance' style = {{"color":`${props.color}`}}>Assurance</Link></li>
                    <li><Link className="dropdown-item text-dark" href = '/tax' style = {{"color":`${props.color}`}}>Tax</Link></li>
                  </ul>
                </div>
                <li className="nav-item nav-padding ">
                  <Link className="nav-link text-white p-0" href="/work-with-us" style={{"fontWeight":"600", "fontSize":"16px","color":`${props.color}`}}>Work With Us</Link>
                </li>
                <li className="nav-item nav-padding">
                  <Link className="nav-link text-white p-0" href="/contact-us" style={{"fontWeight":"600", "fontSize":"16px","color":`${props.color}`}}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Navbar
