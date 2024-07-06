import React, { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function CollabCardModal({ onClose, data }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="connectbox h-full z-20 bg-black w-full flex flex-col fixed inset-0 bg-opacity-60 backdrop-blur-sm justify-center items-center"
    >
      <div className="bg-white mt-[10vh] h-[520px] w-[800px] max-md:h-[400px] max-md:w-[90vw] z-[2] rounded-2xl flex flex-col items-center justify-start ">
        <div className="collabModal flex items-end pb-2 pt-14 max-md:pt-8 font-semibold  w-[800px] max-md:w-[90vw] justify-between max-md:px-8 px-14 lg:text-4xl md:text-3xl max-md:text-2xl">
          <div className="flex flex-row items-center justify-center">
            <h6 className="">{data.company}</h6>
            <FaExternalLinkAlt className="ml-6 " />
          </div>
          <RxCross2 onClick={onClose} className="cursor-pointer" />
        </div>

        <img
          src={data.popUpImage}
          alt="company_website_images"
          className="max-md:h-[300px] max-md:px-8 px-14 "
        />
      </div>
    </div>
  );
}

export default CollabCardModal;
