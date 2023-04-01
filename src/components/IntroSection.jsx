import React from 'react'

const IntroSection = ({modalActions}) => {
    return (
        <div className="flex flex-col md:flex-row lg:mb-0 mt-8 md:mt-24 font-mulish">
            <div className="basis-1/2 space-y-4 md:space-y-10">
                <h1
                    className="md:text-5xl text-2xl font-semibold text-left md:text-center text-darkBlue"
                >
                    Light Workers Academy
                </h1>
                <p
                    className="flex flex-wrap md:w-3/4 w-full py-4 text-justify md:text-center mx-auto md:text-lg text-slate-500 lg:mt-0"
                >
                    Lightworkers Academy was founded in 2020 with the sole purpose of keeping students' hopes alive.
                    The vision was conceived during the Covid 19 pandemic in an effort to make the classroom accessible
                    to students worldwide regardless of limitations.
                </p>
                <div
                    className="flex items-center justify-center w-full space-x-4 text-white"
                >
                    <button
                        onClick={()=> modalActions.handleModal(modalActions.showModal)}
                        className="p-4 text-sm font-semibold bg-darkBlue1 hover:bg-darkBlue hover:text-darkgreenVariant rounded-xl shadow-sm md:text-base"
                    >Apply Here </button>
                </div>
            </div>
            <div className="md:flex hidden basis-1/2 lg:mb-0">
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