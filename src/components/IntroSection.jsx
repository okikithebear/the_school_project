import React from 'react'

const IntroSection = () => {
  return (
    <section id="hero">
       <div
        class="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0"
      >
        <div class="flex flex-col space-y-10 mt-16 lg:mt-16 lg:w-1/2">
          <h1
            class="text-3xl font-semibold text-center lg:text-6xl lg:text-left"
          >
            We are Schoolname
          </h1>
          <p
            class="max-w-md mx-auto text-lg text-center text-slate-500 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0"
          >
           Our focus is to provide a stimulating early learning and child care experience which promotes each child’s social/emotional, physical and cognitive development.
          </p>
          <div
            class="flex items-center justify-center w-full space-x-4 "
          >
            <a
              href="#"
              class="p-4 text-sm font-semibold text-white bg-green-400 hover:bg-green-600 hover:text-white rounded-xl shadow-md border-2 border-gray-300 md:text-base"
              >Apply Here </a>
          </div>
        </div>
        <div class="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div class="bg-hero"></div>
          <img
            src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            class="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div>
      </div>
    </section>
  )
}

export default IntroSection