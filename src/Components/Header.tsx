// import React from 'react'
import logo from "../assets/shopify-header.png"


const Header = () => {
  return (
    <>
    {/* header */}
    <header className="header-outer">
      <div className="container">
          <div className="header-inner">
            <div className="header-logo">
              <a href="#">
                <img src={logo} alt="logo" title="logo" />
              </a>
            </div>
            <div className="header-menu">
              <nav>
              <ul>
                <li><a href="#">Product</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Customers</a></li>
                </ul>
              </nav>
            </div>
            <div className="header-login">
              <a href="#" className="login">Login</a>
              <a href="#" className="btn">Start free</a>
            </div>
        </div>
        </div>
    </header>
  </>
  )
}

export default Header