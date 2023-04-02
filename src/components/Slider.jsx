import React from 'react'
import { useState } from 'react'
import { imageArray } from '../images'

const Slider = ({ slideNumber, handleModal }) => {
    const [imageNumber, setImageNumber] = useState(0)

    // Previous Image
    const prevSlide = () => {
        imageNumber === 0
            ? setImageNumber(imageArray[slideNumber].length - 1)
            : setImageNumber(imageNumber - 1)
    }

    // Next Image  
    const nextSlide = () => {
        imageNumber + 1 === imageArray[slideNumber].length
            ? setImageNumber(0)
            : setImageNumber(imageNumber + 1)
    }



    return (
        <div>

            <div
                className='sliderWrap flex fixed z-20 h-screen w-screen bottom-0 bg-black/[0.9] justify-center items-center overflow-hidden'>

                <div className="fixed top-10 right-10 opacity-50 z-30 cursor-pointer" onClick={handleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20"
                        fill="currentColor">
                        <line x1="5" y1="5" x2="15" y2="15" stroke="#70BF4B" strokeWidth="2" />
                        <line x1="15" y1="5" x2="5" y2="15" stroke="#70BF4B" strokeWidth="2" />
                    </svg>
                </div>

                <div className={"flex items-center opacity-50 z-30 cursor-pointer"} onClick={prevSlide}>
                    <svg className="absolute left-10" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M40.6353 10.6027C41.3804 11.3332 41.4481 12.4763 40.8385 13.2818L40.6353 13.5126L23.8165 30L40.6353 46.4874C41.3804 47.2179 41.4481 48.361 40.8385 49.1666L40.6353 49.3973C39.8901 50.1278 38.7241 50.1942 37.9024 49.5966L37.667 49.3973L19.3647 31.455C18.6196 30.7245 18.5519 29.5813 19.1615 28.7758L19.3647 28.545L37.667 10.6027C38.4867 9.79911 39.8156 9.79911 40.6353 10.6027Z"
                            fill="#70BF4B" />
                    </svg>
                </div>

                <div className={"flex items-center opacity-50 z-30 cursor-pointer"} onClick={nextSlide}>
                    <svg className="absolute right-10" width="60" height="60" viewBox="0 0 60 60" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.3647 49.3973C18.6196 48.6668 18.5519 47.5237 19.1615 46.7182L19.3647 46.4874L36.1835 30L19.3647 13.5126C18.6196 12.7821 18.5519 11.639 19.1615 10.8334L19.3647 10.6027C20.1099 9.87216 21.2759 9.80575 22.0976 10.4034L22.333 10.6027L40.6353 28.545C41.3804 29.2755 41.4481 30.4187 40.8385 31.2242L40.6353 31.455L22.333 49.3973C21.5133 50.2009 20.1844 50.2009 19.3647 49.3973Z"
                            fill="#70BF4B" />
                    </svg>
                </div>

                <div className='flex flex-col'>
                    <div className='fullScreenImage flex relative items-center justify-center w-screen '>
                        <img src={imageArray[slideNumber][imageNumber]}
                            className='object-cover rounded md:h-[35em] md:w-[50em]  h-[40em] w-[60em]' alt=''
                        />
                    </div>

                    <div className='flex image-thumbnails mx-auto mt-4 '>
                        {
                            imageArray[slideNumber].map((imageUrl, index) => (
                                <div key={index} className='relative basis-1/6'>
                                    <img alt="" className='object-cover w-32 h-32 hover:scale-125 hover:rounded transition duration-300' src={imageUrl} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;