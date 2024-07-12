import React from "react";
import { appData } from "../Data/AppData";
import { TfiLinkedin } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import Button from "../Components/Button"

function Footer2() {
  const data = appData.aboutUs.title + appData.aboutUs.subTitle;

  return (
    <div className="bg-Layoutblue w-full text-xs">
      <div className=" flex text-white justify-evenly p-10">
      
      <div className="text-justify w-[25vw] ">
        <p className="text-2xl font-semibold mb-5">ET</p>
        {data}
      </div>
      <div className="flex-col  ">
        <p className=" font-semibold mb-5">EXPLORE</p>
        <p className="mb-5">HOME</p>
        <p className="mb-5">PORTFOLIO</p>
        <p className="mb-5">CONTACT US</p>
        <p>TERMS & CONDITION </p>
      </div>

      <div className="flex-col flex justify-evenly">
        <p className="font-semibold ml-5">CONTACT US</p>
        <p title="EMAIL" className="flex items-center ">
          <span className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center m-2">   <TbMailFilled color="white" title="Email" size={25} /></span>
          EMAIL
        </p>
        <p className="flex items-center ">
             
              <span title="MOBILE" className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center m-2">
              <BiSolidPhoneCall color="white"  size={20} />
              </span>
          MOBILE
        </p>
        <p className="flex items-center ">
          <span title="LINKEDIN" className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center m-2"> <TfiLinkedin color="white" /></span>
          LINKEDIN
        
        </p>
        <p className="flex items-center ">
          <span title="INSTAGRAM" className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center m-2"> <GrInstagram color="white" /></span>
          INSTAGRAM
        </p>
      </div>
      <div>
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
       
      >
        <form name="contact" method="POST">
          <div className="flex">
          <div className="Name pr-3 py-2">
           
            <input
            placeholder="Your Name"
              type="text"
              name="name"
              id="default-input"
              className="bg-white  max-md:w-[80vw]  text-black text-sm rounded-lg   block w-[15vw] p-2.5 "
            />
          </div>
          <div className="Mail py-2">
            
            <input
            placeholder="Your Mail id"
              type="text"
              name="email"
              id="default-input"
              className="  max-md:w-[80vw]  text-black text-sm rounded-lg  w-[15vw] p-2.5 "
            />
          </div>
          </div>
          <div className="Message  pt-1">
            
            <textarea
            placeholder="Message for us"
              name="message"
              id="message"
              rows="4"
              className=" w-[31vw]  max-md:w-[80vw] p-2  text-black text-sm rounded-lg  h-[20vh]p-2.5   "
            ></textarea>
          </div>
          <div className=" mt-[-15px] flex items-center">
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
    </div>
    </div>
    
  );
}

export default Footer2;
