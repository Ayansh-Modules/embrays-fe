import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { TbMailFilled } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";
import Button from "../Components/Button";
import { appData } from "../Data/AppData";

function Footer2() {
  const data = appData.contact;
  const urls = appData.urls;
  const contact = appData.contact;
  const linkedin = appData.urls.linkedin;
  const instagram = appData.urls.instagram;
  // const mail = appData.urls.mailto;
  // const cell = appData.urls.cellto;
  return (
    <div
      className="bg-Layoutblue w-full text-xs rounded-t-md "
      style={{ boxShadow: " 0px -4px 8px,0px 0px 0px #ffffff" }}
    >
      <div className=" flex text-white justify-evenly items-start p-10 max-md:flex-col ">
        <div
          className="contactDetails max-md:w-full"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div className="pt-[10px] mb-5 max-md:flex-col max-md:flex max-md:w-full  max-md:justify-center">
            <p className=" text-xl font-medium dark:text-Layoutyellow text-left mb-5 ">
              {data.primary}
            </p>
            <p className="text-4xl max-md:text-3xl font-semibold text-white w-[10vw] max-md:w-full text-left ">
              {data.secondary}
            </p>
          </div>

          <div className="contactid text-white max-md:w-full">
            <div className="flex-row flex items-center">
              <div
                title="Email"
                className="outercircle h-[40px] w-[40px] bg-Layoutpink hover:bg-pink-600 rounded-full flex items-center justify-center my-5"
              >
                <TbMailFilled color="white" title="Email" size={25} />
              </div>
              <a
                className=" ml-1 text-base max-md:text-xs font-medium hover:text-Layoutneon"
                href={urls.mailto}
                target="_blank"
              >
                {contact.mail}
              </a>
            </div>
            <div
              className="flex-row flex items-center font-medium "
              title="Mobile"
            >
              <div
                title="Mobile"
                className="outercircle h-[40px] w-[40px] bg-Layoutpink hover:bg-pink-600 rounded-full flex items-center justify-center "
              >
                <BiSolidPhoneCall color="white" size={25} />
              </div>
              <a
                className=" pl-2 text-base max-md:text-xs  hover:text-Layoutneon "
                href={urls.cellto}
                target="_blank"
              >
                {contact.cell}
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between max-md:my-5 max-md:w-full">
          <div className="flex-col h-[11rem]  flex justify-evenly ">
            <p className=" font-semibold hover:text-Layoutneon">EXPLORE</p>
            <p className="hover:text-Layoutneon">
              <a href="/">HOME</a>
            </p>
            <p className="hover:text-Layoutneon">
              <a href="">PORTFOLIO</a>
            </p>
            <p className="hover:text-Layoutneon">
              <a href="/#contactus">CONTACT US</a>
            </p>
            <p className="hover:text-Layoutneon">
              <a href="/terms-and-conditions">TERMS & CONDITION </a>
            </p>
          </div>

          <div className="flex-col  mx-10 ">
            <p className="font-semibold m-4 hover:text-Layoutneon">
              CONTACT US
            </p>
            {/* <p title="EMAIL" className="flex items-center ">
          <a  href={mail} target="_blank" className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center m-2">   <TbMailFilled color="white" title="Email" size={25} /></a>
          EMAIL
        </p>
        <p className="flex items-center ">
             
              <a href={cell} target="_blank" title="MOBILE" className="flex-row flex items-center border h-[40px] w-[40px]  hover:bg-indigo-600 rounded-full justify-center m-2">
              <BiSolidPhoneCall color="white"  size={20} />
              </a>
          MOBILE
        </p> */}
            <p className="flex items-center ">
              <a
                href={linkedin}
                target="_blank"
                title="LINKEDIN"
                className="flex-row flex items-center border h-[40px] w-[40px] hover:text-Layoutneon hover:bg-indigo-600 rounded-full justify-center m-2"
              >
                {" "}
                <TfiLinkedin color="white" size={15} />
              </a>
              <a
                href={linkedin}
                target="_blank"
                className="hover:text-Layoutneon"
              >
                LINKEDIN
              </a>
            </p>
            <p className="flex items-center ">
              <a
                href={instagram}
                target="_blank"
                title="INSTAGRAM"
                className="flex-row flex items-center border h-[40px] w-[40px] hover:text-Layoutneon hover:bg-indigo-600 rounded-full justify-center m-2"
              >
                {" "}
                <GrInstagram color="white" size={18} />
              </a>
              <a
                href={instagram}
                target="_blank"
                className="hover:text-Layoutneon"
              >
                {" "}
                INSTAGRAM
              </a>
            </p>
          </div>
        </div>

        <div>
          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            hidden
          >
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
          <div>
            <form name="contact" method="POST">
              <div className="flex max-md:flex-col">
                <div className="Name mr-5 py-4">
                  <input
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    id="default-input"
                    className="bg-white  max-md:w-[80vw]  text-black text-sm rounded-lg   block w-[15vw] p-[15px] "
                  />
                </div>
                <div className="Mail py-4 ">
                  <input
                    placeholder="Your Mail id"
                    type="text"
                    name="email"
                    id="default-input"
                    className="  max-md:w-[80vw]  text-black text-sm rounded-lg  w-[15vw] p-[15px] "
                  />
                </div>
              </div>
              <div className="Message  pt-1">
                <textarea
                  placeholder="Message for us"
                  name="message"
                  id="message"
                  rows="4"
                  className=" w-[31vw]  max-md:w-[80vw]   text-black text-sm rounded-lg  h-[20vh] p-[15px]   "
                ></textarea>
              </div>
              <div className=" mt-[-10px] flex items-center">
                {/* <button
              type="button "
              className=" max-md:w-[75vw] text-white bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[30vw]"
            >
              Submit
            </button> */}
                <Button text={"LET'S CONNECT"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
