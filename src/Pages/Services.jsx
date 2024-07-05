import { PiShootingStarFill } from "react-icons/pi";
import baseAssets from "../assets/baseAssets";
import ServiceBox from "../Components/ServiceBox";
import { appData } from "../Data/AppData";
import { layoutColors } from "../Utility/Colors";

function Services() {
  const boxParam = getBoxData();
  return (
    <div
      id="services"
      className="flex-col flex items-center justify-center  w-[100vw] pt-[10rem] max-md:pt-[10vh] pb-20 "
    >
      <div
        className="title flex-col items-center justify-center pb-10 max-md:pr-5"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        <div className="flex flex-row items-baseline justify-center">
          <p className="text-6xl max-md:text-3xl font-semibold flex ">
            MASTERY
          </p>
          <PiShootingStarFill
            color={layoutColors.yellow}
            className="h-20 w-20 max-md:h-14 max-md:w-14"
          />
        </div>
        <p className="text-6xl max-md:text-3xl font-semibold text-Layoutpink pl-28">
          UNLEASHED
        </p>
      </div>

      <div className="services">
        <div
          className="flex-row max-md:flex-col flex items-center justify-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <ServiceBox boxData={boxParam[0]} />

          <div className="mt-28 ml-10 max-md:mt-10 max-md:ml-0">
            <ServiceBox boxData={boxParam[1]} />
          </div>
        </div>

        <div
          className="flex-row max-md:flex-col flex items-center justify-center max-md:mt-10 mt-[0]"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <ServiceBox boxData={boxParam[2]} />

          <div className="mt-28 ml-10 max-md:mt-10 max-md:ml-0">
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
