import React from 'react';
import '../App.css'
import '../Components/Components Styles/Main.css';
import Slider from "react-slick";
import testimonial from '../Assests/Testimonials.json';
import Card from './Card';
import About from './About';
import TopPicks from './TopPicks';
import Category from './Category';
// import { CartState } from '../App';

// import { user } from '../App';


const Main = () => {

  // var { cart, setCart, cartSize, setCartSize, discount, setDiscount, totalPrice, setTotalPrice } = useContext(user);

  // const {state:{cart,products},dispatch} = CartState();
  
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  const settings1 = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    arrows: true,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  }


  
  return (
    <div id="mainContainer">

      {/* Carousel Container starts */}
      <div id="carouselMain">
        <Slider {...settings1}>
          <div >
            <img src="https://cdn2.storehippo.com/s/573db1519f0d58741f0cc5c1/624454e843508794f8950773/webp/35-2048x2048.png" alt="..." />
          </div>
          <div >
            <img src="https://cdn2.storehippo.com/s/573db1519f0d58741f0cc5c1/61fa98178516f3d31852f4ae/webp/926f1512-cf8f-4231-8bf5-edf358e9a215-2048x2048.png" alt="..." />
          </div>
          <div >
            <img src="https://cdn1.storehippo.com/s/573db1519f0d58741f0cc5c1/61fa992d69d3fcd28c181858/webp/image-from-ios-2048x2048.png" alt="..." />
          </div>
          <div >
            <img src="https://cdn2.storehippo.com/s/573db1519f0d58741f0cc5c1/624454cdbdfa5b955c63d289/webp/34-2048x2048.png" alt="..." />
          </div>
          <div >
            <img src="https://cdn1.storehippo.com/s/573db1519f0d58741f0cc5c1/61fa98cb69d3fcd28c1812f4/webp/image-from-ios-1--2048x2048.png" alt="..." />
          </div>
          <div >
            <img src="https://cdn2.storehippo.com/s/573db1519f0d58741f0cc5c1/61fa98573d2dd0d372a599f8/webp/54d9b108-ac6f-4559-b05c-c098cb88c079-2048x2048.png" alt="..." />
          </div>
        </Slider>
      </div>

      {/* Carousel Container Ends */}

      {/* Top Picks  and Category Starts */}

      <Category />
      <TopPicks />

      {/* Top Picks and Category Ends  */}

      {/* Testimonials Starts */}

      <div id="testimonials">
        <h1> CUSTOMER'S SPEAK </h1>
        <div id='testimonialSlider'>
          <Slider {...settings}>
            <div style={{ width: "100%", height: "80%" }}>
              <Card val={testimonial[0]} />
            </div>
            <div style={{ width: "100%", height: "80%" }}>
              <Card val={testimonial[1]} />
            </div>
            <div style={{ width: "100%", height: "80%" }}>
              <Card val={testimonial[2]} />
            </div>
            <div style={{ width: "100%", height: "80%" }}>
              <Card val={testimonial[3]} />
            </div>
            <div style={{ width: "100%", height: "80%" }}>
              <Card val={testimonial[4]} />
            </div>
          </Slider>
        </div>
      </div>

      {/* Testimonial Ends */}

      {/* About Section starts */}

      <About />

      {/* About Sections Ends */}

    </div>
  )
}

export default Main