import React from "react";
import { appData } from "../Data/AppData";
import ClientThought from "../Components/ClientThought";
function ClientReview() {
  const data = appData.clientReview;
  const compName = appData.companyName;
  return (
    <div
      className="clientReview flex-col flex items-center justify-center h-[90vh] w-[100vw] overflow-x-hidden overflow-y-auto"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <div className="title mb-[5rem] flex-col flex items-center justify-center">
        <div
          className="title text-5xl font-bold mb-[2rem] text-Layoutblue"
          data-aos="fade-up"
        >
          {" "}
          {data.title}
          <span className="text-Layoutpink font-normal">{compName} </span>
        </div>
        <h6 className=" subtitle  text-xl  text-gray-900 dark:text-black text-center w-[35vw]">
          {" "}
          {data.subTitle}
        </h6>
      </div>
      <ClientThought />
      <div
        className="pattern "
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease"
        data-aos-duration="1000"
      ></div>
    </div>
  );
}

export default ClientReview;
