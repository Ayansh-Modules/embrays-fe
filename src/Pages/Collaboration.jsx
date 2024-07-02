import CollabCompany from "../Components/CollabCompany";
import { appData } from "../Data/AppData";
import baseAssets from "../assets/baseAssets";

// import { IoRemoveOutline } from "react-icons/io5";
function Collaboration() {
  const data = appData.collaboration;
  
 const CollabCompanyParam = getCollabData()
  return (
    <div
      className="h-[100vh] w-full bg-no-repeat bg-cover flex-col flex items-center justify-center"
      style={{
        backgroundImage: `url(${baseAssets.collaborationBackgroundImage})`,
      }}
    >
      <div
        className="tile text-6xl font-semibold text-Layoutblue mb-[5rem] flex-row flex items-center justify-center"
        style={{ textShadow: "white 5px 5px" }}
      >
        {/* <IoRemoveOutline color='white' className='h-[20rem] w-[30rem]'/> */}
        {data.title}
      </div>
      <div className="cards ">
        <CollabCompany data = {CollabCompanyParam} />
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
      background : baseAssets.collaborationCoachpxMain,
      onclickBackground0ne : baseAssets.collaborationCoachpxOne,
      onclickBackgroundTwo : baseAssets.collaborationCoachpxTwo
    },
    {
      company: content[1].company,
      testimonial: content[1].testimonial,
      background : baseAssets.collaborationCompliantLabsMain,
      onclickBackground0ne : baseAssets.collaborationCompliantLabsOne,
      onclickBackgroundTwo : baseAssets.collaborationCompliantLabsTwo,
      onclickBackgroundThree : baseAssets.collaborationCompliantLabsThree,
      onclickBackgroundFour : baseAssets.collaborationCompliantLabsFour
    },
    {
      company: content[2].company,
      testimonial: content[2].testimonial,
      background : baseAssets.collaborationTrueuserMain,
      onclickBackground0ne : baseAssets.collaborationTrueuserOne,
      onclickBackgroundTwo : baseAssets.collaborationTrueuserTwo,
      onclickBackgroundThree : baseAssets.collaborationTrueuserThree,
    },
    {
      company: content[3].company,
      testimonial: content[3].testimonial,
      background : baseAssets.collaborationSkillmitraMain,
      onclickBackground0ne : baseAssets.collaborationSkillmitraOne,
      onclickBackgroundTwo : baseAssets.collaborationSkillmitraTwo,
      onclickBackgroundThree : baseAssets.collaborationSkillmitraThree,
    },
    {
      company: content[4].company,
      testimonial: content[4].testimonial,
      background : baseAssets.collaborationStockdaddyMain,
      onclickBackground0ne : baseAssets.collaborationStockdaddyOne,
      onclickBackgroundTwo : baseAssets.collaborationStockdaddyTwo,
      onclickBackgroundThree : baseAssets.collaborationStockdaddyThree,
      onclickBackgroundFour : baseAssets.collaborationStockdaddyFour
    },
    {
      company: content[5].company,
      testimonial: content[5].testimonial,
      background : baseAssets.collaborationSettlersMain,
      onclickBackground0ne : baseAssets.collaborationSettlersOne,
      onclickBackgroundTwo : baseAssets.collaborationSettlersTwo,
      onclickBackgroundThree : baseAssets.collaborationSettlersThree,
    },
    {
      company: content[6].company,
      testimonial: content[6].testimonial,
      background : baseAssets.collaborationTutionbudMain,
      onclickBackground0ne : baseAssets.collaborationTutionbudOne,
      onclickBackgroundTwo : baseAssets.collaborationTutionbudTwo,
      onclickBackgroundThree : baseAssets.collaborationTutionbudThree,
      onclickBackgroundFour : baseAssets.collaborationTutionbudFour
    },
    {
      company: content[7].company,
      testimonial: content[7].testimonial,
      background : baseAssets.collaborationIamrapidMain,
      onclickBackground0ne : baseAssets.collaborationIamrapidOne,
      onclickBackgroundTwo : baseAssets.collaborationIamrapidTwo,
      onclickBackgroundThree : baseAssets.collaborationIamrapidThree,
      onclickBackgroundFour : baseAssets.collaborationIamrapidFour
    },
  ];
  return collabData
}

export default Collaboration;
