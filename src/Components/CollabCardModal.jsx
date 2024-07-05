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
      <div className="bg-LayoutCream mt-[10vh] h-[50vh] w-[50vw] z-[2] rounded-2xl flex-col items-center justify-center">
        <div className="collabModal flex items-center font-semibold text-2xl h-36 w-[50vw] justify-between px-20">
          <div className="flex flex-row items-center justify-center">
            <h6 className="text-4xl">{data.company}</h6>
            <FaExternalLinkAlt className="ml-6 text-3xl" />
          </div>
          <RxCross2 onClick={onClose} className="text-4xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default CollabCardModal;
