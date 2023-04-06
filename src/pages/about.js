import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const About = () => {
  const [isOpen, setIsOpen] = useState(1);
  const [width, setWidth] = useState(0);
  const variants = {
    hidden: {
      y: -100,
      height: 0,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      height: 'auto',
      transition: {
        y: { stiffness: 1000 },
      },
    },
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
  };
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className={'mt-0 md:mt-8 '}>
      <section className='section mb-6 px-4 md:px-10'>
        <div className='px-4 md:px-6'>
          <h5 className='md:text-[25px] text-xl text-greenVariant'>
            Light Workers Academy
          </h5>
          <div className='underline'></div>
          <p className={'text-md md:text-base'}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            atque explicabo maxime nostrum. Excepturi facere sapiente iste, sed
            porro praesentium, laudantium dolor aperiam veritatis optio quaerat
            impedit. Perferendis, maxime omnis.""Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
            Excepturi facere sapiente iste, sed porro praesentium, laudantium
            dolor aperiam veritatis optio quaerat impedit. Perferendis, maxime
            omnis.""Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ipsum atque explicabo maxime nostrum. Excepturi facere sapiente
            iste, sed porro praesentium, laudantium dolor aperiam veritatis
            optio quaerat impedit. Perferendis, maxime omnis.""Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo
            maxime nostrum. Excepturi facere sapiente iste, sed porro
            praesentium, laudantium dolor aperiam veritatis optio quaerat
            impedit. Perferendis, maxime omnis.""Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
            Excepturi facere sapiente iste, sed porro praesentium, laudantium
            dolor aperiam veritatis optio quaerat impedit. Perferendis, maxime
            omnis."
          </p>
        </div>
      </section>
      <div>
        <section className='bg-gray-100 py-10 px-6'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-4xl uppercase font-semibold text-darkBlue sm:text-5xl'>
                Our History
              </h2>
              <div className='w-16 h-1 mx-auto my-4 bg-darkBlue'></div>
              <p className='mt-3 max-w-2xl mx-auto text-xl text-darkBlue1 text-center sm:mt-4'>
                Here at our school, we are just beginning our journey towards a
                bright future.
              </p>
            </div>
            <div className='mt-10'>
              <ul className='space-y-4'>
                <li className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center h-12 w-12 rounded-md bg-darkgreenVariant text-white'>
                      <svg
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-lg leading-6 font-medium text-darkBlue'>
                      Founded in 2010
                    </h3>
                    <p className='mt-2 text-base text-gray-500'>
                      LightWorkers Academy was founded in 2010 by a group of
                      dedicated educators with a shared vision.
                    </p>
                  </div>
                </li>
                <li className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center h-12 w-12 rounded-md bg-darkgreenVariant text-white'>
                      <svg
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M13 10V3L4 14h7v7l9-11h-7z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-lg leading-6 font-medium text-darkBlue'>
                      Growing Every Year
                    </h3>
                    <p className='mt-2 text-base text-gray-500'>
                      Since our establishment, we have been committed to
                      expanding our academic programs and fostering a vibrant
                      community of learners. Each year, we strive to enhance the
                      educational experience for our students and provide them
                      with the resources they need to achieve their goals.
                    </p>
                  </div>
                </li>
                <li className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center h-12 w-12 rounded-md bg-darkgreenVariant text-white'>
                      <svg
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M15 13c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 -7 15 13z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg leading-6 font-medium text-gray-900'>
                      Founding of LightWorkers Academy
                    </h4>
                    <p className='mt-2 text-base text-gray-500'>
                      Our school was founded in [insert year] by a dedicated
                      group of educators who shared a common vision for a new
                      kind of learning experience. They believed in providing
                      more than just a rigorous academic curriculum, but also in
                      fostering creativity, innovation, and a strong sense of
                      community among our students. Since then, we have been
                      committed to growing and evolving every year to provide
                      the best possible education for our students.
                    </p>
                  </div>
                </li>
                <li className='mt-10 flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center h-12 w-12 rounded-md bg-darkgreenVariant text-white'>
                      <svg
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M15 13c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8-3.866 8-7 3.582 7 8 7zM15 13c0-2.761 2.686-5 6-5s6 2.239 6 5-2.686 5-6 5-6-2.239-6-5z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg leading-6 font-medium text-gray-900'>
                      Expansion and Growth
                    </h4>
                    <p className='mt-2 text-base text-gray-500'>
                      Since its inception, the school has experienced
                      significant growth and expansion, establishing multiple
                      campuses in various cities throughout the country.
                      Presently, the school has gained a reputation for its
                      progressive academic programs, exceptional faculty, and
                      unwavering dedication to fostering a welcoming and
                      all-encompassing educational environment.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className='middle-section bg-darkBlue py-2 px-10 '>
        <div className='section-content my-14'>
          <div className='text-center text-darkgreenVariant text-2xl md:text-3xl'></div>
          <div className='flex flex-col md:flex-row gap-4 md:p-6 my-12 md:my-0'>
            <div
              className='basis-1/3 text-justify font-mulish text-darkgreenVariant'
              onClick={() => handleDisplay(1)}
            >
              <span className='flex font-semibold text-2xl md:text-3xl justify-start items-center'>
                <i className='fa-solid fa-eye bg-darkgreenVariant text-darkBlue p-6 rounded mr-6'></i>
                Our Vision
              </span>
              {width <= 768 && (
                <motion.p
                  initial={'hidden'}
                  animate={isOpen === 1 ? 'visible' : 'hidden'}
                  exit={'hidden'}
                  variants={variants}
                  className='text-md'
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum atque explicabo maxime nostrum. Excepturi facere
                  sapiente iste, sed porro praesentium, laudantium dolor aperiam
                  veritatis optio quaerat impedit. Perferendis, maxime omnis.
                </motion.p>
              )}
              {width > 768 && (
                <p className={'mt-5'}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum atque explicabo maxime nostrum. Excepturi facere
                  sapiente iste, sed porro praesentium, laudantium dolor aperiam
                  veritatis optio quaerat impedit. Perferendis, maxime omnis.
                </p>
              )}
            </div>
            <div
              className='basis-1/3 text-justify font-mulish text-darkgreenVariant'
              onClick={() => handleDisplay(2)}
            >
              <span className='flex font-semibold text-2xl md:text-3xl justify-start items-center'>
                <i className='fa-solid fa-bullseye bg-darkgreenVariant text-darkBlue p-6 rounded mr-6'></i>
                Our Mission
              </span>
              {width <= 768 && (
                <motion.p
                  initial={'hidden'}
                  animate={isOpen === 2 ? 'visible' : 'hidden'}
                  exit={'hidden'}
                  variants={variants}
                  className='text-md'
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum atque explicabo maxime nostrum. Excepturi facere
                  sapiente iste, sed porro praesentium, laudantium dolor aperiam
                  veritatis optio quaerat impedit. Perferendis, maxime omnis.
                </motion.p>
              )}
              {width > 768 && (
                <p className={'mt-5'}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum atque explicabo maxime nostrum. Excepturi facere
                  sapiente iste, sed porro praesentium, laudantium dolor aperiam
                  veritatis optio quaerat impedit. Perferendis, maxime omnis.
                </p>
              )}
            </div>
            <div
              className='basis-1/3 text-justify font-mulish text-darkgreenVariant'
              onClick={() => handleDisplay(3)}
            >
              <span className='flex font-semibold text-2xl justify-start items-center'>
                <i className='fa-solid fa-heart bg-darkgreenVariant text-darkBlue p-6 rounded mr-6'></i>
                Our Values
              </span>
              {width <= 768 && (
                <motion.p
                  initial={'hidden'}
                  animate={isOpen === 3 ? 'visible' : 'hidden'}
                  exit={'hidden'}
                  variants={variants}
                  className='text-md'
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum atque explicabo maxime nostrum. Excepturi facere
                  sapiente iste, sed porro praesentium, laudantium dolor aperiam
                  veritatis optio quaerat impedit. Perferendis, maxime omnis.
                </motion.p>
              )}
              {width > 768 && (
                <p className={'mt-5'}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum atque explicabo maxime nostrum. Excepturi facere
                  sapiente iste, sed porro praesentium, laudantium dolor aperiam
                  veritatis optio quaerat impedit. Perferendis, maxime omnis.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className='section bg-light border-bottom px-4 md:px-10 bg-gray-200'>
        <div className='px-6 md:px-6'>
          <h5 className='md:text-[25px] text-xl text-greenVariant'>
            Why Choose Light Workers Academy?
          </h5>
          <div className='underline'></div>
          <p className={'text-md md:text-base'}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            atque explicabo maxime nostrum. Excepturi facere sapiente iste, sed
            porro praesentium, laudantium dolor aperiam veritatis optio quaerat
            impedit. Perferendis, maxime omnis. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
            Excepturi facere sapiente iste, sed porro praesentium, laudantium
            dolor aperiam veritatis optio quaerat impedit. Perferendis, maxime
            omnis.
          </p>
        </div>
      </section>
      <div className=' md:py-20'>
        <div className='flex flex-col md:flex-row font-mulish'>
          <div className='basis-1/2 pt-5 md:pt-10 '>
            <h1 className='text-lg md:text-2xl font-semibold text-center text-darkBlue'>
              Light Workers Academy Principles
            </h1>
            <p className='max-w-md mx-auto text-md md:text-base text-left text-slate-500 lg:text-left md:py-8 py-4 md:mb-1 md:px-8 px-8'>
              "To have a stable economy, to have a stable democracy, and to have
              a modern government is not enough. We have to build new pillars of
              development. Education, science and technology, innovation and
              entrepreneurship, and more equality." Sebastian Pinera
            </p>
          </div>
          <div className='basis-1/2 md:px-0 px-6 mb-4 md:mb-0'>
            <img
              src='https://images.pexels.com/photos/7750766/pexels-photo-7750766.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              className='lg:top-24 xl:top-0 rounded-2xl px-2  mr-2'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
