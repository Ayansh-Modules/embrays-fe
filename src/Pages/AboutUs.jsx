import { IoIosArrowRoundForward } from "react-icons/io";
import baseAssets from "../assets/baseAssets";
import { appData } from "../Data/AppData";
import { useState } from "react";
import LetsConnect from "../Components/LetsConnect";
function AboutUs() {
  const data = appData.aboutUs;
  const [open ,setOpen] = useState (false)
  function handleClickOpen (){
    setOpen(true)
  }
  function handleClickClose (){
    setOpen(false)
  }
  return (
    <>
      <div className="about   bg-Layoutblue flex items-center justify-center overflow-x-hidden overflow-y-auto l" style={{height:"115vh",width:"100vw"}}>
        <div className="titleTexts flex-col w-[60vw] h-[90vh] text-white ml-[100px]"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000">
          <div className="title text-6xl font-normal w-[55vw]  mb-[5vh]">
            Empowering you with sleek{" "}
            <span className="text-Layoutneon font-light">user-centered</span>{" "}
            solutions for success
          </div>
          <div className="subTitle text-lg w-[45vw] font-light ">
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
                  style={{ height: "27px", width: "27px" ,marginLeft:"-10px" }}
                />
              </span>
            </button>
            {/* {open== true ? <LetsConnect /> : <></>} */}
            
          </div>
        </div>
        <div className="rocket"data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease"
              data-aos-duration="1000">
          <img
            src={baseAssets.rocket}
            className="h-[40rem] w-[40rem]  overflow-y-hidden "
          />
        </div>
      </div>
      <div className="lowerbanner absolute top-[105vh] w-full">
        <img src={baseAssets.lower_banner_desktop} />
      </div>

     
    </>
  );
}

export default AboutUs;
