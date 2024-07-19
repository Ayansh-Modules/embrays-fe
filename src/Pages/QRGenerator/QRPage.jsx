import { QRCodeSVG } from "qrcode.react";
import React, { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { IoIosGlobe } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import baseAssets from "../../assets/baseAssets";

import Email from "./Email";
import PDF from "./PDF";
import SMS from "./SMS";
import Text from "./Text";
import URL from "./URL";
function QRPage() {
  const tabItems = [
    { text: "URL", icon: <IoIosGlobe size={20} className="mr-2" /> },
    { text: "Email", icon: <FiMail size={16} className="mr-2" /> },
    { text: "Text", icon: <GrDocumentText className="mr-2" /> },
    { text: "SMS", icon: <MdOutlineTextsms size={16} className="mr-2" /> },
    { text: "PDF", icon: <FaRegFilePdf className="mr-2" /> },
  ];
  const pattern = baseAssets.pattern;
  const [currentTab, setCurrentTab] = useState(0);

  const colorPalette = [
    { color: "#000000" },
    { color: "#18417E" },
    { color: "#D75827" },
    { color: "#E83224" },
    { color: "#285F2F" },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img
        src={pattern}
        alt=""
        srcset=""
        className="absolute top-28 left-0 size-24"
      />
      <img
        src={pattern}
        alt=""
        srcset=""
        className="absolute bottom-0 right-0 size-24"
      />
      <div className="text-4xl font-semibold text-Layoutblue mt-5">
        QR GENERATOR
      </div>
      <div
        className="w-[70vw]  border-2 border-black rounded-lg flex my-10"
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <div className="w-[50vw] border-2 rounded-l-lg m-5 mr-0">
          {/* tools */}
          <div className="Tools flex items-center justify-evenly p-5 border-b-2 bg-gray-100">
            {tabItems.map((value, index) => {
              return (
                <QRPageButton
                  key={index}
                  onClick={() => setCurrentTab(index)}
                  text={value.text}
                  icon={value.icon}
                />
              );
            })}
          </div>

          {/* ToolComponents */}
          <div className="ToolComponents">
            {currentTab === 0 ? (
              <URL />
            ) : currentTab === 1 ? (
              <Email />
            ) : currentTab === 2 ? (
              <Text />
            ) : currentTab === 3 ? (
              <SMS />
            ) : currentTab === 4 ? (
              <PDF />
            ) : null}
          </div>

          {/* colorComponents */}
          <p className="text-sm font-semibold border-t-2 mt-5 pt-5">
            <span className="ml-10 ">Appearance</span> <br />
            <span className="text-xs font-normal ml-10 ">
              Choose Your Colors
            </span>
          </p>
          <div className="colorComponents flex items-center ml-5 pb-3">
            {colorPalette.map((value, index) => {
              return <QRPageColorPalette key={index} color={value.color} />;
            })}
          </div>
        </div>

        {/* QR */}

        <div className=" QR w-[20vw] border-2 rounded-r-lg m-5 ml-0 border-l-0 flex-col flex items-center justify-center">
          <QRCodeSVG
            fgColor="blue"
            size={200}
            value="https://connect.jayshree.tech/"
            className="my-5"
          />
       <button class="bg-Layoutblue hover:bg-gray-400 text-white hover:text-black font-semibold my-5 py-3 px-5 rounded-xl inline-flex items-center justify-between">
            <span>Download QR</span>
            <IoDownloadOutline className="size-[20px] ml-2 stroke-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

function QRPageButton({ text, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="url cursor-pointer h-10 w-28 border-2 hover:border-Layoutblue rounded-lg flex items-center justify-center text-sm font-semibold hover:text-Layoutblue"
    >
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


/*

{ ES6 }
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


import React, { useRef } from 'react';
import { QRCodeSVG } from 'react-qrcode-svg';
import { IoDownloadOutline } from 'react-icons/io5';
import htmlToImage from 'html-to-image';

const DownloadQRCode = () => {
  const qrRef = useRef();

  const downloadQR = async () => {
    const dataUrl = await htmlToImage.toPng(qrRef.current);
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'qrcode.png';
    link.click();
  };

  return (
    <div>
      <div ref={qrRef} className="my-5">
        <QRCodeSVG
          fgColor="blue"
          size={200}
          value="https://connect.jayshree.tech/"
        />
      </div>
      <button
        onClick={downloadQR}
        className="bg-Layoutblue hover:bg-gray-400 text-white hover:text-black font-semibold my-5 py-3 px-5 rounded-xl inline-flex items-center justify-between"
      >
        <span>Download QR</span>
        <IoDownloadOutline className="size-[20px] ml-2 stroke-2" />
      </button>
    </div>
  );
};

export default DownloadQRCode;

*/