import footerlogo from "../assets/shopify-footer.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import footeranimation from "../assets/eclipse-1.svg";
import footer_animation_two from "../assets/eclipse-2.svg";

const Footer = () => {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <>
      <footer className="footer-outer">
        <div className="footer-top">
          <div className="container">
            <h2>We can take care of the installation</h2>
            <p>
              Don't want to deal with technical stuff? Let us fire up Uvodo for
              you, so you can spend your time selling right away.
            </p>
            <div className="footer-button">
              <a href="#">CONTACT US</a>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView="visible"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            variants={footerImage}
            className="animation left"
            src={footeranimation}
            alt="eclipse"
          />
          <motion.img
            initial="hidden"
            whileInView="visible"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            variants={footerImage}
            className="animation right"
            src={footer_animation_two}
            alt="eclipse"
          />
        </div>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="footer-bottom"
          >
            <div className="footer-logo">
              <img src={footerlogo} alt="footer-logo" />
            </div>
            <div className="footer-main-menu">
              <div className="footer-menu">
                <h6>Features</h6>
                <div className="footer-box">
                  <ul>
                    <li>
                      <a href="#">Find a Patner</a>
                    </li>
                    <li>
                      <a href="#">Become a Patner</a>
                    </li>
                    <li>
                      <a href="#">Affiliates</a>
                    </li>
                    <li>
                      <a href="#">Patner Offers</a>
                    </li>
                    <li>
                      <a href="#">Store Examples</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-menu">
                <h6>Company</h6>
                <div className="footer-box">
                  <ul>
                    <li>
                      <a href="#">Leaders</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                    <li>
                      <a href="#">Awards</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-menu">
                <h6>Resources</h6>
                <div className="footer-box">
                  <ul>
                    <li>
                      <a href="#">Overview</a>
                    </li>
                    <li>
                      <a href="#">Articles</a>
                    </li>
                    <li>
                      <a href="#">Webinars</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                    <li>
                      <a href="#">Ecommerce</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-menu">
                <h6>Get Help</h6>
                <div className="footer-box">
                  <ul>
                    <li>
                      <a href="#">Shopify Company</a>
                    </li>
                    <li>
                      <a href="#">Knowledge Base</a>
                    </li>
                    <li>
                      <a href="#">Videos Contact</a>
                    </li>
                    <li>
                      <a href="#">Tech Support</a>
                    </li>
                    <li>
                      <a href="#">API Documentation</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="footer-bottom-copy">
            <div className="footer-para">
              <p>
                &copy; 2024 Shopify by <a href="#">Gopinathan</a>
              </p>
            </div>
            <div className="socialmedia-outer">
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gopinathan96"
                  target="_blank"
                >
                  <FaLinkedin color={"rgb(229, 231, 235)"} font-size={"20px"} />
                </a>
              </div>
              <div className="social-icons">
                <a href="https://github.com/GopiNathanMagic" target="_blank">
                  <FaGithub color={"rgb(229, 231, 235)"} font-size={"20px"} />
                </a>
              </div>
              <div className="social-icons">
                <a href="#">
                  <FaInstagram
                    color={"rgb(229, 231, 235)"}
                    font-size={"20px"}
                  />
                </a>
              </div>
              <div className="social-icons">
                <a href="#">
                  <FaFacebookF
                    color={"rgb(229, 231, 235)"}
                    font-size={"20px"}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
