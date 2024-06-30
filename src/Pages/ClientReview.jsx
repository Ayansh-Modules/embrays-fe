import React from "react";
import { appData } from "../Data/AppData";
import ClientThought from "../Components/ClientThought";
function ClientReview() {
  const data = appData.clientReview;
  return (
    <div className=" clientreview flex-col flex items-center justify-center h-[100vh] w-[100vw]">
      <div className="title mb-[5rem] flex-col flex items-center justify-center"  >
        <div className= "title text-4xl font-bold mb-[2rem] text-Layoutblue"> {data.title}</div>
        <h6 className=" subtitle text-base  text-gray-900 dark:text-black text-center"> {data.subTitle}</h6>
      </div>
      <ClientThought />

    </div>
  );
}

export default ClientReview;
