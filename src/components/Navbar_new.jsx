import 'bootstrap/dist/css/bootstrap.css'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-sticky position-relative" style= {{"animation": "transitionIn 2s"}}>
      <div className="container-fluid mx-5 ">
        <a className="navbar-brand text-light" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-3" >
              <a className="nav-link active text-light" aria-current="page" href="#">About Us</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-light" href="#">Our Team</a>
            </li>
            <li className="nav-item dropdown mx-3">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item text-light" href="#">Action</a></li>
                <li><a className="dropdown-item text-light" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-light" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item mx-3 ">
              <a className="nav-link text-light" href="#">Work With Us</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-light" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar