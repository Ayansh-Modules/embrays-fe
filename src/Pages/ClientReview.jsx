import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientThought from "../Components/ClientThought";
import { appData } from "../Data/AppData";
function ClientReview() {
  const data = appData.clientReview;
  const compName = appData.companyName;

  return (
    <div
      className="clientReview flex-col flex items-center justify-center h-[100vh] w-full overflow-x-hidden overflow-y-auto"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <div className="title mb-[5rem] flex-col flex items-center justify-center mt-[5rem]">
        <div
          className="title text-5xl font-bold mb-[2rem] text-Layoutblue"
          data-aos="fade-up"
        >
          {data.title}
          <span className="text-Layoutpink font-normal">{compName} </span>
        </div>
        <h6 className=" subtitle  text-xl  text-gray-900 dark:text-black text-center w-[35vw]">
          {data.subTitle}
        </h6>
      </div>
      <div
        className="pattern "
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      ></div>

      <div className="w-full h-90">
        <Swiper
          className="sample-slider"
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 0 }}
          slidesPerView={4}
          speed={2000}
          spaceBetween={30}
        >
          {data.allReviews.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <ClientThought data={review} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default ClientReview;
