import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import baseAssets from "../assets/baseAssets";
import { appData } from "../Data/AppData";
function AboutUs() {
  const data = appData.aboutUs;
  const [open, setOpen] = useState(false);
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClickClose() {
    setOpen(false);
  }
  return (
    <div className="about bg-Layoutblue relative  w-[100vw] pt-20">
      <div className="flex-row pl-[19px] max-md:flex-col flex  justify-center overflow-x-hidden overflow-y-auto   ">
        <div
          className="titleTexts flex-col  text-white  "
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div className="title text-5xl  font-semibold  max-md:w-[90vw] mb-[5vh] max-md:text-2xl">
            Empowering you with sleek {" "} {" "} {" "} {" "}
            <span className="text-Layoutneon font-light">
            {" "}user-centered{" "} 
            </span>
            solutions for success
          </div>
          <div className="subTitle text-lg  font-light ">
            {data.subTitle}
          </div>
          <div className="btn">
            <button
              // onClick={handleClickOpen()}
              type="button"
              className="connectbtn  z-10 drop-shadow-lg font-semibold text-white mt-[5vh] focus:ring-2  focus:ring-pink-300 "
            >
              <span className="flex-row flex items-center justify-center text-sm">
                {"Let's Connect"}
                <IoIosArrowRoundForward
                  style={{
                    height: "27px",
                    width: "27px",
                    marginLeft: "-10px",
                  }}
                />
              </span>
            </button>
            {/* {open== true ? <LetsConnect /> : <></>} */}
          </div>
        </div>
        <div
          className="rocket max-lg:pl-[50px]"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <img src={baseAssets.rocket} className="pr-10" />
        </div>
      </div>

      <div className="lowerbanner  absolute z-2  bg-Layoutblue pt-[10px] ">
        <img src={baseAssets.lower_banner_desktop} className="w-[100vw] " />
      </div>
    </div>
  );
}

export default AboutUs;
