import React from 'react'

const MissonSec = () => {
  return (
    <section>
    <div
     className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0"
   >
     <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
       <div></div>
       <img
         src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt=""
         className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible rounded-2xl"
       />
     </div>
        <div className="flex flex-col space-y-10 mt-16 lg:mt-16 lg:w-1/2">
            <h1
                className="text-3xl font-semibold text-center lg:text-5xl lg:text-left"
            >
                Our Mission
            </h1>
            <p
                className="max-w-md mx-auto text-lg text-center text-slate-500 lg:text-left lg:mt-0 lg:mx-0"
            >
                To educate all students to the highest levels of academic achievement, to enable them to reach and expand their potential, and to prepare them to become productive, responsible, ethical, creative and compassionate members of society.
            </p>
            <div
                className="flex items-center justify-center w-full space-x-4 lg:justify-start"
            >
                {/* <a
           href="#"
           className="p-4 text-sm font-semibold text-white bg-gray-500 hover:bg-white hover:text-gray-400 rounded-xl shadow-md border-2 border-gray-300 md:text-base"
           >Apply Here </a> */}
            </div>
        </div>

    </div>
 </section>
  )
}

export default MissonSec