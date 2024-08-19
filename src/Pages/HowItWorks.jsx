import React from "react";
import { appData } from "../Data/AppData";
import baseAssets from "../assets/baseAssets";

function HowItWorks() {
  const data = appData.how_it_works;
  const content = data.content;

  return (
    <div
      id="howitworks"
      className="bg-Layoutblue flex flex-col items-center justify-center py-[10vh] overflow-hidden"
    >
      <div
        className="title text-6xl max-md:text-4xl pt-[50px] font-semibold flex flex-col items-center justify-center text-Layoutneon"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        {data.title}
      </div>
      <div className="content my-[3rem] flex flex-col lg:flex-row items-center justify-between w-full lg:px-[10vw] max-lg:px-[5vw] max-md:px-0">
        <div className="flex items-center justify-center mb-10 lg:mb-0">
          <div
            className="rocketgif rounded-full h-[23rem] w-[23rem] bg-Layoutring flex items-center justify-center p-[10px] max-md:h-[17rem] max-md:w-[17rem]"
            style={{ boxShadow: "0 0 10rem 6rem rgba(175, 69, 201, 0.88)" }}
          >
            <img
              alt="rocketgif"
              src={baseAssets.rocketGif}
              className="rounded-full h-[20rem] w-[20rem] border-[3px] border-Layoutyellow max-md:h-[15rem] max-md:w-[15rem]"
            />
          </div>
        </div>
        <div className="max-md:pt-[20vw]">
          {content.map((content, index) => (
            <div
              className="flex mt-5 lg:ml-20 text-justify"
              key={index}
              data-aos="fade-left"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="flex">
                <div className="point one mr-6 max-md:mr-[2vw] max-sm:mr-[1rem] max-md:mt-1 text-black rounded-full bg-Layoutyellow w-[2.2rem] h-[2.2rem] text-center flex items-center justify-center font-semibold border-[3px] border-white">
                  {index + 1}
                </div>
              </div>
              <div className="one">
                <div className="title text-Layoutyellow font-medium text-2xl max-md:text-xl ">
                  {content.title}
                </div>
                <div className="testimonial max-sm:text-sm max-sm:w-[70vw] text-white text-base w-[40vw] flex items-start justify-start max-lg:w-[80vw]">
                  {content.testimonial}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
