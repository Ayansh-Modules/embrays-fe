import React from "react";

function ServiceBox(props) {
  const id = props.boxData.id;
  const service = props.boxData.service;
  const testimonial = props.boxData.testimonial;
  const img = props.boxData.img;
  const color = props.boxData.color;
  console.log(color);
  const isReversed = id % 2 == 0 ? "flex-col-reverse" : "";
  return (
    <div className="serviceBox ">
      <div
        className={`h-[80vh] w-[40vw] flex-col flex items-center  rounded-xl bg-${color} overflow-y-hidden  flex ${isReversed} bg- bg-no-repeat bg-cover`}
      style={{backgroundImage:`url(${img})`}}
      >
        <div
          className=" flex-col  "
        >
          <div
            className="number   "
            style={{
              WebkitTextStrokeWidth: "0.1rem",
              WebkitTextStrokeColor: "#030303",
              color: "transparent",
              fontSize: "4rem",
              fontWeight: "600",
            }}
          >
            0{id}
          </div>
          <div className="text  pb-[3vh]">
            <p className="role text-4xl font-semibold pb-[2vh]">{service}</p>
            <p className="testimonial text-lg w-[35vw] text-justify ">
              {testimonial}
            </p>
          </div>
        </div>
        {/* <img src={img} className=" object-cover h-[500px] w-[570px]"  /> */}
      </div>
    </div>
  );
}

export default ServiceBox;
