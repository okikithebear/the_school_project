import React from 'react';
import MissonSec from '../components/MissionSec';

const About = () => {
    return (
        <div>
            <section className='py-4 bg-greenVariant2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                        <h4>About Us</h4>
                        </div>
                    <div className='col-md-8 my-auto'>
                        <h6 className='float-end'>
                            Home / About Us
                        </h6>
                    </div>
                    </div>
                </div>
            </section>
            <section className='section  bg-light border-bottom'>
                <div className='container'>
                    <h5 className='main-heading'>School Name</h5>
                    <div className='underline'></div>
                    <p>
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis."
                    </p>
                </div>
            </section>

            <MissonSec/>
            <section className='section  bg-light border-bottom'>
                <div className='container'>
                    <h5 className='main-heading'>Why School Name?</h5>
                    <div className='underline'></div>
                    <p>
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                        Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                        quaerat impedit. Perferendis, maxime omnis.
                    </p>
                </div>
            </section>


        </div>
    );
};

export default About;