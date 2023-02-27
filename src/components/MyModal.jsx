import React from "react";
import SchoolPic1 from '../Images/SchoolPic1.jpg'

export default function MyModal({visible, onClose}) {

    const handleOnClose = (e) =>{
        if(e.target.id === 'container') onClose();
    }
    if(!visible) return null;
  return (
    <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center font-mulish">
      <div className=" bg-darkBlue p-16 rounded w-2/5">
        <h1 className="font-semibold text-center text-xl mb-2  text-darkgreenVariant">
          Welcome To Light Workers!
        </h1>
        <div className="flex flex-col p-3">
        <h1 className="mb-2 font-semibold text-white">Applicants Name</h1>
        <input
            type="text"
            className="border text-white p-2 rounded mb-3 focus-visible:outline-darkgreenVariant"
            placeholder="David Solomon"
          />
          <h1 className="mb-2 font-semibold text-white">Applicants Age</h1>
        <input
            type="number"
            className="border text-darkBlue1 p-2 rounded mb-3 focus-visible:outline-darkgreenVariant"
          />
          <h1 className="mb-2 font-semibold text-white">Parents Email</h1>
          <input
            type="text"
            className="border text-darkBlue1 p-2 rounded mb-3 focus-visible:outline-darkgreenVariant"
            placeholder="email@example.com"
          />
          <h1 className="mb-2 font-semibold text-white">Parents Phone Number</h1>
          <input
            type="tel"
            className="border text-darkBlue1 p-2 rounded mb-3 focus-visible:outline-darkgreenVariant"
            placeholder="08033223353"
          />
          <h1 className="mb-2 font-semibold text-white">Date of birth of Applicant</h1>
           <input
            type="date"
            className="border text-darkBlue1 p-2 rounded mb-3 focus-visible:outline-darkgreenVariant"
            
          />

        </div>
        <div className="text-center">
          <button className="px-5 py-2 text-white  bg-darkgreenVariant hover:bg-greenVariant rounded-full font-semibold">
           Apply
          </button>
        </div>
      </div>
    </div>
  );
}