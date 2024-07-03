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
        className={`h-[60vh] w-[40vw] max-md:h-[30vh] max-md:w-[90vw] flex-col flex items-center  rounded-xl overflow-y-hidden ${isReversed} bg- bg-no-repeat bg-cover relative`}
        style={{ backgroundColor: color }}
      >
        <div className="flex-col">
          <div
            className="number"
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
          <div className=" pb-[3vh]">
            <p className="role text-4xl font-semibold pb-[2vh]">{service}</p>
            <p className="testimonial text-lg w-[35vw] text-justify ">
              {testimonial}
            </p>
          </div>
        </div>
        <img
          src={img}
          className={` object-cover h-[500px] w-[570px] absolute z-[2] ${
            id % 2 == 0 ? "bottom-40" : "top-60"
          }`}
        />
      </div>
    </div>
  );
}

export default ServiceBox;
