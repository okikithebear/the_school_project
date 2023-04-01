import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

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
      <div className="flex flex-col ">
        <div className="flex flex-row  w-full">
          <div className='flex flex-row my-12 py-6 w-2/3 justify-around'>
            <div className='w-1/3'>
              <h4 className="text-white font-bold mb-2">ABOUT US</h4>
              <p className="text-gray-400 text-left ">
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
                <button value="Send" className=" p-2.5 text-sm font-semibold bg-darkgreenVariant hover:bg-greenVariant  hover:text-darkBlue1 rounded shadow-sm md:text-base">
                  Subscribe  </button>
                <ToastContainer theme="dark" />
              </form>
            </div>
            <div className=" ">
              <ItemsContainer />
            </div>
          </div>
          <div className="flex flex-col bg-[#ffffff19] p-12  w-1/3">
            <div className="justify-center items-center  font-mulish text-white flex flex-col space-y-12">
              <h4 className=''>
                <i className="fas fa-map-marker-alt mr-2 py-2 text-darkgreenVariant"></i>
                <span className="text-darkgreenVariant font-extrabold text-lg">Address</span>: No1 alabokun street, Bodija.
              </h4>
              <h4 className=''>
                <i className="fas fa-phone-alt mr-2 py-2 text-darkgreenVariant"></i>
                <span className="text-darkgreenVariant font-extrabold text-lg">Telephone number</span>: 090887666776
              </h4>
              <h4 className=''>
                <i className="fas fa-envelope mr-2 py-2  text-darkgreenVariant"></i>
                <span className="text-darkgreenVariant font-extrabold text-lg">Email</span>: lightworkers.ng.01@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-row py-2 px-6  items-center justify-center">
          <h4 className="text-darkBlue1">&copy; 2023 All rights reserved.</h4>
          <br />
          <SocialIcons Icons={Icons} />
        </div>
      </div>

    </footer>



  );
};

export default Footer;