import React from 'react'

const IntroSection = () => {
    return (
        <div className="flex flex-col md:flex-row lg:mb-0 mt-8 md:mt-24 font-mulish">
            <div className="basis-1/2 space-y-10">
                <h1
                    className="text-5xl font-semibold text-center lg:text-left"
                >
                    We are Schoolname
                </h1>
                <p
                    className="max-w-md mx-auto text-lg text-center text-slate-500  lg:text-left lg:mt-0 lg:mx-0"
                >
                    Our focus is to provide a stimulating early learning and child care experience which promotes each
                    child’s social/emotional, physical and cognitive development.
                </p>
                <div
                    className="flex items-center justify-center w-full space-x-4 "
                >
                    <a
                        href="#"
                        className="p-3 text-sm font-semibold text-white bg-greenVariant hover:bg-greenVariant2 rounded-xl shadow-sm md:text-base"
                    >Apply Here </a>
                </div>
            </div>
            <div className="basis-1/2 lg:mb-0">
                <img
                    src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="relative lg:top-24 xl:top-0 overflow-x-visible rounded-2xl"
                />
            </div>
        </div>
    )
}

export default IntroSection