import React from "react";

function CollabCompany(props) {
  const company = props.data.company;
  const testimonial = props.data.testimonial;
  const background = props.data.background;
  const previewImages = props.data.previewImages;

  return (
    <>
    <div className="hidden md:block  collabcard h-[25rem] min-w-[400px] w-[35vw] bg-white rounded-2xl max-md:ml-[20vw]">
      <img
        className="rounded-2xl min-w-[400px] w-[35vw] h-[25rem] object-cover"
        src={background}
      />
      <div className="overlay">
        <div className="text w-[80%] ">
          <p className="font-semibold text-2xl text-center pb-[10px]">
            {company}
          </p>
          <p className="text-base">{testimonial}</p>
        </div>
      </div>
    </div>

    <div className=" secondcard block md:hidden">
      <div className="collabcard  w-[20rem] bg-white rounded-t-2xl">
        <img className="rounded-2xl" src={background} />
      </div>
      <div className="Mobile bg-Layoutblue w-[20rem] h-[15rem] flex items-center justify-center rounded-b-2xl">
        <div className="text w-[80%] text-white">
          <p className="font-semibold text-2xl text-center pb-[10px]">
            {company}
          </p>
          <p className="text-xs">{testimonial}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default CollabCompany;
