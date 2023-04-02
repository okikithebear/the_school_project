import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {useEffect} from 'react';


const About = () => {
    const [isOpen, setIsOpen] = useState(1)
    const [width, setWidth] = useState(0)
    const variants = {
        hidden: {
            y: -100,
            height: 0,
            opacity: 0,
            transition: {
                y: {stiffness: 1000, velocity: -100}
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            height: 'auto',
            transition: {
                y: {stiffness: 1000}
            }
        }
    };
    // const zoom = {
    //     visible: {
    //         opacity: 1,
    //         transition: {
    //             scale: 1.3
    //         },
    //         hidden: {
    //             opacity: 1
    //         }
    //     }
    // };
    const handleDisplay = (sectionId) => {
        setIsOpen(sectionId);
    }
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    return (
        <div className={"mt-0 md:mt-8 "}>
            <section className='section mb-6 px-4 md:px-10'>
                <div className='px-4 md:px-6'>
                    <h5 className='md:text-[25px] text-xl text-greenVariant'>Light Workers Academy</h5>
                    <div className='underline'></div>
                    <p className={"text-md md:text-base"}>
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis.""Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis.""Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis.""Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis.""Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis."
                    </p>
                </div>
            </section>

            <section className='middle-section bg-darkBlue py-2 px-10 '>
                <div className='section-content my-14'>
                    <div className='text-center text-darkgreenVariant text-2xl md:text-3xl'>
                        {/*<span>Vision, Mission and Values</span>*/}
                        {/*<p className='underline mx-auto'></p>*/}
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:p-6 my-12 md:my-0">
                        <div className='basis-1/3 text-justify font-mulish text-darkgreenVariant'
                             onClick={() => handleDisplay(1)}>
                            <span className='flex font-semibold text-2xl md:text-3xl justify-start items-center'>
                                <i className="fa-solid fa-quote-right bg-darkgreenVariant text-darkBlue p-6 rounded mr-6"></i>
                                Our Vision
                            </span>
                            {width <= 768 &&
                                <motion.p
                                    initial={"hidden"}
                                    animate={isOpen === 1 ? "visible" : "hidden"}
                                    exit={"hidden"}
                                    variants={variants}
                                    className="text-md">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo
                                    maxime
                                    nostrum.
                                    Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam
                                    veritatis optio
                                    quaerat impedit. Perferendis, maxime omnis.
                                </motion.p>
                            }
                            {width > 768 &&
                                 
                                <p className={'mt-5'}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo
                                    maxime
                                    nostrum.
                                    Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam
                                    veritatis optio
                                    quaerat impedit. Perferendis, maxime omnis.
                                </p>
                            }
                        </div>
                        <div className='basis-1/3 text-justify font-mulish text-darkgreenVariant'
                             onClick={() => handleDisplay(2)}>
                            <span className='flex font-semibold text-2xl md:text-3xl justify-start items-center'>
                                <i className="fa-solid fa-bullseye bg-darkgreenVariant text-darkBlue p-6 rounded mr-6"></i>
                                Our Mission
                            </span>
                            {width <= 768 &&
                                <motion.p
                                    initial={"hidden"}
                                    animate={isOpen === 2 ? "visible" : "hidden"}
                                    exit={"hidden"}
                                    variants={variants}
                                    className="text-md">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo
                                    maxime
                                    nostrum.
                                    Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam
                                    veritatis optio
                                    quaerat impedit. Perferendis, maxime omnis.
                                </motion.p>
                            }
                            {width > 768 &&
                                <p className={'mt-5'}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo
                                    maxime
                                    nostrum.
                                    Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam
                                    veritatis optio
                                    quaerat impedit. Perferendis, maxime omnis.
                                </p>
                            }
                        </div>
                        <div className='basis-1/3 text-justify font-mulish text-darkgreenVariant'
                             onClick={() => handleDisplay(3)}>
                            <span className='flex font-semibold text-2xl justify-start items-center'>
                                <i className="fa-solid fa-heart bg-darkgreenVariant text-darkBlue p-6 rounded mr-6"></i>
                                Our Values
                            </span>
                            {width <= 768 &&
                                <motion.p
                                    initial={"hidden"}
                                    animate={isOpen === 3 ? "visible" : "hidden"}
                                    exit={"hidden"}
                                    variants={variants}
                                    className="text-md">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo
                                    maxime
                                    nostrum.
                                    Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam
                                    veritatis optio
                                    quaerat impedit. Perferendis, maxime omnis.
                                </motion.p>
                            }
                            {width > 768 &&
                                <p className={'mt-5'}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo
                                    maxime
                                    nostrum.
                                    Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam
                                    veritatis optio
                                    quaerat impedit. Perferendis, maxime omnis.
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className='section bg-light border-bottom px-4 md:px-10 bg-gray-200'>
                <div className='px-4 md:px-6'>
                    <h5 className='md:text-[25px] text-xl text-greenVariant'>Why Choose Light Workers Academy?</h5>
                    <div className='underline'></div>
                    <p className={'text-md md:text-base'}>
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis. Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis.
                    </p>
                </div>
            </section>
            <div className="py-0 md:py-20 ">
                <div className="flex flex-col md:flex-row font-mulish">
                    <div className="basis-1/2 pt-5 md:pt-10 ">
                        <h1
                            className="text-2xl md:text-3xl font-semibold text-center text-darkBlue"
                        >
                            Light Workers Academy Principles
                        </h1>
                        <p
                            className="max-w-md mx-auto text-md md:text-lg text-center text-slate-500 lg:text-left md:py-14 p-6 md:p-0"
                        >
                            "To have a stable economy, to have a stable democracy, and to have a modern government is
                            not enough. We have to build new pillars of development. Education, science and technology,
                            innovation and entrepreneurship, and more equality." Sebastian Pinera
                        </p>

                    </div>
                    <div className="basis-1/2 md:px-0 px-6 mb-4 md:mb-0">
                        <img
                            src="https://images.pexels.com/photos/7750766/pexels-photo-7750766.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className="lg:top-24 xl:top-0 rounded-2xl "
                        />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;