import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import baseAssets from "../assets/baseAssets";
function LetsConnect({onClose}) {

  const modalRef = useRef();
  const closeModal = (e)=>{
    if(modalRef.current === e.target){
      onClose()
    }
  }
  return (
    <div ref={modalRef} onClick={closeModal} className="connectbox h-full bg-black w-full flex flex-col items-center fixed inset-0 bg-opacity-30 backdrop-blur-sm">
      <div
        className="form  mt-[7rem] rounded-2xl"
        style={{
          backgroundImage: `url(${baseAssets.connect_form})`,
          backgroundPosition: "center",
          backgroundRepeat: " no-repeat",
          backgroundSize: "cover",
        }}
      >
        
        <div className="text-black text-4xl max-w-md font-semibold flex justify-between ">
          {" "}
          <span className="p-5">Let's get in touch</span> 
          <span className=" py-5"><RxCross2 onClick={onClose}/></span>
        </div>
        <div className="Name px-5 py-2">
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium  text-black"
          >
            Your Name
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-black border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="Mail px-5 py-2">
          <label
            for="default-input"
            className="block mb-2 text-sm font-medium  text-black"
          >
            Your Mail id
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-black border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="Message px-5 py-2">
          <label
            for="default-input"
            className="block mb-2 text-sm font-medium  text-black"
          >
            Message for Us
          </label>
          <textarea
            id="message"
            rows="4"
            className="mb-[10px] w-[30vw] max-md:w-[80vw] bg-black border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[20vh]p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className=" p-5 flex items-center justify-center">

        <button
          type="button "
          className=" text-white bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[30vw]"
        >
          Submit
        </button>
        </div>
      </div>
    </div>
  );
}

export default LetsConnect;
