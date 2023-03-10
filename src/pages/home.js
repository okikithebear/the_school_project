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
            <section className={'mid-section flex flex-col'}>
                <IntroSection modalActions={modalActions}/>
                <MissionSec/>
            </section>
            <section className={'testimonials flex flex-col bg-gray-200'}>
                <Testimonials/>
            </section>
        </>
    );
};
export default Home;