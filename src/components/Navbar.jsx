import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'
import Image from 'next/image'
import logo_light from '@/assets/PandRLogoWhite.svg'
import logo_dark from '@/assets/PandRLogo.svg'
import { useState } from 'react'


function Navbar() {

  const [logo, setLogo] = useState(logo_light);
  const [color, setColor] = useState("white");
  const [background, setBackground] = useState ("transparent");
  // const [border, setBorder] = useState("");
  const Scroll =()=>{
    if (scrollY >= 100){
      setLogo (logo_dark);
      setColor ("black");
      setBackground ("white");
      // setBorder ("border-bottom border-black")
    }
    else {
      setLogo (logo_light);
      setColor ("white");
      setBackground ("transparent");
      // setBorder ("");
    }
  }
  if (typeof window !== "undefined"){
    window.addEventListener ('scroll', Scroll);
  }

  return (
    <>
    <div className={`bg-${background} sticky-top d-flex justify-content-center`} >
      <nav className="navbar navbar-expand-lg custom-nav-class sticky-top ">
        <div className="container-1200 d-flex ">
          <Link className="navbar-brand" href = "/">
            <Image
              src={logo}
              alt=" "
              className='p-0 logo-class'
            />
          </Link>
          <div className="nav-elements" >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item nav-padding">
                  <Link className={`nav-link active text-${color} p-0 nav-item-menu`} aria-current="page" href='/about-us' style={{ "fontWeight": "600", "fontSize": "16px" }}>About Us</Link>
                </li>
                <li className="nav-item nav-padding">
                  <Link className={`nav-link text-${color} p-0`} href="/our-team" style={{ "fontWeight": "600", "fontSize": "16px" }}>Our Team</Link>
                </li>

                <li className="nav-item dropdown nav-padding">
                  <a className= {`nav-link dropdown-toggle p-0 text-${color}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ "fontWeight": "600", "fontSize": "16px" }}>
                    Services
                  </a>
                  <ul className="dropdown-menu rounded-0 dropdown-items p-0" >
                    <li><Link className="dropdown-item text-black m-0" href='/consulting' >Consulting</Link></li>
                    <li><Link className="dropdown-item text-black m-0" href='/accounting'  >Accounting</Link></li>
                    <li><Link className="dropdown-item text-black m-0" href='/assurance' >Assurance</Link></li>
                    <li><Link className="dropdown-item text-black m-0" href='/tax' >Tax</Link></li>
                  </ul>
                </li>
                <li className="nav-item nav-padding">
                  <Link className={`nav-link text-${color} p-0`} href="/work-with-us" style={{ "fontWeight": "600", "fontSize": "16px" }}>Work With Us</Link>
                </li>
                <li className="nav-item nav-padding">
                  <Link className={`nav-link text-${color} p-0`} href="/contact-us" style={{ "fontWeight": "600", "fontSize": "16px" }}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>


    </>
  )
}

export default Navbar
