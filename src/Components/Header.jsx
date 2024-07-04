import React from "react";
import { IoDownloadOutline, IoMenu } from "react-icons/io5";
import { appData } from "../Data/AppData";
import Drawer from "./Drawer";

function Header() {
  const company = appData.companyName;
  const [isOpen, setIsOpen] = React.useState(false);
  const headerOptions = [
    {
      title: "About Us",
      href: "#aboutus",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "How it works?",
      href: "#howitworks",
    },
  ];
  return (
    <>
      <div className="navbar py-[20px]  w-[100%] bg-Layoutblue flex-row flex items-center justify-between font-semibold sticky top-0 z-10 px-[10vw]">
        <div className="max-md:text-xl flex items-center justify-between text-3xl font-semibold text-white ">
          {company}
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
            <div className="wrapper  bg-Layouttrans h-[3.3rem]  rounded-xl flex items-center justify-center mr-[20px]">
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
            </div>
          </div>
          {PortfolioButton()}
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
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
        {PortfolioButton()}
      </Drawer>
    </>
  );
}

function PortfolioButton() {
  return (
    <div className="flex items-center justify-start">
      <button
        type="button"
        className="h-[3rem] w-[8rem] text-sm focus:ring-2  focus:ring-white  text-black bg-Layoutneon hover:bg-white  rounded-xl  flex items-center justify-center "
      >
        <IoDownloadOutline style={{ height: "25px", width: "25px" }} />{" "}
        <span> Portfolio</span>
      </button>
    </div>
  );
}

export default Header;
