// import React from 'react'
import featureone from "../assets/feature-1.svg"
import featuretwo from "../assets/feature-2.svg"
import featurethree from "../assets/feature-3.svg"
import featurefour from "../assets/feature-4.svg"
import featurefive from "../assets/feature-5.svg"
import featuresix from "../assets/feature-6.svg"
// import { motion } from "framer-motion";



const Card = () => {

    // const cardProfile = {
    //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    //     hidden: { opacity: 0, y: 20 },
    //   };
    

  return (
    <>
    {/* card */}
    <section className="card-outer">
        <div className="container">
            <div className="card-content">
                <p className="para">360° CUSTOMIZABLE</p>
                <h2>Have full control over your online store</h2>
                <p className="para-two">Take total control of your eCommerce business by owning the source code and data that drive it.</p>
            </div>
                <div className="card-inner">
                    <section className="card one">
                        <div className="card-top">
                            <div className="card-top-content">
                                <h4>One time payment</h4>
                                <img src={featureone} alt="card-logo" />
                            </div>
                            <div className="card-bottom">
                                <p>Check out our best practices and support to quickly make text messaging one of your top 3 revenue channels.</p>
                            </div>
                        </div>
                    </section>
                    <section className="card two">
                        <div className="card-top">
                            <div className="card-top-content">
                                <h4>Self-reported data</h4>
                                <img src={featuretwo} alt="card-logo" />
                            </div>
                            <div className="card-bottom">
                                <p>You own your data, store design and business plan, but you are free to use the software platform and resources provided by Shopify.</p>
                            </div>
                        </div>
                    </section>
                    <section className="card three">
                        <div className="card-top">
                            <div className="card-top-content">
                                <h4>Updates are always free</h4>
                                <img src={featurethree} alt="card-logo" />
                            </div>
                            <div className="card-bottom">
                                <p>Shopify is so dedicated to keeping its software current that it sends you free updates for a lifetime without charging you anything.</p>
                            </div>
                        </div>
                    </section>
                    <section className="card four">
                        <div className="card-top">
                            <div className="card-top-content">
                                <h4>Mobile first design</h4>
                                <img src={featurefour} alt="card-logo" />
                            </div>
                            <div className="card-bottom">
                                <p>With our mobile app, you can allow your customers to check their order status, browse your store and create an account on the spot.</p>
                            </div>
                        </div>
                    </section>
                    <section className="card five">
                        <div className="card-top">
                            <div className="card-top-content">
                                <h4>100% Customizable</h4>
                                <img src={featurefive} alt="card-logo" />
                            </div>
                            <div className="card-bottom">
                                <p>You can customize your storefront and everything else in the way you want as the owner of your source code.</p>
                            </div>
                        </div>
                    </section>
                    <section className="card six">
                        <div className="card-top">
                            <div className="card-top-content">
                                <h4>Easy task management</h4>
                                <img src={featuresix} alt="card-logo" />
                            </div>
                            <div className="card-bottom">
                                <p>You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.</p>
                            </div>
                        </div>
                    </section>
                </div>
        </div>
    </section>
    </>
  )
}

export default Card