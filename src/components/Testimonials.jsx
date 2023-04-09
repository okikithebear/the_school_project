import React from 'react'
import MobileTestimonial from "./MobileAbout";
import { useEffect, useState } from "react";
import DesktopTestimonial from "./DesktopTestimonial";

const Testimonials = () => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    return (
        <div className="md:px-6">
            <div className="heading flex flex-col justify-center items-center text-3xl md:text-5xl font-bold font-mulish text-gray-400 pb-3">
                <span className={'text-center text-darkBlue my-1 md:my-4'}>Testimonials</span>
                <div class="block md:hidden">
                    <span class="text-center text-darkgreenVariant text-lg p-2">Swipe to see more</span>
                </div>

            </div>
            {width <= 766 ? <MobileTestimonial /> : <DesktopTestimonial />}


        </div>
    )
}

export default Testimonials