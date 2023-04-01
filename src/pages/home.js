import React from 'react';

import BootstrapCarousel from "../components/BootstrapCarousel";
import IntroSection from '../components/IntroSection';
import MissionSec from '../components/MissionSec';
import Testimonials from '../components/Testimonials';

const Home = ({modalActions}) => {
    return (
        <>
            <div>
                <BootstrapCarousel/>
            </div>
            <section className={'mid-section flex flex-col px-10'}>
                <IntroSection modalActions={modalActions}/>
                <MissionSec/>
            </section>
            <div className='flex flex-row text-darkgreenVariant justify-between bg-darkBlue px-10 my-14 font-mulish'>
                <span className='flex flex-row m-4  text-2xl items-center relative'>
                    <i aria-hidden="true" className="fas fa-book-reader text-darkBlue bg-darkgreenVariant p-6 rounded"></i>
                    <span className='mx-4 align-middle font-mulish text-white'>Students: 120</span>
                </span>
                <span className='flex flex-row m-3  items-center'>
                    <i aria-hidden="true" className="fas fa-chalkboard-teacher  text-2xl text-darkBlue bg-darkgreenVariant p-6 rounded"></i>
                    <span className='mx-4 align-middle text-white font-mulish text-2xl'>Teachers: 10</span>
                </span>
                <span className='flex flex-row m-3  text-2xl items-center'>
                  <i aria-hidden="true" className="far fa-bell text-darkBlue bg-darkgreenVariant p-6 rounded"></i>
                    <span className='mx-4 align-middle font-mulish text-white'>Graduation Rate: 100%</span>
                </span>
            </div>
            <section className={'testimonials flex flex-col px-10 pb-10'}>
                <Testimonials/>
            </section>
        </>
    );
};
export default Home;