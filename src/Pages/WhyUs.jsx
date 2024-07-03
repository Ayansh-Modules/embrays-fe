import React from "react";
import TestimonialBox from "../Components/TestimonialBox";
import { appData } from "../Data/AppData";
import baseAssets from "../assets/baseAssets";

function WhyUs() {
  const TestimonialBoxParams = getTestimonials();

  return (
    <div className="h-[200vh] w-full bg-Layoutblack flex">
      <div className="why us h-[50vh] w-[35vw] ml-[5vw] pt-[5rem]"
       data-aos="fade-right"
       data-aos-offset="200"
       data-aos-easing="ease"
       data-aos-duration="1000">
        <p className="text-l text-Layoutneon ">WHY US?</p>
        <p className="text-4xl text-white font-semibold w-[20vw] mt-[1rem]">
          Choose us for{" "}
          <p className=" bg-Layoutneon text-Layoutblack mb-[1rem] mt-[2vh] w-[10rem] p-[5px] rounded">
            brand-{" "}
          </p>
          <p className=" bg-Layoutneon text-Layoutblack mb-[1rem] p-[5px] w-[17rem] rounded">
            transforming{" "}
          </p>
          <p className=" bg-Layoutneon text-Layoutblack mb-[1rem] p-[5px] w-[12rem] rounded">
            products
          </p>
          <span>and experiences</span>
        </p>
      </div>
      <div className="sectiongrid flex-col">
        <div className="gridsrowone w-[60vw] flex justify-evenly mr-[5vw]">
          <TestimonialBox data={TestimonialBoxParams[0]} />
          <TestimonialBox data={TestimonialBoxParams[1]} />
        </div>
        <div className="gridsrowtwo w-[60vw] flex justify-evenly mr-[5vw]">
          <TestimonialBox data={TestimonialBoxParams[2]} />
          <TestimonialBox data={TestimonialBoxParams[3]} />
        </div>
        <div className="gridsrowthree w-[60vw] flex justify-evenly mr-[5vw]">
          <TestimonialBox data={TestimonialBoxParams[4]} />
          <TestimonialBox data={TestimonialBoxParams[5]} />
        </div>
      </div>
    </div>
  );
}
function getTestimonials() {
  const data = appData.whyUs.testimonials;
  const getTestimonials = [
    {
      title: data[0].title,
      subtitle: data[0].subTitle,
      image: baseAssets.whyUsInnovativeSolutions,
      background: baseAssets.whyUsCardImgOne,
    },
    {
      title: data[1].title,
      subtitle: data[1].subTitle,
      image: baseAssets.whyUsUserCentricApproach,
      background: baseAssets.whyUsCardImgTwo,
    },
    {
      title: data[2].title,
      subtitle: data[2].subTitle,
      image: baseAssets.whyUsStrategicDesignThinking,
      background: baseAssets.whyUsCardImgThree,
    },
    {
      title: data[3].title,
      subtitle: data[3].subTitle,
      image: baseAssets.whyUsProvenExpertise,
      background: baseAssets.whyUsCardImgFour,
    },
    {
      title: data[4].title,
      subtitle: data[4].subTitle,
      image: baseAssets.whyUsTimelyDelivery,
      background: baseAssets.whyUsCardImgFive,
    },
    {
      title: data[5].title,
      subtitle: data[5].subTitle,
      image: baseAssets.whyUsCollaborativePartnership,
      background: baseAssets.whyUsCardImgSix,
    },
  ];
  return getTestimonials;
}

export default WhyUs;
