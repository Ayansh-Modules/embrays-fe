import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import { appData } from "../Data/AppData";
import Button from "../Components/Button";
function Contact() {
  const data = appData.contact;
  const urls = appData.urls;
  const contact = appData.contact;

  // open = props.OpenSnackbar
  // close = props.onClose

  return (
    <div 
      id="contactus"
      className="bg-Layoutblue w-full flex overflow-hidden items-center justify-between max-md:justify-start max-md:items-start max-md:flex-col max-sm:flex-col  pt-10 lg:px-[10vw] max-lg:px-[5vw] max-md:px-5"
    >
      
    
      <div
        className="contactDetails "
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        <div className="pt-[10px]">
          <p className=" text-xl font-medium dark:text-Layoutyellow text-left mb-[5vh]">
            {data.primary}
          </p>
          <p className="text-5xl max-md:text-3xl font-semibold  text-white w-[10vw] text-left mb-[5vh]">
            {data.secondary}
          </p>
        </div>

        <div className="contactid text-white">
          <div className="flex-row flex items-center ">
            <div title="Email" className="outercircle h-[40px] w-[40px] bg-Layoutpink hover:bg-pink-600 rounded-full flex items-center justify-center mt-[5vh]">
              <TbMailFilled color="white" title="Email" size={25} />
            </div>
            <a
              className="mt-[5vh]  pl-2 text-base font-medium"
              href={urls.mailto}
              target="_blank"
            >
              {contact.mail}
            </a>
          </div>
          <div className="flex-row flex items-center font-medium pb-5" title="Mobile">
            <div title="Mobile" className="outercircle h-[40px] w-[40px] bg-Layoutpink hover:bg-pink-600 rounded-full flex items-center justify-center mt-[5vh]">
              <BiSolidPhoneCall color="white"  size={25} />
            </div>
            <a className="mt-[5vh] pl-2 text-base" href={urls.cellto} target="_blank">
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
        data-aos="fade-left"
         data-aos-easing="ease"
        
      >
        <form name="contact" method="POST">
          <div className="flex max-md:flex-col ">
          <div className="Name pr-3 py-2">
          <label
              htmlFor="default-input"
              className="block m-2 text-sm font-medium  text-white "
            >
              Your Name
            </label>
            <input
          
              type="text"
              name="name"
              id="default-input"
              className="bg-white  max-md:w-[80vw]  text-black text-sm rounded-xl   block w-[15vw] p-2.5 "
            />
          </div>
          <div className="Mail py-2">
          <label
              htmlFor="default-input"
              className="block m-2 text-sm font-medium  text-white"
            >
              Your Email
            </label>
            <input
           
              type="text"
              name="email"
              id="default-input"
              className="  max-md:w-[80vw]  text-black text-sm rounded-xl  w-[15vw] p-2.5 "
            />
          </div>
          </div>
          <div  className="Message  pt-1">
          <label
              htmlFor="default-input"
              className="block m-2 text-sm font-medium  text-white"
            >
            Message For Us
            </label>
            <textarea 
          
              name="message"
              id="message"
              rows="4"
              className=" w-[31vw]  max-md:w-[80vw] p-2  text-black text-sm rounded-xl  h-[20vh]p-2.5   "
            ></textarea>
          </div>
          <div className=" ml-1 flex items-center">
            {/* <button
              type="button "
              className=" max-md:w-[75vw] text-white bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[30vw]"
            >
              Submit
            </button> */}
            <Button text={"LET'S CONNECT"}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
