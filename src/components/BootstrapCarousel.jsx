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
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 object-cover"

          src={SchoolPic2}

          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 object-cover"
          src={SchoolPic3}

          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;