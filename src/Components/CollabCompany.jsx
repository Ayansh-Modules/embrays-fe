import React from "react";
import baseAssets from "../assets/baseAssets";

function CollabCompany(props) {
  const company = props.data.company
  const testimonial = props.data.testimonial
  const background = props.data.background
  const previewImages = props.data.previewImages

    
  return (
    <div className="">
      <div className="collabcard h-[25rem] w-[37rem] bg-white rounded-2xl">
        <img className="rounded-2xl" src={background} />
        <div className="overlay">
          <div className="text w-[80%] ">
            <p className="font-semibold text-2xl text-center pb-[10px]">{company}</p>
            <p className="text-base">{testimonial}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollabCompany;
