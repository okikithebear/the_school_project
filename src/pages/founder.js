import React from 'react';
import Teacher1 from '../Images/Teacher1.jpg'


const Founder = () => {
    return (
        <div>
            <section className='section'>
                <div className="container-fluid flex flex-col p-6 lg:flex-row lg:mb-0 font-mulish">
                    <div className="basis-1/2 lg:mx-0 lg:mb-0 lg:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/8618069/pexels-photo-8618069.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className="relative  lg:top-24 xl:top-0 overflow-x-visible rounded-2xl"
                        />
                    </div>
                    <div className="basis-1/2 space-y-10 mt-16 lg:mt-16 lg:w-1/2 flex-wrap">
                        <h1 className="text-3xl font-semibold lg:text-5xl text-darkBlue">
                            Meet The Man Behind The Dream
                        </h1>
                        <p className=" text-lg text-slate-500 w-5/6 lg:mt-0 lg:mx-0">
                            You can teach a student a lesson for a day; but if you can teach him to learn by creating
                            curiosity, he will continue the learning process as long as he lives.”
                            -Clay P. Bedford
                        </p>
                    </div>
                </div>
                <div className='container col-md-4   text-justify font-mulish  text-darkBlue1'>
                    <h4  className='font-bold text-xl text-darkgreenVariant'>Hello!</h4>
                    <h2 className='font-semibold text-2xl mt-1 mb-1'>My Name is <span className='text-darkgreenVariant text-3xl md:text-xlnnpm start'>Emmanuel Fakolade</span> ~</h2>
                    <p>
                        Over the past 2 years we have been able to reachnout to many students across the globe, and the outcome of our services and indications to humanity through quality education have been met with positivity and high recommendations. At lightworkers we have qualified teachers, for all subjects who have the passion to turn around the grades of students for in a short time.
                        We are professionals, we are the best at what we do, we have the best hands for all grades/levels, including A-levels and college students. Therre is also an arrangment for special studenst who have challenges in asmmioleting faster. We have been able to help them using various approaches and seen positive outcomes.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Founder;