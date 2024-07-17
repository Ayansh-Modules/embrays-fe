import { GrInstagram } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { appData } from "../Data/AppData";
function Footer() {
  const linkedin = appData.urls.linkedin;
  const instagram = appData.urls.instagram;
  const navigate = useNavigate();
  function handleNavigation() {
    navigate("/terms-and-conditions");
  }
  return (
    <div className="footer pt-[25px] pb-[10px] w-full bg-Layoutblue flex-col flex items-center justify-center px-[10vw]"
    style={{ boxShadow: " 9px -9px 18px #898989,-9px 9px 18px #ffffff" }}
    
    >
      <div className=" flex  justify-between w-full  max-md:flex-col">
        <div className="socialMedia flex-row flex items-center justify-start max-md:pb-8">
          <div title="Linkedin" className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center mr-[2vw]">
            <a
              href={linkedin}
              target="_blank"
              rel="linkedin"
              aria-label="Linkedin"
            >
              <TfiLinkedin color="white" />
            </a>
          </div>
              
               <div title="Instagram" className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center ">
            <a
              href={instagram}
              target="_blank"
              rel="instagram"
              title="Instagram"
              aria-label="instagram"
            >
              <GrInstagram color="white" />
            </a>
          </div>
        </div>
        <div className="pageLink  flex-row flex items-center  justify-evenly   max-md:w-full ">
          <div className="flex  max-sm:flex-col max-md:flex-col  max-md:w-[50vw] ">
            <a
              href="/"
              className="home text-white text-sm  hover:text-Layoutneon pr-[20px]"
            >
              HOME
            </a>
            <div className="portfolio text-white text-sm  hover:text-Layoutneon pr-[20px]">
              PORTFOLIO
            </div>
          </div>

          <div className="flex  max-sm:flex-col max-md:flex-col  max-md:w-[50vw] ">
            <a
              href="/#contactus"
              className="contact text-white text-sm  hover:text-Layoutneon pr-[20px]"
            >
              CONTACT
            </a>
            <div
              className="t&c text-white text-sm hover:text-Layoutneon text-start pr-[20px] max-md:p-[0]"
              onClick={() => {
                handleNavigation();
              }}
            >
              TERMS & CONDITIONS
            </div>
          </div>
        </div>
      </div>
      <div className="copyright  text-gray-400 pt-[20px] pb-[5px]">
        Copyright © 2024, All Right Reserved
      </div>
    </div>
  );
}

export default Footer;
