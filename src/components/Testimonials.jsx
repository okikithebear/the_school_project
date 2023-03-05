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
        <div className="px-6 my-4">
           <div className="heading flex justify-center text-3xl md:text-5xl font-bold font-mulish text-white py-8">
            <span className={'text-center'}>Testimonials</span>
           </div>
            {width <= 768 ? <MobileTestimonial/>:<DesktopTestimonial/> }


        </div>
    )
}

export default Testimonials