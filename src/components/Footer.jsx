import React from 'react'
import Upper_footer from '../components/Upper_footer'
import Lower_footer from '../components/Lower_footer'
function Footer() {
  return (
    <>
    <div className="container-fluid footer-bg">
        <div className="row">
          <Upper_footer></Upper_footer>
          <Lower_footer></Lower_footer>
        </div>
    </div>  
    </>
  )
}

export default Footer
