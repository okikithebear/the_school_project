import React from 'react';

const Founder = () => {
  return (
    <div className={'px-4 md:px-10'}>
      <section className='section'>
        <div className='container-fluid flex flex-col p-2 md:p-6 lg:flex-row lg:mb-0 font-mulish'>
          <div className='basis-1/2 lg:mx-0 lg:mb-0 lg:w-1/2'>
            <img
              src='https://images.pexels.com/photos/8618069/pexels-photo-8618069.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              className='relative  lg:top-24 xl:top-0 overflow-x-visible rounded-2xl'
            />
          </div>
          <div className='basis-1/2 md:my-auto lg:w-1/2 flex-wrap'>
            <h1 className='text-2xl md:text-3xl font-semibold lg:text-4xl text-darkBlue my-4'>
              Meet The Man Behind The Dream
            </h1>

            <span className=''>
              <i className='fa fa-quote-left text-2xl text-darkgreenVariant '></i>
            </span>
            <p className='px-3 text-lg italic text-slate-500 w-full md:w-5/6 -mt-4 mx-4'>
              <span>
                You can teach a student a lesson for a day; but if you can teach
                him to learn by creating curiosity, he will continue the
                learning process as long as he lives.
                <br />
                -Clay P. Bedford
              </span>
            </p>
          </div>
        </div>
        <div className='flex flex-col p-2 md:p-10  text-justify font-mulish text-darkBlue1'>
          <span className='font-semibold text-xl md:text-2xl  mb-1 tracking-tight'>
            My Name is
            <span className='text-darkgreenVariant text-xl md:text-2xl'>
              {' '}
              Emmanuel Fakolade
            </span>{' '}
            ~
          </span>
          <p>
            Over the past 2 years we have been able to reachnout to many
            students across the globe, and the outcome of our services and
            indications to humanity through quality education have been met with
            positivity and high recommendations. At lightworkers we have
            qualified teachers, for all subjects who have the passion to turn
            around the grades of students for in a short time. We are
            professionals, we are the best at what we do, we have the best hands
            for all grades/levels, including A-levels and college students.
            Therre is also an arrangment for special studenst who have
            challenges in asmmioleting faster. We have been able to help them
            using various approaches and seen positive outcomes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Founder;
