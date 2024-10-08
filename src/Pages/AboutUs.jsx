import { useState } from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
import baseAssets from "../assets/baseAssets";
import Button from "../Components/Button";
import LetsConnect from "../Components/LetsConnect";
import { appData } from "../Data/AppData";
function AboutUs() {
  const data = appData.aboutUs;
  const [open, setOpen] = useState(false);

  return (
    <div
      id="aboutus"
      className="about bg-Layoutblue relative  w-full py-28 max-lg:py-20  flex flex-col items-start overflow-hidden "
    >
      <div className="flex-row max-md:flex-col flex overflow-x-hidden overflow-y-hidden justify-between pl-[10vw] pr-[0vw]">
        <div
          className="titleTexts flex-col  text-white w-[70vw] "
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div className="title text-5xl font-semibold max-lg:text-3xl max-sm:w-[85vw] max-md:w-[90vw] mb-[5vh] max-md:text-2xl">
            Empowering you with sleek
            <span className="text-Layoutneon font-light"> user-centered </span>
            solutions for success
          </div>
          <div className="subTitle text-lg  font-light ">{data.subTitle}</div>
          {/* <div className="btn">
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="connectbtn  z-10 drop-shadow-lg font-semibold text-white mt-[5vh] focus:ring-2  focus:ring-pink-300 "
            >
              <span className="flex-row flex items-center justify-center text-sm">
                {"Let's Connect"}
                <IoIosArrowRoundForward className="h-[27px] w-[27px] ml-[-10px]" />
              </span>
            </button>
          </div> */}
          <Button text={"LET'S CONNECT"} onClick={() => setOpen(true)} />
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <img src={baseAssets.rocket} alt="rocket" />
        </div>
      </div>
      <img
          src={baseAssets.lower_banner_desktop}
          alt="lowerbanner"
          className="w-full absolute z-2 bottom-0 "
          style={{marginBottom:"-3px"}}
        /> 
      {/* <div className="lowerbanner  w-full   bottom-[0%]" style={{marginBottom:"-10px"}}>
        
        
      </div> */}
      {open == true && (
        <LetsConnect
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default AboutUs;
