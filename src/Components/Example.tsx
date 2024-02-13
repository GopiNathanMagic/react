
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import testi from "../assets/testimonial.png"
// import arrowleft from "../assets/arrow-left-disabled.svg"
// import arrowright from "../assets/arrow-right.svg"

const Example = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <>
    <Slider {...settings}>
      <div className="example">
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae consequuntur quasi sint assumenda facere reiciendis vel, officia fuga sunt eaque illo cupiditate voluptatem numquam rem fugit exercitationem, eveniet animi expedita.</h3>
      </div>
      <div className="example">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt ipsum libero ab quaerat quos doloribus voluptates sunt odio omnis dolorem voluptas explicabo quia minus quod nesciunt porro, harum velit?</h3>
      </div>
      <div className="example">
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempora accusamus dignissimos aliquid maiores voluptates porro, distinctio, magnam, ad nostrum architecto nihil perspiciatis illo. Quia ipsum ducimus odio quam accusantium.</h3>
      </div> 



    </Slider>
    </>
  )
}

export default Example