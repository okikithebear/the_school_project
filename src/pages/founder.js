import React from 'react';
import Teacher1 from '../Images/Teacher1.jpg'


const Founder = () => {
    return (
        <div>
            <section className='section'>
                <h1 className='font-semibold text-center text-6xl  text-darkBlue1'>Founders</h1>
                <div className="container-fluid flex flex-col p-6 lg:flex-row lg:mb-0 font-mulish">
                    <div className="basis-1/2 lg:mx-0 lg:mb-0 lg:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/7414209/pexels-photo-7414209.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className="relative  lg:top-24 xl:top-0 overflow-x-visible rounded-2xl"
                        />
                    </div>
                    <div className="basis-1/2 space-y-10 mt-16 lg:mt-16 lg:w-1/2 flex-wrap">
                        <h1 className="text-3xl font-semibold lg:text-5xl text-darkBlue">
                            Meet The people Behind The Dream
                        </h1>
                        <p className=" text-lg text-slate-500 w-5/6 lg:mt-0 lg:mx-0">
                            You can teach a student a lesson for a day; but if you can teach him to learn by creating
                            curiosity, he will continue the learning process as long as he lives.”
                            -Clay P. Bedford
                        </p>
                    </div>
                </div>
                <div className='container col-md-4   text-justify font-mulish  text-darkBlue1'>
                    <h3 className='font-semibold text-2xl'>Babajide David and Lekan Aina ~</h3>
                    <p>
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis." "Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio

                        quaerat impedit. Perferendis, maxime omnis."
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Founder;