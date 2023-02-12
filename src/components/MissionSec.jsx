import React from 'react'

const MissonSec = () => {
  return (
    <section>
    <div
     class="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0"
   >
     <div class="flex flex-col space-y-10 mt-16 lg:mt-16 lg:w-1/2">
       <h1
         class="text-3xl font-semibold text-center lg:text-6xl lg:text-left"
       >
        Our Mission
       </h1>
       <p
         class="max-w-md mx-auto text-lg text-center text-slate-500 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0"
       >
       To educate all students to the highest levels of academic achievement, to enable them to reach and expand their potential, and to prepare them to become productive, responsible, ethical, creative and compassionate members of society.
       </p>
       <div
         class="flex items-center justify-center w-full space-x-4 lg:justify-start"
       >
         {/* <a
           href="#"
           class="p-4 text-sm font-semibold text-white bg-gray-500 hover:bg-white hover:text-gray-400 rounded-xl shadow-md border-2 border-gray-300 md:text-base"
           >Apply Here </a> */}
       </div>
     </div>
     <div class="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
       <div></div>
       <img
         src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt=""
         class="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
       />
     </div>
   </div>
 </section>
  )
}

export default MissonSec