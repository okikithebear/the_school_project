import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white pt-24 md:pt-12 font-mulish">
      <div className="md:flex align-middle justify-between bg-[#ffffff19] p-4" >
        <h1
          className="lg:text-3xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
        Subscribe to Our Newsletter.
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email here"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 h-10 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-darkgreenVariant hover:bg-greenVariant duration-300 h-10 px-5 font-mulish
           rounded-md text-white md:w-auto w-1/2 md:mt-0 mt-2 "
          >
            Subscribe
          </button>
        </div>
      </div>
        <ItemsContainer />
      <div className="flex flex-col justify-center items-center pb-4">
        <div className={'py-2'}>© 2023 All rights reserved.</div>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;