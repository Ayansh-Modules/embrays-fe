import React from "react";

function TestimonialBox(props) {
  const title = props.data.title;
  const subtitle = props.data.subtitle;
  const image = props.data.image;
  const background = props.data.background;
  console.log(image);
  console.log(background);
  return (
    <div
      className={`grid h-[22rem] w-[25vw] max-lg:w-[25rem] max-md:w-[90vw] mt-[3rem] rounded-2xl text-white bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="icon p-[30px]">
        <img src={image} alt="whyUsBoxbg"/>
      </div>
      <div className="title pl-[20px] text-2xl font-semibold">{title}</div>
      <div className="testimonial text-justify ml-[10px] mr-[10px] p-[10px] text-sm">
        {subtitle}
      </div>
    </div>
  );
}

export default TestimonialBox;
