import React from "react";
import { appData } from "../Data/AppData";
import { IoDownloadOutline } from "react-icons/io5";
function Header() {
  const company = appData.companyName
  return (
    <div className="navbar  h-[13vh] w-full bg-Layoutblue flex items-center justify-center overflow-x-hidden font-semibold">
      <div className="logo flex-row w-[55vw] items-center justify-center text-white text-4xl" >{company}</div>
      <div className="navlink flex-row  items-center justify-center">
        <div className="wrapper bg-Layouttrans h-[8vh] w-[21vw] rounded-xl flex items-center justify-center">
        <a title="About Us" className="about text-white hover:text-black  rounded-xl  hover:bg-Layoutneon p-[15px]">About Us</a>
        <a title="Services" className="service  text-white hover:text-black  rounded-xl  hover:bg-Layoutneon p-[15px]">Services</a>
        <a title="How it works?" className="howitworks text-white hover:text-black  rounded-xl  hover:bg-Layoutneon p-[15px] ">How it works? </a>
        </div>
      </div>

      <button title="Click To Download" type="button" className=" portfolio ml-[20px] h-[7vh] w-[9vw] focus:ring-2  focus:ring-white  text-black bg-Layoutneon hover:bg-white  rounded-xl p-[10px] "> 
        <a href="" className="flex-row flex items-center justify-center mr-[20px]"><IoDownloadOutline style={{height:"3.5vh",width:"3.5vw"}}/> Portfolio</a> </button>
    </div>
  );
}

export default Header;
