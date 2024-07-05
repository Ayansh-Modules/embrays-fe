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
      className="clientReview flex-col flex items-center justify-center w-full overflow-x-hidden pb-28"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <div className="title  flex-col flex items-center justify-center pt-[3rem] ">
        <div
          className="title  text-4xl max-md:text-2xl text-center font-bold mb-[2rem] text-Layoutblue "
          data-aos="fade-up"
        >
          {data.title}
          <span className="company text-Layoutpink font-normal">
            {compName}{" "}
          </span>
        </div>
        <h6 className="  subtitle text-gray-900 dark:text-black text-center  max-md:text-sm">
          {data.subTitle}
        </h6>
      </div>
      <div
        className="pattern  "
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      ></div>

      <div className="w-full pt-[3rem] pb-[3rem] ">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 0 }}
          speed={2000}
          centeredSlides={true}
          centeredSlidesBounds={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
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
