import React, { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";
import { Honeypot, NetlifyForm } from "react-netlify-forms";
import { useNavigate } from "react-router-dom";
import { appData } from "../Data/AppData";

function Footer2() {
  const data = appData.contact;
  const urls = appData.urls;
  const contact = appData.contact;
  const linkedin = appData.urls.linkedin;
  const instagram = appData.urls.instagram;
  const [popupVisible, setPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  return (
    <div
      className="bg-Layoutblue w-full text-xs rounded-t-md overflow-hidden"
      style={{ boxShadow: "0px -4px 8px, 0px 0px 0px #ffffff" }}
    >
      <div className="flex-row flex max-lg:flex-col text-white justify-evenly items-start p-10 max-md:flex-col">
        <div className="flex max-md:flex-col">
          <div
            className="contactDetails max-md:w-full"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <div className="pt-[10px] mb-5 max-md:flex-col max-md:flex max-md:w-full max-md:justify-center">
              <p className="text-xl font-medium dark:text-Layoutyellow text-left mb-5">
                {data.primary}
              </p>
              <p className="text-4xl max-md:text-3xl font-semibold text-white w-[10vw] max-md:w-full text-left">
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
                  className="ml-1 text-base max-md:text-xs font-medium hover:text-Layoutneon"
                  href={urls.mailto}
                  target="_blank"
                >
                  {contact.mail}
                </a>
              </div>
              <div
                className="flex-row flex items-center font-medium"
                title="Mobile"
              >
                <div
                  title="Mobile"
                  className="outercircle h-[40px] w-[40px] bg-Layoutpink hover:bg-pink-600 rounded-full flex items-center justify-center"
                >
                  <BiSolidPhoneCall color="white" size={25} />
                </div>
                <a
                  className="pl-2 text-base max-md:text-xs hover:text-Layoutneon"
                  href={urls.cellto}
                  target="_blank"
                >
                  {contact.cell}
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-between max-md:my-5 max-md:w-[90vw]">
            <div className="flex-col h-[11rem] flex justify-evenly">
              <p className="font-semibold hover:text-Layoutneon">EXPLORE</p>
              <p className="hover:text-Layoutneon cursor-pointer">
                <div
                  onClick={() => {
                    navigate("/#aboutus");
                  }}
                >
                  HOME
                </div>
              </p>
              <p className="hover:text-Layoutneon">
                <a
                  href="https://drive.google.com/file/d/18h3hVuQdIT1MQV0vWzqDUvj03J1yIx9D/view?usp=drive_link"
                  target="_blank"
                >
                  PORTFOLIO
                </a>
              </p>
              <p className="hover:text-Layoutneon w-[5rem]">
                <a href={urls.mailto} target="_blank">
                  CONTACT US
                </a>
              </p>
              <p className="hover:text-Layoutneon">
                <a href="/terms-and-conditions" className="leading-relaxed">
                  TERMS & CONDITION
                </a>
              </p>
            </div>

            <div className="flex-col mx-10">
              <p className="font-semibold m-4 hover:text-Layoutneon">
                CONTACT US
              </p>
              <p className="flex items-center">
                <a
                  href={linkedin}
                  target="_blank"
                  title="LINKEDIN"
                  className="flex-row flex items-center border h-[40px] w-[40px] hover:text-Layoutneon hover:bg-indigo-600 rounded-full justify-center m-2"
                >
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
              <p className="flex items-center">
                <a
                  href={instagram}
                  target="_blank"
                  title="INSTAGRAM"
                  className="flex-row flex items-center border h-[40px] w-[40px] hover:text-Layoutneon hover:bg-indigo-600 rounded-full justify-center m-2"
                >
                  <GrInstagram color="white" size={18} />
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  className="hover:text-Layoutneon"
                >
                  INSTAGRAM
                </a>
              </p>
            </div>
          </div>
        </div>

        <div>
          <NetlifyForm name="contact" action="/thanks" honeypotName="bot-field">
            {({ handleChange, success, error }) => (
              <>
                <Honeypot />
                {success && <p>Thanks for contacting us!</p>}
                {error && (
                  <p>
                    Sorry, we could not reach our servers. Please try again
                    later.
                  </p>
                )}

                <div className="flex max-md:flex-col">
                  <div className="Name mr-5 py-4">
                    <input
                      placeholder="Your Name"
                      type="text"
                      name="name"
                      id="default-input"
                      className="bg-white max-md:w-[80vw] max-lg:w-[40vw] text-black text-sm rounded-lg block w-[15vw] p-[15px]"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="Mail py-4">
                    <input
                      placeholder="Your Mail id"
                      type="text"
                      name="email"
                      id="default-input"
                      className="max-md:w-[80vw] max-lg:w-[40vw] text-black text-sm rounded-lg w-[15vw] p-[15px]"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="Message pt-1">
                  <textarea
                    placeholder="Message for us"
                    name="message"
                    id="message"
                    rows="4"
                    className="w-[31vw] max-md:w-[80vw] max-lg:w-[82vw] text-black text-sm rounded-lg h-[20vh] p-[15px]"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mt-[-10px] flex items-center">
                  {errorMessage ? (
                    <div className="popup my-5 p-4 bg-red-500 text-white rounded-lg w-[31vw] max-md:w-[80vw] max-lg:w-[82vw]">
                      {errorMessage}
                    </div>
                  ) : popupVisible ? (
                    <div
                      id="popup"
                      className="popup my-5 p-4 bg-green-500 text-white rounded-lg w-[31vw] max-md:w-[80vw] max-lg:w-[82vw]"
                    >
                      Form submitted successfully!
                    </div>
                  ) : (
                    <div className="btn">
                      <button
                        type="submit"
                        className="connectbtn  z-10 drop-shadow-lg font-semibold text-white mt-[5vh] focus:ring-2  focus:ring-pink-300 "
                      >
                        <span className="flex-row flex items-center justify-center text-sm">
                          Let's Connect
                          <IoIosArrowRoundForward
                            size={20}
                            className=" ml-[-10px]"
                          />
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </NetlifyForm>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
