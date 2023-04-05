import React from 'react';

import IntroSection from '../components/IntroSection';
import MissionSec from '../components/MissionSec';
import Testimonials from '../components/Testimonials';
import Carousel from '../components/Carousel';
import {motion, AnimatePresence} from 'framer-motion';
import {useInView} from 'react-intersection-observer';


const Home = ({modalActions}) => {
    // const transition = {
    //     duration: 0.3,
    //     type: "tween",
    // }
    const bannerVariants = {
        hidden: {
            opacity: 0,
            y: 70,
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 1,
                type: "tween"
            },
        }),

    };
    const lineVariants = {
        hidden: {
            opacity: 0,
            y: 70,
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.4,
                duration: 1,
                type: "tween"
            },
        }),
        exit: {
            y: 0,
            opacity: 0
        }

    };
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce:true
    });

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut'}}
        >
            <div>
                <Carousel/>
            </div>
            <section className={'mid-section flex flex-col px-4 md:px-10'}>
                <IntroSection modalActions={modalActions}/>
                <MissionSec/>
            </section>
            <div className=' flex md:flex-row flex-col text-darkgreenVariant justify-around bg-darkBlue px-2 md:mt-28
                            md:px-12 py-8 md:py-4 my-8 md:my-14 font-mulish h-[30em] md:h-[10em]' ref={ref}>
                <AnimatePresence>
                    {inView && (
                        <>
                            <motion.span
                                key='student'
                                className='flex flex-col m-2 text-xl md:text-2xl justify-start'
                                custom={0}
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                                variants={bannerVariants}
                            >
                                <span className='text-5xl font-mulish text-white font-semibold'>120</span>
                                <motion.span
                                    className='underline text-darkgreenVariant'
                                    initial='hidden'
                                    animate='visible'

                                    variants={lineVariants}
                                />
                                <motion.span
                                    className='font-light align-middle font-mulish text-white'
                                    initial='hidden'
                                    animate='visible'

                                    variants={lineVariants}
                                >
                                    Students
                                </motion.span>


                            </motion.span>
                            <motion.span
                                key='teacher'
                                className='flex flex-col m-3 text-xl md:text-2xl justify-start'
                                custom={1}
                                initial='hidden'
                                animate='visible'

                                variants={bannerVariants}
                            >
                                {/*<i*/}
                                {/*    aria-hidden='true'*/}
                                {/*    className='fas fa-chalkboard-teacher text-darkBlue bg-darkgreenVariant p-6 rounded-md'*/}
                                {/*></i>*/}
                                <span className='text-5xl font-mulish text-white'>10</span>
                                <motion.span
                                    className='underline text-darkgreenVariant'
                                    initial='hidden'
                                    animate='visible'

                                    variants={lineVariants}
                                />
                                <motion.span
                                    className='font-light align-middle font-mulish text-white'
                                    initial='hidden'
                                    animate='visible'

                                    variants={lineVariants}
                                >
                                    Teachers
                                </motion.span>
                            </motion.span>
                            <motion.span
                                key='graduation'
                                className='flex flex-col m-3 text-xl md:text-2xl justify-start'
                                custom={2}
                                initial='hidden'
                                animate='visible'

                                variants={bannerVariants}
                            >
                                {/*<i*/}
                                {/*    aria-hidden='true'*/}
                                {/*    className='far fa-bell text-darkBlue bg-darkgreenVariant p-6 rounded-md'*/}
                                {/*></i>*/}
                                <span className='text-5xl font-mulish text-white font-semibold'>100%</span>
                                <motion.span
                                    className='underline text-darkgreenVariant'
                                    initial='hidden'
                                    animate='visible'

                                    variants={lineVariants}
                                />
                                <motion.span
                                    className='font-light align-middle font-mulish text-white'
                                    initial='hidden'
                                    animate='visible'

                                    variants={lineVariants}
                                >
                                    Graduation Rate
                                </motion.span>
                            </motion.span>
                        </>
                    )}
                </AnimatePresence>

                {/*<span className='flex flex-row m-4 text-xl md:text-2xl items-center'>*/}
                {/*  <i*/}
                {/*      aria-hidden='true'*/}
                {/*      className='fas fa-book-reader text-darkBlue bg-darkgreenVariant p-6 rounded-md'*/}
                {/*  ></i>*/}
                {/*  <span className='mx-5 align-middle font-mulish text-white'>*/}
                {/*    Students: 120*/}
                {/*  </span>*/}
                {/*</span>*/}
                {/*        <span className='flex flex-row m-4 text-xl md:text-2xl items-center'>*/}
                {/*  <i*/}
                {/*      aria-hidden='true'*/}
                {/*      className='fas fa-chalkboard-teacher text-darkBlue bg-darkgreenVariant p-6 rounded-md'*/}
                {/*  ></i>*/}
                {/*  <span className='mx-5 align-middle text-white font-mulish '>*/}
                {/*    Teachers: 10*/}
                {/*  </span>*/}
                {/*</span>*/}
                {/*        <span className='flex flex-row m-4 text-xl md:text-2xl items-center'>*/}
                {/*  <i*/}
                {/*      aria-hidden='true'*/}
                {/*      className='far fa-bell text-darkBlue bg-darkgreenVariant p-6 rounded-md'*/}
                {/*  ></i>*/}
                {/*  <span className='mx-5 align-middle font-mulish text-white'>*/}
                {/*    Graduation Rate: 100%*/}
                {/*  </span>*/}
                {/*</span>*/}
            </div>
            <section className={'testimonials flex flex-col px-4 md:px-10 pb-10'}>
                <Testimonials/>
            </section>
        </motion.div>
    );

};
export default Home;
