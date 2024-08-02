import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Honeypot, NetlifyForm } from "react-netlify-forms";
import baseAssets from "../assets/baseAssets";

function LetsConnect({ onClose }) {
  const modalRef = useRef();
  const [popupVisible, setPopupVisible] = useState(false);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="connectbox h-full bg-black w-full flex flex-col items-center justify-center fixed inset-0 bg-opacity-30 backdrop-blur-sm z-[10] max-md:px-10"
    >
      <div>
        <div
          className="lg:h-[90vh] md:w-[40rem] form  rounded-2xl flex-col flex items-center justify-center"
          style={{
            backgroundImage: `url(${baseAssets.connect_form})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-black text-4xl w-full font-semibold flex justify-between">
            <span className="p-5 md:pl-[5vw]">Let's get in touch</span>
            <span className="p-5">
              <RxCross2 onClick={onClose} className="cursor-pointer" />
            </span>
          </div>

          <NetlifyForm name="contact" action="/thanks" honeypotName="bot-field">
            {({ handleChange, success, error }) => (
              <>
                <Honeypot />
                {success && <p>Thanks for contacting us!</p>}
                {error && (
                  <p>
                    Sorry, we could not reach our servers. Please try again
                    later.
                  </p>
                )}
                <div className="Name px-5 py-2">
                  <label
                    htmlFor="default-input"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="default-input"
                    className="bg-black border-2 max-md:w-[80vw] md:w-[30rem] border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="Mail px-5 py-2">
                  <label
                    htmlFor="default-input"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your Mail id
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="default-input"
                    className="bg-black border-2 max-md:w-[80vw] md:w-[30rem] border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="Message px-5 py-2">
                  <label
                    htmlFor="default-input"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Message for Us
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="mb-[10px] w-[30vw] md:w-[30rem] max-md:w-[80vw] bg-black border-2 border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[20vh] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="p-5 flex items-center justify-center">
                  <button
                    type="submit"
                    className="max-md:w-[80vw] md:w-[30rem] text-white bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[30vw]"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </NetlifyForm>
        </div>
      </div>

      {popupVisible && (
        <div
          id="popup"
          className="popup fixed top-4 border-2 border-Layoutblue py-4 px-10 bg-green-500 text-white rounded-lg"
        >
          Form submitted successfully!
        </div>
      )}
    </div>
  );
}

export default LetsConnect;
