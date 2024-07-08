import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import baseAssets from "../assets/baseAssets";
import CollabCardModal from "../Components/CollabCardModal";
import CollabCompany from "../Components/CollabCompany";
import { appData } from "../Data/AppData";
function Collaboration() {
  const data = appData.collaboration;

  const swiperRef = useRef();
  const collabCompanyParam = getCollabData();
  const [open, setOpen] = useState(false);
  //current index of the swiper
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className=" w-full bg-no-repeat bg-cover flex-col flex items-center justify-center overflow-hidden "
      style={{
        backgroundImage: `url(${baseAssets.collaborationBackgroundImage})`,
      }}
    >
      <div
        className="tile text-6xl max-md:text-4xl py-20  font-semibold text-Layoutblue  flex-row flex items-center justify-center text-center"
        style={{ textShadow: "white 5px 5px" }}
      >
        {data.title}
      </div>
      <div className="cards h-[80vh]  w-full">
        <Swiper
          className="sample-slider"
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 1000 }}
          slidesPerView={2.8}
          speed={3000}
          spaceBetween={80}
          navigation={true}
          centeredSlides={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {collabCompanyParam.map((content, index) => {
            return (
              <SwiperSlide
                className="cursor-pointer max-md:pl-[14vw]"
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              >
                <CollabCompany data={content} />
              </SwiperSlide>
            );
          })}
          <div
            className="swiper-button-next h-16 w-16 bg-no-repeat bg-cover bg-center cursor-pointer bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-20 rounded-full"
            onClick={() => {
              swiperRef.current.slideNext();
            }}
          >
            <img src={baseAssets.arrowRight} alt="next" className="h-8" />
          </div>
          <div
            className="swiper-button-prev h-16 w-16 bg-no-repeat bg-cover bg-center cursor-pointer bg-gray-400 backdrop-filter backdrop-blur-md bg-opacity-20 rounded-full"
            onClick={() => {
              swiperRef.current.slidePrev();
            }}
          >
            <img src={baseAssets.arrowLeft} alt="prev" className="h-8" />
          </div>
        </Swiper>
      </div>

      {open == true && (
        <CollabCardModal
          onClose={() => {
            setOpen(false);
          }}
          data={collabCompanyParam[currentIndex]}
        />
      )}
    </div>
  );
}
function getCollabData() {
  const data = appData.collaboration;
  const content = data.content;
  const collabData = [
    {
      company: content[0].company,
      link: content[0].comp_url,
      testimonial: content[0].testimonial,
      background: baseAssets.collaborationCoachpxMain,
      popUpImage: baseAssets.collaborationCoachpxPopUp,
    },
    {
      company: content[1].company,
      testimonial: content[1].testimonial,
      link: content[1].comp_url,
      background: baseAssets.collaborationCompliantLabsMain,
      popUpImage: baseAssets.collaborationCompliantLabsPopUp,
    },
    {
      company: content[2].company,
      testimonial: content[2].testimonial,
      link: content[2].comp_url,
      background: baseAssets.collaborationTrueuserMain,
      popUpImage: baseAssets.collaborationTrueuserPopUp,
    },
    {
      company: content[3].company,
      testimonial: content[3].testimonial,
      link: content[3].comp_url,
      background: baseAssets.collaborationSkillmitraMain,
      popUpImage: baseAssets.collaborationSkillmitraPopUp,
    },
    {
      company: content[4].company,
      testimonial: content[4].testimonial,
      link: content[4].comp_url,
      background: baseAssets.collaborationStockdaddyMain,
      popUpImage: baseAssets.collaborationStockdaddyPopUp,
    },
    {
      company: content[5].company,
      testimonial: content[5].testimonial,
      link: content[5].comp_url,
      background: baseAssets.collaborationSettlersMain,
      popUpImage: baseAssets.collaborationSettlersPopUp,
    },
    {
      company: content[6].company,
      testimonial: content[6].testimonial,
      link: content[6].comp_url,
      background: baseAssets.collaborationTutionbudMain,
      popUpImage: baseAssets.collaborationTutionbudPopUp,
    },
    {
      company: content[7].company,
      link: content[7].comp_url,
      testimonial: content[7].testimonial,
      background: baseAssets.collaborationIamrapidMain,
      popUpImage: baseAssets.collaborationIamrapidPopUp,
    },
  ];
  return collabData;
}

export default Collaboration;
