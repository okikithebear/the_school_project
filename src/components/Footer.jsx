import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import '../App.css';

const Footer = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uvp88js",
        "template_7ifulql",
        form.current,
        "4nwS6Ey-cecXiKWL8"
      )
      .then(
        (result) => {
          toast.success('Thank you for subscribing!');
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          toast.error('Error subscribing. Please try again later.');
          console.log(error.text);
        }
      );
  };
  return (
    <footer className="bg-darkBlue text-white font-mulish">
      <div className="flex md:flex-row flex-col-reverse w-full">
        <div className='left-col flex flex-col px-4 md:px-2 lg:px-0 sm:px-0 pt-14 md:w-2/3'>
          <div className='flex md:flex-row flex-col md:justify-evenly'>
            <div className='subscription basis-1/3'>
              <h4 className="text-white font-bold md:px-2">SUBSCRIBE TO OUR NEWSLETTER</h4>
              <p className="text-gray-400 text-left md:px-2 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales neque ut ligula commodo, ac consequat nisi bibendum.
              </p>
              <form ref={form} onSubmit={sendEmail} >
                <input
                  name="user_email"
                  type="text"
                  placeholder="Enter Your Email here"
                  className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 h-10 rounded px-2 focus:outline-none my-6"
                  required
                />
                <button value="Send" className=" p-2.5 text-sm font-semibold bg-darkgreenVariant hover:bg-greenVariant
                   hover:text-darkBlue1 rounded-md shadow-sm md:text-base">
                  Subscribe  </button>
                <ToastContainer theme="dark" />
              </form>
            </div>
            <div className="quick-links md:flex hidden justify-center basis-1/3 md:px-2">
              <ItemsContainer />
            </div>
          </div>
          <div className="socials flex flex-col my-3 items-center">
            <h4 className="">&copy; 2023 All rights reserved.</h4>
            <br />
            <SocialIcons Icons={Icons} />
          </div>
        </div>
        <div className=" flex flex-col md:pt-14 md:px-6 px-4 py-12 md:py-0 mt-0 bg-[#ffffff19] w-full md:w-1/3 lg:w-1/3">
          <span className={'font-mulish'}>GET IN TOUCH</span>
          <div className="justify-center mt-2 font-mulish text-white flex flex-col space-y-6">
            <h4 className=''>
              <i className="fas fa-map-marker-alt mr-2 py-2 text-darkgreenVariant"></i>
              <span className="text-darkgreenVariant font-extrabold mr-1.5">Address:</span> No1 alabokun street, Bodija.
            </h4>
            <h4 className=''>
              <i className="fas fa-phone-alt mr-2 py-2 text-darkgreenVariant"></i>
              <span className="text-darkgreenVariant font-extrabold mr-1.5">Telephone number:</span> +23490887666776
            </h4>
            <h4 className=''>
              <i className="fas fa-envelope mr-2 py-2  text-darkgreenVariant"></i>
              <span className="text-darkgreenVariant font-extrabold mr-1.5">Email:</span>     lightworkers.ng.01@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </footer>



  );
};

export default Footer;