import React from "react";
import { appData } from "../Data/AppData";
import baseAssets from "../assets/baseAssets";
function HowItWorks() {
  const data = appData.how_it_works;
  const content = data.content;
  return (
    <div
      id="howitworks"
      className="  bg-Layoutblue flex-col  flex items-center justify-center py-[10vh] overflow-hidden"
    >
      <div
        className="title max-md:text-4xl text-6xl py-[50px] font-semibold flex-col flex items-center justify-center text-Layoutneon "
        // style={{ textShadow: "gray -5px -5px" }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="3000"
      >
        {data.title}
      </div>
      <div className="content my-[3rem]  flex-row max-lg:flex-col flex items-center justify-between  w-[100vw] lg:px-[10vw] max-lg:px-[5vw] max-md:px-0">
        <div className="flex items-center justify-center ">
          <div
            className="rocketgif rounded-full h-[23rem] w-[23rem] bg-Layoutring felx flex items-center justify-center p-[10px] 
            max-md:h-[17rem] max-md:w-[17rem] 
            "
            style={{ boxShadow: "0rem 0 10rem 6rem rgba(175, 69, 201, 0.88)" }}
          >
            <img
              alt="rocketgif"
              src={baseAssets.rocketGif}
              className="rounded-full h-[20rem] w-[20rem] border-[3px] border-Layoutyellow 
              max-md:h-[15rem] max-md:w-[15rem]
              "
            />
          </div>
          {/* <img alt="ring"
            src={baseAssets.ring}
            className="absolute left-[25rem] h-[40rem] max-md:hidden"
          /> */}
        </div>

        <div className="max-md:pt-[20vw] ">
          {content.map((content, index) => {
            return (
              <div
                className="flex mt-10 lg:ml-20 text-justify "
                key={index}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease"
                data-aos-duration="3000"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="flex ">
                  <div className="point one mr-6 max-md:mr-[2vw] max-sm:mr-[1rem] max-md:mt-1 text-black rounded-full bg-Layoutyellow w-[2.2rem] h-[2.2rem] max-md:size-[1.5rem] text-center flex items-center justify-center font-semibold border-[3px] border-white">
                    {index + 1}
                  </div>
                </div>
                <div className="one">
                  <div className="title text-Layoutyellow font-medium text-3xl max-md:text-xl mb-2">
                    {content.title}
                  </div>
                  <div className="testimonial  text-white text-base w-[40vw] flex items-start justify-start max-lg:w-[80vw]">
                    {content.testimonial}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
