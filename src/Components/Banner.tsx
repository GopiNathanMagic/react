// import React from 'react'
import slider from "../assets/hero.png"


const Banner = () => {
  return (
    <>
    {/* slider */}

    
    <section className="banner-outer">
    <div className="container">
      <div className="banner-inner">
        <div className="banner-content">
            <h1>The platform commerce is built on.</h1>
            <p>Millions of the world's most successful brands trust Shopify to sell, ship and process payments anywhere.</p>
            <div className="banner-btn">
                <a href="" className="btn admin">admin demo</a>
                <a href="" className="btn shop">shop demo</a>
            </div>
        </div>
        <div className="banner-image">
          <img src={slider} alt="banner" />
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Banner