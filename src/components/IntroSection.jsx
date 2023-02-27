import React from 'react'

const IntroSection = ({modalActions}) => {
    return (
        <div className="flex flex-col md:flex-row lg:mb-0 mt-8 md:mt-24 font-mulish">
            <div className="basis-1/2 space-y-10">
                <h1
                    className="text-5xl font-semibold text-center text-darkBlue"
                >
                    Light Workers Academy
                </h1>
                <p
                    className="max-w-md mx-auto text-lg text-center text-slate-500  lg:text-left lg:mt-0 lg:mx-0"
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
                        className="p-3 text-sm font-semibold bg-darkBlue1 hover:bg-darkBlue hover:text-darkgreenVariant rounded-xl shadow-sm md:text-base"
                    >Apply Here </button>
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