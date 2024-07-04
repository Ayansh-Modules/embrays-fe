import React from "react";
import { GrInstagram } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi"; // linkedin
function Footer() {
  return (
    <div className="footer pt-[10px] pb-[10px] w-full bg-Layoutblue flex-col flex items-center justify-center ">
      <div className=" flex  justify-between w-full  max-md:flex-col">
        <div className="socialMedia flex-row flex items-center justify-start ">
          <div className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center mr-[2vw] ml-[2vw]">
            <TfiLinkedin color="white" />
          </div>
          <div className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center ">
            <GrInstagram color="white" />
          </div>
        </div>
        <div className="pageLink flex-row flex items-center w-[50vw] justify-evenly   max-md:w-full max-md:p-[20px]">
          <div className="flex max-sm:flex-col max-md:flex-col justify-evenly w-[15vw] max-md:w-[50vw] ">
            <div  href="#aboutus" className="home text-white text-sm ]  hover:text-Layoutneon pr-[5px]">
              HOME
            </div>
            <div className="portfolio text-white text-sm ] hover:text-Layoutneon pr-[5px]">
              PORTFOLIO
            </div>
          </div>

          <div className="flex max-sm:flex-col max-md:flex-col justify-evenly max-md:w-[50vw] w-[30vw]">
            <div  href="#contactus" className="contact text-white text-sm ] hover:text-Layoutneon pr-[5px]">
              CONTACT
            </div>
            <div className="t&c text-white text-sm hover:text-Layoutneon text-start">
              TERMS & CONDITIONS
            </div>
          </div>
        </div>
      </div>
      <div className="copyright  text-gray-400 ">
        Copyright © 2024, All Right Reserved
      </div>
    </div>
  );
}

export default Footer;
