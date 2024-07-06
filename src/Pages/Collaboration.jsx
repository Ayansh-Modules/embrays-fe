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
      className=" w-[100vw] bg-no-repeat bg-cover flex-col flex items-center justify-center overflow-hidden "
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
      <div className="cards h-[80vh]  w-[100vw]">
        <Swiper
          className="sample-slider"
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 1000 }}
          slidesPerView={2.8}
          speed={3000}
          spaceBetween={80}
          navigation={true}
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
      link: content[0].company,
      testimonial: content[0].testimonial,
      background: baseAssets.collaborationCoachpxMain,
      previewImages: [
        baseAssets.collaborationCoachpxOne,
        baseAssets.collaborationCoachpxTwo,
      ],
    },
    {
      company: content[1].company,
      testimonial: content[1].testimonial,
      background: baseAssets.collaborationCompliantLabsMain,
      previewImages: [
        baseAssets.collaborationCompliantLabsOne,
        baseAssets.collaborationCompliantLabsTwo,
        baseAssets.collaborationCompliantLabsThree,
        baseAssets.collaborationCompliantLabsFour,
      ],
    },
    {
      company: content[2].company,
      testimonial: content[2].testimonial,
      background: baseAssets.collaborationTrueuserMain,
      previewImages: [
        baseAssets.collaborationTrueuserOne,
        baseAssets.collaborationTrueuserTwo,
        baseAssets.collaborationTrueuserThree,
      ],
    },
    {
      company: content[3].company,
      testimonial: content[3].testimonial,
      background: baseAssets.collaborationSkillmitraMain,
      previewImages: [
        baseAssets.collaborationSkillmitraOne,
        baseAssets.collaborationSkillmitraTwo,
        baseAssets.collaborationSkillmitraThree,
      ],
    },
    {
      company: content[4].company,
      testimonial: content[4].testimonial,
      background: baseAssets.collaborationStockdaddyMain,
      previewImages: [
        baseAssets.collaborationStockdaddyOne,
        baseAssets.collaborationStockdaddyTwo,
        baseAssets.collaborationStockdaddyThree,
        baseAssets.collaborationStockdaddyFour,
      ],
    },
    {
      company: content[5].company,
      testimonial: content[5].testimonial,
      background: baseAssets.collaborationSettlersMain,
      previewImages: [
        baseAssets.collaborationSettlersOne,
        baseAssets.collaborationSettlersTwo,
        baseAssets.collaborationSettlersThree,
      ],
    },
    {
      company: content[6].company,
      testimonial: content[6].testimonial,
      background: baseAssets.collaborationTutionbudMain,
      previewImages: [
        baseAssets.collaborationTutionbudOne,
        baseAssets.collaborationTutionbudTwo,
        baseAssets.collaborationTutionbudThree,
        baseAssets.collaborationTutionbudFour,
      ],
    },
    {
      company: content[7].company,
      testimonial: content[7].testimonial,
      background: baseAssets.collaborationIamrapidMain,
      previewImages: [
        baseAssets.collaborationIamrapidOne,
        baseAssets.collaborationIamrapidTwo,
        baseAssets.collaborationIamrapidThree,
        baseAssets.collaborationIamrapidFour,
      ],
    },
  ];
  return collabData;
}

export default Collaboration;
