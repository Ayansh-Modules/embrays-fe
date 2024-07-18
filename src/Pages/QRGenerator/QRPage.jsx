import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineTextsms } from "react-icons/md";
import PDF from "./PDF";
function QRPage() {
  const tabItems = [
    { text: "URL", icon: <IoIosGlobe size={20} className="mr-2" /> },
    { text: "Email", icon: <FiMail size={16} className="mr-2" /> },
    { text: "Text", icon: <GrDocumentText className="mr-2" /> },
    { text: "SMS", icon: <MdOutlineTextsms size={16} className="mr-2" /> },
    { text: "PDF", icon: <FaRegFilePdf className="mr-2" /> },
  ];

  const colorPalette = [
    { color: "#000000" },
    { color: "#18417E" },
    { color: "#D75827" },
    { color: "#E83224" },
    { color: "#285F2F" },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-4xl font-semibold text-Layoutblue mt-5">QR GENERATOR </div>
      <div className="w-[70vw]  border-2 border-black rounded-lg flex my-10">
        <div className="w-[50vw] border-2 rounded-l-lg m-5 mr-0">
          {/* tools */}
          <div className="Tools flex items-center justify-evenly p-5 border-b-2 bg-gray-100">
            {tabItems.map((value, index) => {
              return (
                <QRPageButton
                  key={index}
                  index={index}
                  text={value.text}
                  icon={value.icon}
                />
              );
            })}
          </div>

          {/* ToolComponents */}
          <div className="ToolComponents">
            <PDF />
          </div>

          {/* colorComponents */}
          <p className="text-sm font-semibold border-t-2 mt-5 pt-5">
            <span className="ml-10 ">Appearance</span> <br />
            <span className="text-xs font-normal ml-10 ">
              Choose Your Colors
            </span>{" "}
          </p>
          <div className="colorComponents flex items-center ml-5 pb-3">
            {colorPalette.map((value, index) => {
              return <QRPageColorPalette key={index} color={value.color} />;
            })}
          </div>
        </div>

        {/* QR */}

        <div className="w-[20vw] border-2 rounded-r-lg m-5 ml-0 border-l-0"></div>
      </div>
    </div>
  );
}

function QRPageButton({ text, icon, index }) {
  return (
    <div className="url h-10 w-28 border-2 hover:border-Layoutblue rounded-lg flex items-center justify-center text-sm font-semibold hover:text-Layoutblue">
      {icon}
      {text}
    </div>
  );
}

function QRPageColorPalette({ color, index }) {
  return (
    <div className="h-12 w-12 rounded-full m-3  hover:border-2 hover:border-black flex justify-center items-center">
      <div
        style={{ backgroundColor: `${color}` }}
        className="h-10 w-10 rounded-full"
      ></div>
    </div>
  );
}

export default QRPage;
