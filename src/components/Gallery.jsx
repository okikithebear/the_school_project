import { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Slider from "./Slider";
import { imageArray } from "../images";
import { defaultImages } from "../images";

export default function Gallery({}) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(defaultImages.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  const [openModal, setOpenModal] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)
  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
    } 
    const handleModal = () => {
    setOpenModal(!openModal)
    }

  
  return (
    <>
    <div className="grid grid-cols-2 gap-1">
      {defaultImages &&
        defaultImages.map((imageUrl, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GalleryCard
              imageUrl={imageUrl}
              index={index}
              show={imagesShownArray[index]}
            />
          </VisibilitySensor>
        ))}
    </div>
    
    {openModal && <Slider handleModal={handleModal} slideNumber={slideNumber}/> }
</>
    );

     

  

function GalleryCard({ imageUrl, show, index }) {
  return (
    <div onClick={() => handleOpenModal(index)}
      className={`relative transition ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-darkBlue1 opacity-70"></div>
        <div className="mx-auto text-darkgreenVariant z-10 self-center uppercase tracking-widest text-sm">
          Open Gallery
        </div>
      </div>
      <img src={imageUrl} alt="" />

      
    </div>
  );
}
}

