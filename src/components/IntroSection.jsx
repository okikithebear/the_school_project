import React from 'react'

const IntroSection = () => {
  return (
    <section id="hero">
       <div
        className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0 mt-4"
      >
        <div className="flex flex-col space-y-10 mt-16 lg:mt-16 lg:w-1/2">
          <h1
            className="text-3xl font-semibold text-center lg:text-5xl lg:text-left"
          >
            We are Schoolname
          </h1>
          <p
            className="max-w-md mx-auto text-lg text-center text-slate-500  lg:text-left lg:mt-0 lg:mx-0"
          >
           Our focus is to provide a stimulating early learning and child care experience which promotes each child’s social/emotional, physical and cognitive development.
          </p>
          <div
            className="flex items-center justify-center w-full space-x-4 "
          >
            <a
              href="#"
              className="p-3 text-sm font-semibold text-white bg-greenVariant hover:bg-green-600 hover:text-white rounded-xl shadow-md border-2 border-gray-300 md:text-base"
              >Apply Here </a>
          </div>
        </div>
        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero"></div>
          <img
            src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default IntroSection