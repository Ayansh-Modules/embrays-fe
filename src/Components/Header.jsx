import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { appData } from "../Data/AppData";
import { IoMenu } from "react-icons/io5";
function Header() {
  const company = appData.companyName;
  return (
    <>
      <div className="navbar pt-[20px] pb-[20px] w-100vw bg-Layoutblue flex-row flex items-center justify-between overflow-x-auto font-semibold">
        <div className=" pl-[20px] max-md:w-[90vw] max-md:text-xl flex items-center justify-between text-3xl font-semibold text-white">
          {company}
          <div className=" max-md:visible md:invisible max-lg:w-[0]"><IoMenu /></div>
        </div>
        <div className="w-[60vw] h-full  flex  justify-end max-md:invisible max-md:w-0 max-md:overflow-x-hidden">
          <div className="w-[600px]  flex items-center justify-end ">
            <div className="wrapper  bg-Layouttrans h-[3.3rem] w-[23rem] rounded-xl flex items-center justify-center mr-[20px]">
              <a
                title="About Us"
                href="#aboutus"
                className="about text-sm text-white hover:text-black  rounded-xl  hover:bg-Layoutneon h-[3rem] w-[7rem] flex items-center justify-center"
              >
                About Us
              </a>
              <a
                title="Services"
                href="#services"
                className="service text-sm text-white hover:text-black  rounded-xl  hover:bg-Layoutneon h-[3rem] w-[8rem] flex items-center justify-center"
              >
                Services
              </a>
              <a
                title="How it works?" href="#howitworks"
                className="howitworks text-sm text-white hover:text-black  rounded-xl  hover:bg-Layoutneon p-[10px] h-[3rem] w-[10rem] flex items-center justify-center"
              >
                How it works?{" "}
              </a>
            </div>
          </div>
          <div className="w-[190px]  flex items-center justify-start">
            <button
              type="button"
              className="h-[3rem] w-[8rem] text-sm focus:ring-2  focus:ring-white  text-black bg-Layoutneon hover:bg-white  rounded-xl  flex items-center justify-center "
            >
              <IoDownloadOutline style={{ height: "25px", width: "25px" }} />{" "}
              <span className=" "> Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
