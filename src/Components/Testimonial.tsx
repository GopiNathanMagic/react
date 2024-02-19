import testi from "../assets/testimonial.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* testimonial */}
      <Slider {...settings}>
        <section className="testi-outer">
          <div className="container">
            <div className="testi-inner">
              <div className="testi-left">
                <img src={testi} alt="testimonial" />
              </div>
              <div className="testi-right">
                <h2>What Our Customers Say</h2>
                <p className="testipara">
                  “Lorem ipsum dolor sit amet consectetur adipiscing elit turpis
                  viverra amet elit est proin tgestas neque quis aliq vel.
                  Viverra gravida orci vitae at aliquam sit accums rutrum ut
                  convallis.”
                </p>
                <div className="testi-bottom-content">
                  <h5>John Carter</h5>
                  <p>Fashion Shoes Co.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testi-outer">
          <div className="container">
            <div className="testi-inner">
              <div className="testi-left">
                <img src={testi} alt="testimonial" />
              </div>
              <div className="testi-right">
                <h2>What Our Customers Say</h2>
                <p className="testipara">
                  “Lorem ipsum dolor sit amet consectetur adipiscing elit turpis
                  viverra amet elit est proin tgestas neque quis aliq vel.
                  Viverra gravida orci vitae at aliquam sit accums rutrum ut
                  convallis.”
                </p>
                <div className="testi-bottom-content">
                  <h5>John Carter</h5>
                  <p>Fashion Shoes Co.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testi-outer">
          <div className="container">
            <div className="testi-inner">
              <div className="testi-left">
                <img src={testi} alt="testimonial" />
              </div>
              <div className="testi-right">
                <h2>What Our Customers Say</h2>
                <p className="testipara">
                  “Lorem ipsum dolor sit amet consectetur adipiscing elit turpis
                  viverra amet elit est proin tgestas neque quis aliq vel.
                  Viverra gravida orci vitae at aliquam sit accums rutrum ut
                  convallis.”
                </p>
                <div className="testi-bottom-content">
                  <h5>John Carter</h5>
                  <p>Fashion Shoes Co.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slider>
    </>
  );
};

export default Testimonial;
