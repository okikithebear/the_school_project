import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import { imageArray } from '../images'

const Slider = ({ slideNumber, handleModal}) => {
    const [imageNumber, setImageNumber] = useState(0)

    const handleOpenModal = () => {
        // setSlideNumber(index)
        // setOpenModal(true)
        }    

  // Close Modal
    const handleCloseModal = () => {
    // setOpenModal(false)
    
    }

   // Previous Image
    const prevSlide = () => {
        imageNumber === 0 
        ? setImageNumber( imageArray[slideNumber].length -1 ) 
        : setImageNumber( imageNumber - 1 )
    }

    // Next Image  
    const nextSlide = () => {
        console.log(imageArray[slideNumber].length)
        imageNumber + 1 === imageArray[slideNumber].length 
        ? setImageNumber(0) 
        : setImageNumber(imageNumber + 1)
    }


  return (
    <div>
        
        <div className='sliderWrap'>
          
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleModal}  />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide}  />
          <div className='flex flex-col'>
          <div className='fullScreenImage relative my-2 '>
            <img src={imageArray[slideNumber][imageNumber]} className='objec-cover h-[35em] w-44em py-10 px-32' alt='' />           
          </div> 

          <div className='flex flex-row image-thumbnails mt-24'>
            {
                imageArray[slideNumber].map((imageUrl, index) => (
                    <div className='relative basis-1/6 gap-2 '>
                        <img className='object-cover w-64 h-64' src={imageUrl}/>s
                    </div>
                ))
            }
            </div>
            </div>
        </div>  
    </div>
  )
        }
//Chatgpt solution
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

// function ImageSlider(props) {
//   const imageArray = props.imageArray;
//   const handleModal = props.handleModal;

//   const [slideNumber, setSlideNumber] = useState(0);
//   const [imageNumber, setImageNumber] = useState(0);

//   const prevSlide = () => {
//     if (imageNumber === 0) {
//       if (slideNumber === 0) {
//         setSlideNumber(imageArray.length - 1);
//       } else {
//         setSlideNumber(slideNumber - 1);
//       }
//       setImageNumber(imageArray[slideNumber].length - 1);
//     } else {
//       setImageNumber(imageNumber - 1);
//     }
//   }

//   const nextSlide = () => {
//     if (imageNumber === imageArray[slideNumber].length - 1) {
//       if (slideNumber === imageArray.length - 1) {
//         setSlideNumber(0);
//       } else {
//         setSlideNumber(slideNumber + 1);
//       }
//       setImageNumber(0);
//     } else {
//       setImageNumber(imageNumber + 1);
//     }
//   }

//   return (
//     <div>
//       <div className='sliderWrap'>
//         <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleModal}  />
//         <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
//         <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
//         <div className='fullScreenImage'>
//           <img src={imageArray[slideNumber][imageNumber]} alt='' />           
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;


export default Slider;