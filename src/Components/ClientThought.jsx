import React from "react";
function ClientThought(props) {
  const data = props.data;
  return (
    <div>
      <div className="block max-w-[26rem] max-md:w-[20rem] h-[15rem] max-md:text-xs overflow-x-clip p-5 border-2  rounded-2xl border-black hover:bg-gray-100 bg-white ">
        <h5 className="mb-5 text-lg font-semibold tracking-tight text-black ">
          {data.company}
        </h5>
        <p className="font-normal  text-justify text-sm max-md:text-xs">
          {data.review}
        </p>
      </div>
    </div>
  );
}

export default ClientThought;
