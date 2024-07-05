import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
function CollabCardModal() {
  return (
    <div className="connectbox h-full z-[1] bg-black w-full flex flex-col fixed inset-0 bg-opacity-30 backdrop-blur-sm justify-center items-center">
      <div className="bg-white mt-[10vh] h-[80vh] w-[60vw] z-[2] rounded-2xl flex-col items-center justify-center">

        <div className="collabModal flex items-center font-semibold text-2xl ">
          <span className="">{"company name"}</span>
          <span className="text-Layoutblue "><FaExternalLinkAlt /></span>
        </div>
        <div className="allImages flex items-end justify-center w-full bg-pink-400">
          <div className="leftimg bg-black">hell0</div>
          <div className="rightImg bg-purple-500">hello</div>
        </div>
      </div>
    </div>
  );
}

export default CollabCardModal;
