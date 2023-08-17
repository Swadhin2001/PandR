import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/P&R_Logo.svg'

function Navbar() {

  return (
    <>
    <nav className="navbar navbar-expand-lg custom-nav-class ">
        <div className="container-fluid ">
          <Link className="navbar-brand" href = "/">
            <Image
              src={logo}
              alt=" "
              className='p-0 logo-class'
            />
          </Link>
          <div className="d-flex" >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item nav-padding">
                  <Link className="nav-link active text-black p-0 nav-item-menu" aria-current="page" href='/about-us' style={{ "fontWeight": "600", "fontSize": "16px" }}>About Us</Link>
                </li>
                <li className="nav-item nav-padding">
                  <Link className="nav-link text-black p-0" href="/our-team" style={{ "fontWeight": "600", "fontSize": "16px" }}>Our Team</Link>
                </li>

                <li className="nav-item dropdown nav-padding">
                  <a className="nav-link dropdown-toggle p-0 text-black " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ "fontWeight": "600", "fontSize": "16px" }}>
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
                  <Link className="nav-link text-black p-0" href="/work-with-us" style={{ "fontWeight": "600", "fontSize": "16px" }}>Work With Us</Link>
                </li>
                <li className="nav-item nav-padding">
                  <Link className="nav-link text-black p-0" href="/contact-us" style={{ "fontWeight": "600", "fontSize": "16px" }}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr className='m-0 p-0'/>
    </>
  )
}

export default Navbar
