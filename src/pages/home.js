import React from 'react';
import BootstrapCarousel from "../components/BootstrapCarousel";
import IntroSection from '../components/IntroSection';
import MissionSec from '../components/MissionSec';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <BootstrapCarousel/>
            <IntroSection/>
            <MissionSec/>
            <Testimonials/>
        </div>
    );
};
export default Home;