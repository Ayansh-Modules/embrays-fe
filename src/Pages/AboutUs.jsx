import { IoIosArrowRoundForward } from "react-icons/io";
import baseAssets from "../assets/baseAssets";

import { appData } from "../Data/AppData";
function AboutUs() {
  const data = appData.aboutUs;
  return (
    <>
      <div className="about h-[115vh] w-full bg-Layoutblue flex items-center justify-center overflow-x-hidden overflow-y-auto">
        <div className="titleTexts flex-col w-[60vw] h-[90vh] text-white ml-[100px]">
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
              type="button"
              className="connectbtn h-[7vh] w-[10vw]  font-semibold text-white bg-Layoutpink rounded-xl mt-[5vh] focus:ring-2  focus:ring-pink-300 "
            >
              <span className="flex-row flex items-center justify-center">
                {"Let's Connect"}
                <IoIosArrowRoundForward
                  style={{ height: "50px", width: "30px" }}
                />
              </span>
            </button>
          </div>
        </div>
        <div className="rocket">
          <img
            src={baseAssets.rocket}
            className="h-[47rem] w-[40rem]  overflow-y-hidden   "
          />
        </div>
      </div>
      <div className="lowerbanner absolute top-[102.5vh] w-full">
        <img src={baseAssets.lower_banner_desktop} />
      </div>
    </>
  );
}

export default AboutUs;
