import React from "react";
import { appData } from "../Data/AppData";
import baseAssets from "../assets/baseAssets";

function HowItWorks() {
  const data = appData.how_it_works;
  const content = data.content;
  return (
    <div id="howitworks" className="h-[115vh] w-full bg-Layoutblue flex-col flex items-center justify-center">
      <div
        className="title text-7xl font-semibold flex-col flex items-center justify-center text-Layoutneon "
        style={{ textShadow: "gray -5px -5px" }}
      >
        {data.title}
      </div>
      <div className="content h-[90vh] w-full flex-row flex items-center justify-center mt-[5vh]">
        <div className="h-[50vh] w-[50vw] flex items-center justify-center">
          <div
            className="rocketgif rounded-full h-[26rem] w-[26rem] bg-Layoutring felx flex items-center justify-center p-[10px] "
            style={{ boxShadow: "0rem 0 60rem 6rem rgba(175, 69, 201, 0.88)" }}
          >
            <img
              src={baseAssets.rocketGif}
              className="rounded-full h-[22rem] w-[22rem] border-[3px] border-Layoutyellow "
            />
          </div>
          <img
            src={baseAssets.ring}
            className="absolute left-[25rem] h-[40rem]"
          />
        </div>
        <div className="testimonials h-[60vh] w-[50vw] ">
          <div className="one w-[37vw] flex">
            <div className="flex">
              <div className="point one text-black rounded-full bg-Layoutyellow w-[2.2rem] h-[2.2rem] text-center flex items-center justify-center font-semibold border-[3px] border-white">
                1
              </div>
            </div>

            <div className="">
              <div className="title text-Layoutyellow ">{content[0].title}</div>
              <div className="testimonial text-white ">
                {content[0].testimonial}
              </div>
            </div>
          </div>

          <div className="two w-[37vw] mt-[5vh]">
            <div className="three w-[37vw] mt-[5vh]">
              <div className="title text-Layoutyellow ">{content[2].title}</div>
              <div className="testimonial text-white ">
                {content[2].testimonial}
              </div>
            </div>
            <div className="four w-[37vw] mt-[5vh]">
              <div className="title text-Layoutyellow ">{content[3].title}</div>
              <div className="testimonial text-white ">
                {content[3].testimonial}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
