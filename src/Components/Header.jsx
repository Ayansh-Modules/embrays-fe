import React from "react";
import { IoDownloadOutline, IoMenu } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { appData } from "../Data/AppData";
import Drawer from "./Drawer";

function Header() {
  const company = appData.companyName;
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const headerOptions = [
    {
      title: "About Us",
      href: "/#aboutus",
    },
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "How it works?",
      href: "#howitworks",
    },
    {
      title: "Blogs",
      href: "/#blogs",
    },
  ];
  return (
    <>
      <div className="navbar py-[20px]  w-full bg-Layoutblue flex-row flex items-center justify-between font-semibold sticky top-0 z-10 px-[10vw]">
        <div className="max-md:text-xl flex items-center justify-between text-3xl font-semibold text-white max-lg:text-base">
          <a href="/" title="Embrys Technology.Com">
            {" "}
            ET
          </a>
        </div>
        <div className=" max-md:visible md:hidden ">
          <IoMenu
            className="text-white text-3xl"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
        <div className=" flex  justify-end max-md:hidden max-md:overflow-x-hidden">
          <div className=" flex items-center justify-end ">
            <div className="wrapper  bg-Layouttrans h-[3.3rem]   rounded-xl flex items-center justify-center mr-[20px]">
              {headerOptions.map((option, index) => (
                <a
                  key={index}
                  title={option.title}
                  href={option.href}
                  className="about text-sm text-white hover:text-black  rounded-xl  hover:bg-Layoutneon h-[3rem] px-6 flex items-center justify-center"
                >
                  {option.title}
                </a>
              ))}

              <div className="text-sm h-[3rem] rounded-xl text-white hover:text-black flex items-center justify-center">
                <div className="relative inline-block text-left">
                  <div className="group">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center w-full py-2font-medium  focus:outline-none  text-sm h-[3rem] px-6 hover:bg-Layoutneon rounded-xl text-white hover:text-black"
                    >
                      Tools
                      <RiArrowDownSLine size={20} className="ml-1" />
                    </button>

                    <div className="absolute left-0 w-40 mt-1 origin-top-left bg-slate-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                      <div className="py-1">
                        {/* <a 
                          
                          onClick={() => {
                            navigate("/link-shortener");
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Link shortener
                        </a> */}
                        <a
                          onClick={() => {
                            navigate("/qr-generator");
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          QR Generator
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {PortfolioButton()}
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="bg-Layouttrans  rounded-xl mb-10 mx-10">
          {headerOptions.map((option, index) => (
            <a
              key={index}
              title={option.title}
              href={option.href}
              className="about text-sm font-semibold text-white hover:text-black  rounded-xl  hover:bg-Layoutneon h-[3rem] px-6 flex items-center justify-center"
            >
              {option.title}
            </a>
          ))}
           <div className="text-sm h-[3rem] rounded-xl text-white hover:text-black flex items-center justify-center">
                <div className="relative inline-block text-left">
                  <div className="group">
                    <button
                      type="button"
                      className="inline-flex font-semibold justify-center items-center w-full py-2font-medium  focus:outline-none  text-sm h-[3rem] px-6 hover:bg-Layoutneon rounded-xl text-white hover:text-black"
                    >
                      Tools
                      <RiArrowDownSLine size={20} className="ml-1" />
                    </button>

                    <div className="absolute left-0 w-40 mt-1 origin-top-left bg-slate-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                      <div className="py-1">
                        {/* <a 
                          
                          onClick={() => {
                            navigate("/link-shortener");
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Link shortener
                        </a> */}
                        <a
                          onClick={() => {
                            navigate("/qr-generator");
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          QR Generator
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div className="flex items-center justify-center w-full">
          {PortfolioButton()}
        </div>
      </Drawer>
    </>
  );
}

function PortfolioButton() {
  return (
    <div
      className="flex items-center justify-start"
      title="Click to get Portfolio"
    >
      <a
        href="https://drive.google.com/file/d/18h3hVuQdIT1MQV0vWzqDUvj03J1yIx9D/view?usp=drive_link"
        target="_blank"
      >
        <button
          type="button"
          className="h-[3rem] w-[8rem] text-sm focus:ring-2  focus:ring-white  text-black bg-Layoutneon hover:bg-white  rounded-xl  flex items-center justify-center "
        >
          <IoDownloadOutline className="size-[25px] mr-2" />
          <span> Portfolio</span>
        </button>
      </a>
    </div>
  );
}

export default Header;
