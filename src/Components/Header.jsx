import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { appData } from "../Data/AppData";
function Header() {
  const company = appData.companyName;
  return (
    <>
      <div className="navbar  h-[13vh] w-100vw bg-Layoutblue flex-row flex items-center justify-center overflow-x-auto font-semibold">
        <div className="w-[40vw] h-full  flex items-center justify-center text-3xl font-semibold text-white">
          {company}
        </div>
        <div className="w-[60vw] h-full  flex">
          <div className="w-[600px]  flex items-center justify-end ">
            <div className="wrapper bg-Layouttrans h-[3.5rem] w-[25rem] rounded-xl flex items-center justify-center mr-[20px]">
              <a
                title="About Us"
                href="#aboutus"
                className="about text-white hover:text-black  rounded-xl  hover:bg-Layoutneon h-[3.5rem] w-[7rem] flex items-center justify-center"
              >
                About Us
              </a>
              <a
                title="Services"
                href="#services"
                className="service  text-white hover:text-black  rounded-xl  hover:bg-Layoutneon h-[3.5rem] w-[8rem] flex items-center justify-center"
              >
                Services
              </a>
              <a
                title="How it works?"
                className="howitworks text-white hover:text-black  rounded-xl  hover:bg-Layoutneon p-[10px] h-[3.5rem] w-[10rem] flex items-center justify-center"
              >
                How it works?{" "}
              </a>
            </div>
          </div>
          <div className="w-[190px]  flex items-center justify-start">
            <button
              type="button"
              className="h-[3.5rem] w-[8.6rem] focus:ring-2 text-lg focus:ring-white  text-black bg-Layoutneon hover:bg-white  rounded-xl  flex items-center justify-center "
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
