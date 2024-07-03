import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CollabCompany from "../Components/CollabCompany";
import { appData } from "../Data/AppData";
import baseAssets from "../assets/baseAssets";

// import { IoRemoveOutline } from "react-icons/io5";
function Collaboration() {
  const data = appData.collaboration;

  const collabCompanyParam = getCollabData();
  return (
    <div
      className="h-[110vh] w-full bg-no-repeat bg-cover flex-col flex items-center justify-center "
      style={{
        backgroundImage: `url(${baseAssets.collaborationBackgroundImage})`,
      }}
    >
      <div
        className="tile text-6xl font-semibold text-Layoutblue m-[5rem] flex-row flex items-center justify-center"
        style={{ textShadow: "white 5px 5px" }}
      >
        {data.title}
      </div>
      <div className="cards h-[80vh] w-[100vw]" >
        <Swiper
          className="sample-slider"
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 0 }}
          slidesPerView={2.5}
          speed={2000}
          spaceBetween={80}
        >
          {collabCompanyParam.map((content, index) => {
            return (
              <SwiperSlide key={index}>
                <CollabCompany data={content} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
function getCollabData() {
  const data = appData.collaboration;
  const content = data.content;
  const collabData = [
    {
      company: content[0].company,
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
