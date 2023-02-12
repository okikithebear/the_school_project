import React from 'react'

const MissonSec = () => {
  return (
    <div className="container-fluid flex flex-col p-6 lg:flex-row lg:mb-0 font-mulish">
     <div className="basis-1/2 lg:mx-0 lg:mb-0 lg:w-1/2">
       <img
         src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt=""
         className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible rounded-2xl"
       />
     </div>
     <div className="basis-1/2 space-y-10 mt-16 lg:mt-16 lg:w-1/2 flex-wrap">
            <h1 className="text-3xl font-semibold lg:text-5xl ">
                Our Mission
            </h1>
            <p className=" text-lg text-slate-500 w-5/6 lg:mt-0 lg:mx-0">
                To educate all students to the highest levels of academic achievement, to enable them to reach and expand their potential, and to prepare them to become productive, responsible, ethical, creative and compassionate members of society.
            </p>
        </div>
    </div>
  )
}

export default MissonSec