function ServiceBox(props) {
  const id = props.boxData.id;
  const service = props.boxData.service;
  const testimonial = props.boxData.testimonial;
  const img = props.boxData.img;
  const color = props.boxData.color;
  const isReversed = id % 2 == 0 ? "flex-col-reverse" : "";

  return (
    <div className="serviceBox">
      <div
        className={`h-[65vh] w-[40vw] max-md:h-[40vh] max-md:w-[90vw] flex-col flex items-center max-md:items-start rounded-xl overflow-y-hidden ${isReversed} bg- bg-no-repeat bg-cover relative`}
        style={{ backgroundColor: color }}
      >
        <div className="flex-col z-[2]">
          <div
            className="number pl-[20px]"
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
          <div className="">
            <p className="role text-3xl max-md:text-lg font-semibold pl-[20px]">
              {service}
            </p>
            <p className="testimonial text-lg p-[20px] text-justify max-md:text-sm  ">
              {testimonial}
            </p>
          </div>
        </div>
        <img
          src={img}
          className={` object-cover h-[500px] w-[570px] absolute z-[1] ${
            id % 2 == 0 ? "bottom-20 max-md:bottom-0" : "top-60 max-md:top-0"
          }`}
        />
      </div>
    </div>
  );
}

export default ServiceBox;
