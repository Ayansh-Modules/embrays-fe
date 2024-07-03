import React from "react";
import { appData } from "../Data/AppData";
import { IoDownloadOutline } from "react-icons/io5";
function Header() {
  const company = appData.companyName
  return (
    <>
     <div className="navbar  h-[13vh] w-full bg-Layoutblue flex-row flex items-center justify-evenly overflow-x-auto font-semibold">
      <div className="logo flex-row mr-[10rem] items-center justify-center text-white text-4xl" >{company}</div>
      <div className="navlink flex-row flex items-center justify-center">
        <div className="wrapper bg-Layouttrans h-[8vh] w-[22.5vw] rounded-xl flex items-center justify-center">
        <a title="About Us" className="about text-white hover:text-black  rounded-xl  hover:bg-Layoutneon p-[10px]">About Us</a>
        <a title="Services" className="service  text-white hover:text-black  rounded-xl  hover:bg-Layoutneon p-[10px]">Services</a>
        <a title="How it works?" className="howitworks text-white hover:text-black  rounded-xl  hover:bg-Layoutneon p-[10px] ">How it works? </a>
        </div>
      <button title="Click To Download" type="button" className=" portfolio ml-[20px] h-[7vh] w-[8vw] focus:ring-2  focus:ring-white  text-black bg-Layoutneon hover:bg-white  rounded-xl p-[3px] "> 
        <a href="" className="flex-row flex items-center justify-center mr-[10px]"><IoDownloadOutline style={{height:"3vh",width:"3vw"}}/> Portfolio</a> </button>
    </div>
      </div>
    </>
   

  );
}

export default Header;
