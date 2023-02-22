import React from 'react';
import MissonSec from '../components/MissionSec';

const About = () => {
    return (
        <div>
            <section className='section  bg-light border-bottom'>
                <div className='container'>
                    <h5 className='main-heading'>Light Workers Academy</h5>
                    <div className='underline'></div>
                    <p>
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis."
                    </p>
                </div>
            </section>
            <div className="p-6">
                <MissonSec/>
            </div>
            <section className='section  bg-light border-bottom'>
                <div className='container'>
                    <h5 className='main-heading'>Why Choose Light Workers Academy?</h5>
                    <div className='underline'></div>
                    <p>
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis. Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis.
                    </p>
                </div>
            </section>

            <section>
      <div
        className="relative container flex flex-col max-w-6xl mx-auto my-56 px-6 text-gray-900 md:flex-row md:p-0"
      >
        <img src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div
          class="top-24 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20"
        >
          <h2
            className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-darkBlue1 uppercase md:text-5xl md:mt-0 md:text-left"
          >
            The leader in interactive Teaching
          </h2>
          <p className="max-w-md  text-center md:text-left">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
            Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
            quaerat impedit. Perferendis, maxime omnis. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Ipsum atque explicabo maxime nostrum.
            Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
            quaerat impedit. Perferendis, maxime omnis.
          </p>
          </div>
      </div>
    </section>
        </div>
    );
};

export default About;