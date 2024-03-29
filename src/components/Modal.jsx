import React, { useRef, useEffect, useState } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SchoolPic1 from '../Images/SchoolPic1.jpg';
import '../App.css';

export default function Modal({ visible, onClose }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const form = useRef();

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      setIsNavbarOpen(true);
    } else {
      document.body.style.overflow = 'auto';
      setIsNavbarOpen(false);
    }
  }, [visible]);

  useEffect(() => {
    const body = document.body;
    if (isNavbarOpen) {
      body.classList.add('navbar-open');
    } else {
      body.classList.remove('navbar-open');
    }
  }, [isNavbarOpen]);

  const handleOnClose = (e) => {
    if (e.target.id === 'container') {
      onClose();
      setIsNavbarOpen(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uvp88js',
        'template_8tja4qk',
        form.current,
        '4nwS6Ey-cecXiKWL8'
      )
      .then(
        (result) => {
          toast.success('Application sent successfully!');
          console.log(result.text);
          console.log('message sent');
          e.target.reset();
        },
        (error) => {
          toast.error('Error sending applications. Please try again later.');
          console.log(error.text);
        }
      );
  };

  if (!visible) {
    return null;
  }



  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="container"
      onClick={() => {
        setIsNavbarOpen(true);
        handleOnClose();
      }}
      className={`fixed inset-0 bg-white z-[100] bg-opacity-50 flex items-center justify-center font-mulish`}
    >
      <div className=" bg-darkBlue md:p-10 p-2 rounded w-5/6 md:w-2/5">
        <h1 className="font-semibold text-center text-xl md:mb-2 my-2  text-darkgreenVariant">
          Welcome To Light Workers!
        </h1>
        <div className="flex flex-col p-3">
          <h1 className="mb-2 font-semibold text-white text-sm md:text-base">Applicants Name</h1>
          <input
            name="user_name"
            type="text"
            className="border text-darkBlue1  md:p-2 p-1 rounded mb-3 focus-visible:outline-darkgreenVariant"
            placeholder="David Solomon"
            required
          />
          <h1 className="mb-2 font-semibold text-white text-sm md:text-base">Applicants Age</h1>
          <input
            name="user_age"
            type="number"
            className="border text-darkBlue1 md:p-2 p-1 rounded mb-3 focus-visible:outline-darkgreenVariant"
            required
          />
          <h1 className="mb-2 font-semibold text-white text-sm md:text-base">Parents Email</h1>
          <input
            name="user_email"
            type="text"
            className="border text-darkBlue1 md:p-2 p-1 rounded mb-3 focus-visible:outline-darkgreenVariant"
            placeholder="email@example.com"
            required
          />
          <h1 className="mb-2 font-semibold text-white text-sm md:text-base">Parents Phone Number</h1>
          <input
            name="user_tel"
            type="tel"
            className="border text-darkBlue1 md:p-2 p-1 rounded mb-3 focus-visible:outline-darkgreenVariant"
            placeholder="08033223353"
            required
          />
          <h1 className="mb-2 font-semibold text-white text-sm md:text-base">Date of birth of Applicant</h1>
          <input
            name="user_dob"
            type="date"
            className="border text-darkBlue1 md:p-2 p-1 rounded mb-3 focus-visible:outline-darkgreenVariant"
            required

          />

        </div>
        <div className="text-center">
          <button value="Send" className="px-5 py-2 text-white text-sm md:text-base  bg-darkgreenVariant hover:bg-greenVariant
          rounded-full font-semibold md:mb-0 mb-2">
            Apply
          </button>
          <ToastContainer />
        </div>
      </div>
    </form>

  );
}
