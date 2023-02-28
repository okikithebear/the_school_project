import React from 'react';

const About = () => {
    return (
        <div>
            <section className='section mb-6 '>
                <div className='container'>
                    <h5 className='main-heading'>Light Workers Academy</h5>
                    <div className='underline'></div>
                    <p>
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

            <section className='middle-section bg-darkBlue py-2 px-16'>
                <div className='section-content my-16'>
                    <div className='text-center text-darkgreenVariant text-3xl'>
                        <span>Vision, Mission and Values</span>
                        <p className='underline mx-auto'></p>
                    </div>
                    <div className="flex flex-row gap-4 p-6">
                        <div className='basis-1/3 text-justify font-mulish text-darkgreenVariant'>
                            <span className='flex font-semibold text-2xl justify-center'>Our Vision</span>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime
                                nostrum.
                                Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam
                                veritatis optio
                                quaerat impedit. Perferendis, maxime omnis.
                            </p>
                        </div>
                        <div className='basis-1/3 text-justify font-mulish text-darkgreenVariant'>
                            <span className='flex font-semibold text-2xl justify-center'>Our Mission</span>
                            <p className='text-justify pb-2'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime
                                nostrum.
                                Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam
                                veritatis optio
                                quaerat impedit. Perferendis, maxime omnis.
                            </p>
                        </div>
                        <div className='basis-1/3 text-justify font-mulish text-darkgreenVariant'>
                            <span className='flex font-semibold text-2xl justify-center'>Our Values</span>
                            <p className='text-justify pb-2'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime
                                nostrum.
                                Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam
                                veritatis optio
                                quaerat impedit. Perferendis, maxime omnis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section bg-light border-bottom '>
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
            <div className="p-6">
                <div className="flex flex-col md:flex-row lg:mb-0 mt-8 md:mt-24 font-mulish">
                    <div className="basis-1/2 space-y-10">
                        <h1
                            className="text-3xl font-semibold text-center text-darkBlue"
                        >
                            Light Workers Academy Principles
                        </h1>
                        <p
                            className="max-w-md mx-auto text-lg text-center text-slate-500  lg:text-left lg:mt-0 lg:mx-0"
                        >
                            "To have a stable economy, to have a stable democracy, and to have a modern government is
                            not enough. We have to build new pillars of development. Education, science and technology,
                            innovation and entrepreneurship, and more equality." Sebastian Pinera
                        </p>
                    </div>
                    <div className="basis-1/2 lg:mb-0">
                        <img
                            src="https://images.pexels.com/photos/7750766/pexels-photo-7750766.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className="relative lg:top-24 xl:top-0 overflow-x-visible rounded-2xl"
                        />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;