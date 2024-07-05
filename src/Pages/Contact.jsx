import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import { appData } from "../Data/AppData";
function Contact() {
  const data = appData.contact;
  const urls = appData.urls;
  const contact = appData.contact;
  return (
    <div
      id="contactus"
      className="px-[10vw] flex items-center justify-between max-md:justify-start max-md:items-start max-md:flex-col max-sm:flex-col w-full pb-20 "
      data-aos="fade-up"
    >
      <div
        className="contactDetails"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        <div className="pt-[10px]">
          <p className=" text-xl font-medium dark:text-Layoutblue text-left mb-[5vh]">
            {data.primary}
          </p>
          <p className="text-5xl max-md:text-3xl font-semibold  dark:text-black w-[10vw] text-left mb-[5vh]">
            {data.secondary}
          </p>
        </div>

        <div className="contactid ">
          <div className="flex-row flex items-center ">
            <div className="outercircle h-[40px] w-[40px] bg-Layoutpink hover:bg-pink-600 rounded-full flex items-center justify-center mt-[5vh]">
              <TbMailFilled color="white" className="h-[25px] w-[25px]  " />
            </div>
            <a
              className="mt-[5vh]  pl-2 text-base font-medium"
              href={urls.mailto}
            >
              {contact.mail}
            </a>
          </div>
          <div className="flex-row flex items-center font-medium pb-5">
            <div className="outercircle h-[40px] w-[40px] bg-Layoutpink hover:bg-pink-600 rounded-full flex items-center justify-center mt-[5vh]">
              <BiSolidPhoneCall color="white" className="h-[25px] w-[25px]  " />
            </div>
            <a className="mt-[5vh] pl-2 text-base" href={urls.cellto}>
              {contact.cell}
            </a>
          </div>
        </div>
      </div>
      <div
        className="form "
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        <div className="Name ">
          <label
            htmlFor="default-input"
            className="block mb-[10px] mt-[10px] text-sm font-medium  text-black"
          >
            Your Name
          </label>
          <input
            type="text"
            id="default-input"
            className="mb-[10px] bg-black border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-md:w-[80vw] w-[35vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="Mail ">
          <label
            htmlFor="default-input"
            className="block mb-[10px] text-sm font-medium  text-black"
          >
            Your Mail id
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-black mb-[10px] border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[35vw] max-md:w-[80vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="Message ">
          <label
            htmlFor="message"
            className="mb-[10px] block  text-sm font-medium  text-black"
          >
            Message for Us
          </label>
          <textarea
            id="message"
            rows="4"
            className="mb-[10px] w-[35vw] max-md:w-[80vw] bg-black border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[20vh]p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="button"
          className="mb-[10px] text-white bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  max-md:w-[80vw] w-[35vw]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
