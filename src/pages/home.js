
import React from 'react';
import BootstrapCarousel from "../components/BootstrapCarousel";
import IntroSection from '../components/IntroSection';
import MissonSec from '../components/MissonSec';
import Testimonials from '../components/Testimonials';
const Home = () => {
    return (
        <div>
            <BootstrapCarousel/>
<IntroSection/>
           <MissonSec/>
           <Testimonials/>
        </div>
    );
};
export default Home;