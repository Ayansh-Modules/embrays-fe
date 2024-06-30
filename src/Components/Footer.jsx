import React from "react";
import { GrInstagram } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi"; // linkedin
function Footer() {
  return (
    <div className="footer h-[19vh] w-[100vw] bg-Layoutblue flex-col flex items-center justify-center overflow-x-hidden overflow-y-auto">
    <div className=" flex-row flex items-center justify-center">
      
      <div className="socialMedia flex-row flex items-center w-[55vw]">
        <div className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center mr-[2vw] ml-[2vw]">
          <TfiLinkedin color="white" />
        </div>
        <div className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center ">
          <GrInstagram color="white" />
        </div>
      </div>
      <div className="pageLink flex-row flex items-center justify-center w-[40vw] ">
        <div className="home text-white text-sm mr-[50px] hover:text-Layoutneon ">HOME</div>
        <div className="portfolio text-white text-sm mr-[50px] hover:text-Layoutneon">PORTFOLIO</div>
        <div className="contact text-white text-sm mr-[50px] hover:text-Layoutneon">CONTACT </div>
        <div className="t&c text-white text-sm hover:text-Layoutneon">TERMS & CONDITIONS</div>
      </div>
    </div>
      <div className="copyright mt-[30px] text-gray-400 ">
      Copyright © 2024, All Right Reserved
      </div>
    </div>
  );
}

export default Footer;
