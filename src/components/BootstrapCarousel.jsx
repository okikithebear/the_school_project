import React, {useState} from "react";
import {Carousel} from 'react-bootstrap';
import {motion} from 'framer-motion';
import SchoolPic1 from '../Images/SchoolPic1.jpg'
import SchoolPic2 from '../Images/SchoolPic2.jpg'
import SchoolPic3 from '../Images/SchoolPic3.jpg'

function BootstrapCarousel() {
    const [carouselIndex, setCarouselIndex] = useState(0)
    const variants = {
        hidden: {
            x: -100,
            opacity: 0,
            transition: {
                velocity: 1000
            }
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                velocity: 1000
            }
        }
    };
    const handleCarouselIndex = (selectedIndex, e) => {
        setCarouselIndex(selectedIndex)
    }

    return (

        <Carousel controls={false} className='carousel-inner' activeIndex={carouselIndex}
                  onSelect={handleCarouselIndex}>
            <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100 object-cover"
                    src={SchoolPic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={carouselIndex === 0 ? { opacity: 1}:""}
                        transition={{duration: 1.5, ease: "easeInOut",delay:1}}
                        className={"flex flex-col absolute w-[15em] h-32 bg-darkBlue -left-32 bottom-52 border-l-8" +
                            " border-l-darkgreenVariant transition-all duration-300"}>
                        <p className={"text-white font-mulish text-2xl px-6 pt-6 pb-2 font-bold"}>Ideas are worth
                            spreading</p>
                        <span className={""}>- Charles </span>
                    </motion.div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100 object-cover"

                    src={SchoolPic2}

                    alt="Second slide"
                />
                <Carousel.Caption>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={carouselIndex === 1 ? {opacity: 1}:""}
                        transition={{duration: 1.5, ease: "easeInOut",delay:1}}
                        className={"flex flex-col absolute w-[15em] h-32 bg-darkBlue -left-32 bottom-52 border-l-8" +
                            " border-l-darkgreenVariant transition-all duration-300"}>
                        <p className={"text-white font-mulish text-2xl px-6 pt-6 pb-2 font-bold"}>Ideas are worth
                            spreading</p>
                        <span className={""}>- Charles </span>
                    </motion.div>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100 object-cover"
                    src={SchoolPic3}

                    alt="Third slide"
                />
                <Carousel.Caption>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={carouselIndex === 2 ? {opacity: 1}:""}
                        transition={{duration: 1.5, ease: "easeInOut", delay:1}}
                        className={"flex flex-col absolute w-[15em] h-32 bg-darkBlue -left-32 bottom-52 border-l-8" +
                            " border-l-darkgreenVariant transition-all duration-300"}>
                        <p className={"text-white font-mulish text-2xl px-6 pt-6 pb-2 font-bold"}>Ideas are worth
                            spreading</p>
                        <span className={""}>- Charles </span>
                    </motion.div>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    );
}

export default BootstrapCarousel;