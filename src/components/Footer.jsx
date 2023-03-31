import React, {useRef} from 'react';
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
      <footer className="bg-darkBlue text-white pt-24 md:pt-12 font-mulish">
      <div className="md:flex align-middle justify-between bg-[#ffffff19] p-4">
        <h1 className="lg:text-3xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          Subscribe to Our Newsletter.
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            name="user_email"
            type="text"
            placeholder="Enter Your Email here"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 h-10 rounded px-2 focus:outline-none"
            required
          />
          <button
            value="Send"
            className="bg-darkgreenVariant hover:bg-greenVariant duration-300 h-10 px-5 font-mulish rounded-md text-white md:w-auto w-1/2 md:mt-0 mt-2"
          >
            Subscribe
          </button>
          <ToastContainer theme="dark" />
        </form>
      </div>
      <div className="flex flex-row gap-12">
        <div className="flex flex-col w-1/3">
        <div className="flex flex-col  justify-center items-center px-5 py-4">
            <h4 className="text-white font-bold mb-2">About Us</h4>
            <p className="text-gray-400 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales neque ut ligula commodo, ac consequat nisi bibendum.
            </p>  
            <button  className="p-2 mt-2 text-sm font-semibold bg-darkgreenVariant hover:bg-greenVariant  hover:text-darkBlue1 rounded-xl  shadow-sm md:text-base">
            <a href='/about/about-us'>Learn more</a>  </button>
          </div>
        </div>
        <div className="flex flex-col w-1/3 ">
        <ItemsContainer />
        </div>
        <div className="flex flex-col w-1/3">
  <div className="justify-center items-center bg-[#ffffff19] pb-10 px-5 font-mulish text-white md:w-auto md:mt-0 ">
    <h3 className='mt-2'>
      <i className="fas fa-map-marker-alt mr-2 py-2 text-darkgreenVariant"></i>
      <span className="text-darkgreenVariant font-extrabold text-lg">Address</span>: No1 alabokun street, Bodija.
    </h3>
    <h4 className='my-2'>
      <i className="fas fa-phone-alt mr-2 py-2 text-darkgreenVariant"></i>
      <span className="text-darkgreenVariant font-extrabold text-lg">Telephone number</span>: 090887666776
    </h4>
    <h4 className='my-2'>
      <i className="fas fa-envelope mr-2 py-2  text-darkgreenVariant"></i>
      <span className="text-darkgreenVariant font-extrabold text-lg">Email</span>: lightworkers.ng.01@gmail.com, lightworkers.ng.02@gmail.com
    </h4>
  </div>
</div>

      </div>
      <div className="bg-white py-2 px-6 flex items-center justify-between">
        <div className="text-greenVariant text-xl font-bold">
          <p>LightWorkers</p>
        </div>
        <div className="flex flex-row gap-2">
          <h4 className="text-darkBlue1">&copy; 2023 All rights reserved.</h4>
          <SocialIcons Icons={Icons} />
        </div>
      </div>
    </footer>
    


  );
};

export default Footer;