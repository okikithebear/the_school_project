import React from 'react'

const MissonSec = () => {
  return (
    <div className=" flex flex-col md:flex-col mt-8 md:mt-0 lg:flex-row lg:mb-0 font-mulish md:my-6 md:mt-8">
      <div className="basis-1/2 lg:mx-0 lg:mb-0 lg:w-1/2 md:py-10 md:px-24 lg:py-0 lg:px-0">
        <img
          src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="relative  lg:top-24 xl:top-0 overflow-x-visible rounded-2xl lg:mx-12"
        />
      </div>
      <div className="flex flex-col basis-1/2 space-y-4 md:space-y-10 mt-8 md:mt-8 md:mx-12   lg:w-1/2">
        <h1 className="text-3xl md:text-5xl text-center font-semibold lg:text-5xl text-darkBlue  lg:mx-10">
          Our Mission
        </h1>
        <p className="md:text-2xl lg:text-lg md:mx-12 text-justify md:text-center flex-wrap text-slate-500 md:w-5/6 w-full lg:mt-0 lg:mx-10">
          To educate all students to the highest levels of academic achievement, to enable them to reach and expand their potential, and to prepare them to become productive, responsible, ethical, creative and compassionate members of society.
        </p>
      </div>
    </div>
  )
}

export default MissonSec