import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import { appData } from "../Data/AppData";

function Contact(props) {
  const data = appData.contact;
  const urls = appData.urls;
  const contact = appData.contact;

  // open = props.OpenSnackbar
  // close = props.onClose

  return (
    <div
      id="contactus"
      className="flex overflow-hidden items-center justify-between max-md:justify-start max-md:items-start max-md:flex-col max-sm:flex-col w-[95vw] py-20 lg:px-[10vw] max-lg:px-[5vw] max-md:px-10"
      data-aos="fade-up"
    >
      <div
        className="contactDetails "
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
            <div title="Email" className="outercircle h-[40px] w-[40px] bg-Layoutpink hover:bg-pink-600 rounded-full flex items-center justify-center mt-[5vh]">
              <TbMailFilled color="white" title="Email" className="h-[25px] w-[25px]  " />
            </div>
            <a
              className="mt-[5vh]  pl-2 text-base font-medium"
              href={urls.mailto}
            >
              {contact.mail}
            </a>
          </div>
          <div className="flex-row flex items-center font-medium pb-5" title="Mobile">
            <div title="Mobile" className="outercircle h-[40px] w-[40px] bg-Layoutpink hover:bg-pink-600 rounded-full flex items-center justify-center mt-[5vh]">
              <BiSolidPhoneCall color="white" className="h-[25px] w-[25px]  " />
            </div>
            <a className="mt-[5vh] pl-2 text-base" href={urls.cellto}>
              {contact.cell}
            </a>
          </div>
        </div>
      </div>
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        <form name="contact" method="POST">
          <div className="Name px-5 py-2">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium  text-black"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="default-input"
              className="bg-black border-2 max-md:w-[80vw] border-black text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="Mail px-5 py-2">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium  text-black"
            >
              Your Mail id
            </label>
            <input
              type="text"
              name="email"
              id="default-input"
              className="bg-black border-2 max-md:w-[80vw] border-black text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="Message px-5 py-2">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium  text-black"
            >
              Message for Us
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="mb-[10px] w-[30vw]  max-md:w-[80vw] bg-black border-2 border-black text-black text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block h-[20vh]p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div className=" p-5 flex items-center justify-center">
            <button
              type="button "
              className=" max-md:w-[75vw] text-white bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[30vw]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
