import React, { useRef, useEffect, useState } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SchoolPic1 from '../Images/SchoolPic1.jpg'

import '../App.css';

export default function Modal({ visible, onClose }) {

  const [isOpen, setIsOpen] = useState(false);

  const form = useRef();

  useEffect(() => {
    setIsOpen(visible);
    // ...
  }, [visible]);


  useEffect(() => {
    // set the body overflow to hidden when the modal is opened
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);

  function toggleModal() {
    const body = document.querySelector('body');
    const modal = document.querySelector('#modal');

    if (modal.classList.contains('open')) {
      // add blur effect to body
      body.classList.add('blur');
    } else {
      // remove blur effect from body
      body.classList.remove('blur');
    }
  }


  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  }
  if (!visible) return null;



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uvp88js",
        "template_8tja4qk",
        form.current,
        "4nwS6Ey-cecXiKWL8"
      )
      .then(
        (result) => {
          toast.success('Application sent successfully!');
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          toast.error('Error sending applications. Please try again later.');
          console.log(error.text);
        }
      );
  }


  // document.addEventListener('DOMContentLoaded', function () {
  //   const modal = document.querySelector('#modal');
  //   const closeButton = modal.querySelector('.close-button');

  //   modal.addEventListener('click', (event) => {
  //     if (event.target === modal || event.target === closeButton) {
  //       modal.classList.remove('open');
  //       toggleModal();
  //     }
  //   });

  //   // assume there is a button that opens the modal with ID #open-modal
  //   const openModalButton = document.querySelector('#open-modal');
  //   openModalButton.addEventListener('click', () => {
  //     modal.classList.add('open');
  //     toggleModal();
  //   });

  // });
  return (


    <form
      ref={form}
      onSubmit={sendEmail}
      id="container modal"
      onClick={handleOnClose}
      className={`fixed inset-0 bg-white bg-opacity-50 ${isOpen ? '' : 'backdrop-blur-sm'
        } flex items-center justify-center font-mulish`}
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