import React from "react";
import {Carousel} from 'react-bootstrap';
import SchoolPic1 from '../Images/SchoolPic1.jpg'
import SchoolPic2 from '../Images/SchoolPic2.jpg'
import SchoolPic3 from '../Images/SchoolPic3.jpg'

function  BootstrapCarousel() {
  return (

    <Carousel className='carousel-inner'>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 object-cover"
          src={SchoolPic1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 object-cover"

          src={SchoolPic2}

          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 object-cover"
          src={SchoolPic3}

          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;