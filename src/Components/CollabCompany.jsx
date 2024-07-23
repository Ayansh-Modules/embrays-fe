import React from "react";
function CollabCompany(props) {
  const company = props.data.company;
  const testimonial = props.data.testimonial;
  const background = props.data.background;
  const previewImages = props.data.previewImages;

  return (
    <>
    <div className="hidden md:block md:overflow-hidden  collabcard h-[25rem] min-w-[400px] w-[35vw] bg-white rounded-2xl max-md:ml-[20vw]">
      <img alt="collabCardBg"
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
      <div className="collabcard  w-[80vw]  bg-white rounded-t-2xl">
        <img className="rounded-2xl" src={background} alt='collabCardBg' />
      </div>
      <div className="Mobile bg-Layoutblue w-[80vw] h-[16rem] flex items-center justify-center rounded-b-2xl">
        <div className="text w-[80%] text-white">
          <p className="font-semibold text-2xl text-center pb-[10px] ">
            {company}
          </p>
          <p className="text-xs pb-5">{testimonial}</p>
        </div>
      </div>
     
    </div>
    </>
  );
}

export default CollabCompany;
