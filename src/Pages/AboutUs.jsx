import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import baseAssets from "../assets/baseAssets";
import { appData } from "../Data/AppData";
import LetsConnect from "../Components/LetsConnect";
function AboutUs() {
  const data = appData.aboutUs;
  const [open, setOpen] = useState(false);

  return (
    <div
      id="aboutus"
      className="about bg-Layoutblue relative  w-[100vw] pt-28  flex flex-col items-start overflow-hidden "
    >

      <div className="flex-row max-md:flex-col flex overflow-x-hidden overflow-y-hidden justify-between pl-[10vw] pr-[0vw]">
        
        <div
          className="titleTexts flex-col  text-white w-[70vw] "
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div className="title text-5xl font-semibold  max-md:w-[90vw] mb-[5vh] max-md:text-2xl">
            Empowering you with sleek
            <span className="text-Layoutneon font-light"> user-centered </span>
            solutions for success
          </div>
          <div className="subTitle text-lg  font-light ">{data.subTitle}</div>
          <div className="btn">
            <button
              onClick={()=>(setOpen(true))}
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
                  
          </div>
     

        </div>
        <div
          className=""
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <img src={baseAssets.rocket} className="" />
        </div>
      </div>
    
      <div className="lowerbanner  absolute z-2  bg-Layoutblue  bottom-0">
        <img src={baseAssets.lower_banner_desktop} className="w-[100vw] " />
      </div>
        { open==true && <LetsConnect onClose={()=>{setOpen(false)}} /> }

    </div>
  );
}

export default AboutUs;
