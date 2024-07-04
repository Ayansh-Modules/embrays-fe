import React from "react";
import { GrInstagram } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi"; // linkedin
import {appData} from "../Data/AppData"
function Footer() {
  const linkedin = appData.urls.linkedin
  const instagram = appData.urls.instagram

  return (
    <div className="footer pt-[25px] pb-[10px] w-full bg-Layoutblue flex-col flex items-center justify-center">
      <div className=" flex  justify-between w-full  max-md:flex-col">
        <div className="socialMedia flex-row flex items-center justify-start ">
          <div className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center mr-[2vw] ml-[2vw]">
           <a href={linkedin}  target="_blank"><TfiLinkedin  color="white" /></a> 
          </div>
          <div className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center ">
           <a href={instagram}  target="_blank"><GrInstagram color="white" /></a> 
          </div>
        </div>
        <div className="pageLink  flex-row flex items-center  justify-evenly   max-md:w-full p-[20px]">
          <div className="flex  max-sm:flex-col max-md:flex-col  max-md:w-[50vw] ">
            <div  href="#aboutus" className="home text-white text-sm ]  hover:text-Layoutneon pr-[20px]">
              HOME
            </div>
            <div className="portfolio text-white text-sm ] hover:text-Layoutneon pr-[20px]">
              PORTFOLIO
            </div>
          </div>

          <div className="flex  max-sm:flex-col max-md:flex-col  max-md:w-[50vw] ">
            <div  href="#contactus" className="contact text-white text-sm ] hover:text-Layoutneon pr-[20px]">
              CONTACT
            </div>
            <div className="t&c text-white text-sm hover:text-Layoutneon text-start pr-[20px] max-md:p-[0]">
              TERMS & CONDITIONS
            </div>
          </div>
        </div>
      </div>
      <div className="copyright  text-gray-400 pt-[20px] pb-[5px]">
        Copyright © 2024, All Right Reserved
      </div>
    </div>
  );
}

export default Footer;
