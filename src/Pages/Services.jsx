import React from "react";
import { PiShootingStarFill } from "react-icons/pi";
import ServiceBox from "../Components/ServiceBox";
import { appData } from "../Data/AppData";
import { layoutColors } from "../Utility/Colors";
import baseAssets from "../assets/baseAssets";

function Services() {
  const boxParam = getBoxData();
  return (
    <div className="h-[220vh] w-full flex-col flex items-center justify-center overflow-x-auto ">
      <div className="title flex-col items-center justify-center ">
        <p className="text-6xl font-semibold flex absolute top-[140vh] left-[35vw]">
          MASTERY
          <PiShootingStarFill
            color={layoutColors.yellow}
            className="h-[12vh] w-[12vw] absolute left-[17vw] top-[-4vh]"
          />
        </p>
        <p className="text-6xl font-semibold text-Layoutpink absolute top-[149vh]  left-[48vw]">
          UNLEASHED
        </p>
      </div>

      <div className="services">
        <div className="rowone flex-row flex items-center justify-center absolute top-[155vh] left-[10vw]">
          <div className="boxone">
            <ServiceBox boxData={boxParam[0]} />
          </div>

          <div className="boxtwo ml-[1vw] mt-[10rem]">
            <ServiceBox boxData={boxParam[1]} />
          </div>
        </div>
        <div className="rowtwo flex-row flex items-center justify-center absolute top-[237vh] left-[10vw]">
          <div className="boxthree">
            <ServiceBox boxData={boxParam[2]} />
          </div>
          <div className="boxfour ml-[1vw] mt-[10rem]">
            <ServiceBox boxData={boxParam[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function getBoxData() {
  const data = appData.services.ourService;
  const boxParam = [
    {
      id: data[0].id,
      service: data[0].serviceOne,
      testimonial: data[0].testimonial,
      img: baseAssets.serviceImgOne,
      color: "#FCD205",
    },
    {
      id: data[1].id,
      service: data[1].serviceTwo,
      testimonial: data[1].testimonial,
      img: baseAssets.serviceImgTwo,
      color: "#B483FF",
    },
    {
      id: data[2].id,
      service: data[2].serviceThree,
      testimonial: data[2].testimonial,
      img: baseAssets.serviceImgThree,
      color: "#FF6839",
    },
    {
      id: data[3].id,
      service: data[3].serviceFour,
      testimonial: data[3].testimonial,
      img: baseAssets.serviceImgFour,
      color: "#FF4F70",
    },
  ];
  return boxParam;
}
export default Services;
