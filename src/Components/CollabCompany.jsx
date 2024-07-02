import React from "react";
import baseAssets from "../assets/baseAssets";
import "./CollabCompany.css";
function CollabCompany() {
  
    
  return (
    <div className="">
      <div className="collabcard h-[25rem] w-[37rem] bg-white rounded-2xl ">
        <img src={baseAssets.collaborationCoachpxMain} />
        <div className="overlay">
          <div className="text">
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollabCompany;
