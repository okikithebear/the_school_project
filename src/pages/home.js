import React from 'react';

import BootstrapCarousel from "../components/BootstrapCarousel";
import FloatingButton from '../components/FloatingButton';
import IntroSection from '../components/IntroSection';
import MissionSec from '../components/MissionSec';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <div>
                <BootstrapCarousel/>
            </div>
            <section className={'mid-section flex flex-col'}>
                <IntroSection/>
                <MissionSec/>
            </section>
            <section className={'testimonials flex flex-col bg-gray-200'}>
                <Testimonials/>
                <FloatingButton/>
            </section>
        </>
    );
};
export default Home;