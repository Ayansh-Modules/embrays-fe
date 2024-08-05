import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import baseAssets from "../assets/baseAssets";

function LetsConnect({ onClose }) {
  const modalRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popUpState, setPopUpState] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    document.querySelector("form").addEventListener("submit", handleSubmit);
  }, []);
  const encodeFormData = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData({
        "form-name": "contact",
        ...formState,
      }),
    })
      .then((res) => {
        if (res.status == 200) {
          setIsLoading(false);
          setPopUpState({
            visible: true,
            message: "Form submission successful",
            type: "success",
          });
          resetPopup();
          setFormState({
            name: "",
            email: "",
            message: "",
          });
        } else {
          throw new Error("Something Went wrong");
        }
      })
      .catch((err) => {
        setPopUpState({
          visible: true,
          message: "Something Went wrong",
          type: "error",
        });
        resetPopup();
      });
    event.preventDefault();
  };
  function resetPopup() {
    setTimeout(() => {
      setPopUpState({
        visible: false,
        message: "",
        type: "",
      });
    }, [2500]);
  }
  return (
    <>
      {isLoading && <h1 align="center">Form submission in progress...</h1>}
      <div
        ref={modalRef}
        onClick={closeModal}
        className="connectbox h-full bg-black w-full flex flex-col items-center justify-center fixed inset-0 bg-opacity-30 backdrop-blur-sm z-[10] max-md:px-10"
      >
        <div>
          <div
            className="lg:h-[90vh] md:w-[40rem] form rounded-2xl flex-col flex items-center justify-center"
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

            <form onSubmit={handleSubmit}>
              <div className="Name px-5 py-2">
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  value={formState.name}
                  name="name"
                  id="default-input"
                  className="bg-black border-2 max-md:w-[80vw] md:w-[30rem] border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  value={formState.email}
                  name="email"
                  id="default-input"
                  className="bg-black border-2 max-md:w-[80vw] md:w-[30rem] border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  value={formState.message}
                  id="message"
                  rows="4"
                  className="mb-[10px] w-[30vw] md:w-[30rem] max-md:w-[80vw] bg-black border-2 border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[20vh] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            </form>
          </div>
        </div>

        {popUpState.visible && (
          <div
            data-aos="fade-down"
            data-aos-easing="ease"
            data-aos-duration="200"
            id="popup"
            className={`popup fixed top-4  border-2 py-4 px-10 rounded-lg ${
              popUpState.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {popUpState.message}
          </div>
        )}
      </div>
    </>
  );
}

export default LetsConnect;
