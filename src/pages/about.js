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
  const handleDisplay = (sectionId) => {
    setIsOpen(sectionId);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
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
        <section className='bg-gray-100'>
          <div className='p-6 md:p-16'>
            <div className='text-center hidden'>
              <h2 className='text-4xl uppercase font-semibold text-darkBlue sm:text-5xl'>
                Our History
              </h2>
              <div className='w-16 h-1 mx-auto my-4 bg-darkBlue'></div>
              <p className='mt-3 max-w-2xl mx-auto text-xl text-darkBlue1 text-center sm:mt-4'>
                Here at our school, we are just beginning our journey towards a
                bright future.
              </p>
            </div>
            <div className='flex flex-row md:py-0 py-4'>
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
              onClick={() => handleDisplay(3)}
            >
              <span className='flex flex-row items-center justify-between'>
                <span className='flex font-semibold text-2xl md:text-3xl justify-start items-center'>
                  <i className='fa-solid fa-heart bg-darkgreenVariant text-darkBlue p-6 rounded mr-6' />
                  Our Vision
                </span>
                {isOpen !== 3 && (
                  <span>
                    <i className='flex md:hidden fa-solid fa-chevron-down text-4xl'></i>
                  </span>
                )}
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
            <div
              className='basis-1/3 text-justify font-mulish text-darkgreenVariant'
              onClick={() => handleDisplay(2)}
            >
              <span className='flex flex-row items-center justify-between'>
                <span className='flex font-semibold text-2xl md:text-3xl justify-start items-center'>
                  <i className='fa-solid fa-bullseye bg-darkgreenVariant text-darkBlue p-6 rounded mr-6' />
                  Our Mission
                </span>
                {isOpen !== 2 && (
                  <span>
                    <i className='flex md:hidden fa-solid fa-chevron-down text-4xl'></i>
                  </span>
                )}
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
              <span className='flex flex-row items-center justify-between'>
                <span className='flex font-semibold text-2xl md:text-3xl justify-start items-center'>
                  <i className='fa-solid fa-heart bg-darkgreenVariant text-darkBlue p-6 rounded mr-6' />
                  Our Vision
                </span>
                {isOpen !== 3 && (
                  <span>
                    <i className='flex md:hidden fa-solid fa-chevron-down text-4xl'></i>
                  </span>
                )}
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
      <div className=' md:py-8 lg:py-12'>
        <div className='flex flex-col md:flex-col  lg:flex-row font-mulish'>
          <div className='basis-1/2 pt-5 md:pt-10 '>
            <h1 className='text-lg md:text-4xl lg:text-3xl font-semibold text-center text-darkBlue md:py- '>
              Light Workers Academy Principles
            </h1>
            <p
              className='mx-auto max-w-md md:max-w-xl text-md md:text-lg text-left text-slate-500 md:text-center lg:text-justify
                          md:py-8 py-4 md:mb-1 md:px-10 px-10'
            >
              "To have a stable economy, to have a stable democracy, and to have
              a modern government is not enough. We have to build new pillars of
              development. Education, science and technology, innovation and
              entrepreneurship, and more equality." Sebastian Pinera
            </p>
          </div>
          <div className='basis-1/2  px-6  mb-4 md:mb-0 md:py-10 md:px-32'>
            <img
              src='https://images.pexels.com/photos/7750766/pexels-photo-7750766.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              className='lg:top-24 xl:top-0 rounded-2xl px-2  mr-2'
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
