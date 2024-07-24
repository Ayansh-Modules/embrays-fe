import React from "react";
import { IoDownloadOutline, IoMenu } from "react-icons/io5";

import Drawer from "./Drawer";
import Tools from "../Components/Tools"
function Header() {

  const [isOpen, setIsOpen] = React.useState(false);

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
      <div className="navbar py-[20px]  w-full bg-Layoutblue flex-row flex items-center justify-between font-semibold sticky top-0 z-10  ">
        <div className="max-md:text-xl ml-[10vw]  flex items-center justify-between text-3xl font-semibold text-white max-lg:text-base">
          <a href="/" title="Embrys Technology.Com">
            {" "}
            ET
          </a>
        </div>
        <div className=" max-md:visible md:hidden ">
          <IoMenu
            className="text-white text-3xl mx-[10vw]"
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
                  className="about text-sm text-white hover:text-black  rounded-xl  hover:bg-Layoutneon h-[3rem] px-6 max-lg:px-3 flex items-center justify-center"
                >
                  {option.title}
                </a>
              ))}

              <Tools/>

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
           <div className="ml-6"><Tools/></div>
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
      className="flex items-center justify-start mr-[5vw]"
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
