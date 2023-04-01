import React from 'react'
import MobileTestimonial from "./MobileAbout";
import {useEffect,useState} from "react";
import DesktopTestimonial from "./DesktopTestimonial";

const Testimonials = () => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    return (
        <div className="px-6">
           <div className="heading flex justify-center text-3xl md:text-5xl font-bold font-mulish text-gray-400 pb-8">
            <span className={'text-center text-darkBlue my-6'}>Testimonials</span>
           </div>
            {width <= 768 ? <MobileTestimonial/>:<DesktopTestimonial/> }


        </div>
    )
}

export default Testimonials