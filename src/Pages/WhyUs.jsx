import TestimonialBox from "../Components/TestimonialBox";
import { appData } from "../Data/AppData";
import baseAssets from "../assets/baseAssets";

function WhyUs() {
  const TestimonialBoxParams = getTestimonials();

  return (
    <div className=" w-full bg-Layoutblack flex  max-md:flex-col max-md:justify-center justify-between pb-20 lg:px-[10vw] max-lg:px-[5vw] max-md:px-0">
      <div
        className="whyus pt-[5rem] max-md:w-full max-md:flex max-md:items-center max-md:pl-[10vw]"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        <p className="text-3xl text-white font-semibold mt-[1rem] max-md:text-center  sticky top-28 ">
          <p className=" text-sm text-Layoutneon  text-start">WHY US?</p>
          <p className="text-start ">Choose us for</p>
          <p className=" bg-Layoutneon text-Layoutblack mb-[1rem] mt-[2vh] w-[10rem] max-md:w-[15rem] p-[5px] rounded">
            brand-
          </p>
          <p className=" bg-Layoutneon text-Layoutblack mb-[1rem] p-[5px] w-[14rem] max-md:w-[15rem] rounded">
            transforming
          </p>
          <p className=" bg-Layoutneon text-Layoutblack mb-[1rem] p-[5px] w-[12rem] max-md:w-[15rem] rounded">
            products
          </p>
          <span>and experiences</span>
        </p>
      </div>
      <div className="sectiongrid flex-col max-md:w-[100vw] ">
        <div className="gridsrowone  flex justify-evenly max-lg:flex-col max-md:items-center">
          <TestimonialBox data={TestimonialBoxParams[0]} />
          <div className="w-12"></div>
          <TestimonialBox data={TestimonialBoxParams[1]} />
        </div>
        <div className="gridsrowtwo  flex justify-evenly max-lg:flex-col max-md:items-center ">
          <TestimonialBox data={TestimonialBoxParams[2]} />
          <div className="w-12"></div>

          <TestimonialBox data={TestimonialBoxParams[3]} />
        </div>
        <div className="gridsrowthree  flex justify-evenly max-lg:flex-col max-md:items-center ">
          <TestimonialBox data={TestimonialBoxParams[4]} />
          <div className="w-12"></div>

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
