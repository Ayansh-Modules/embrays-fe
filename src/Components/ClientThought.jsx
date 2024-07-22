import React from "react";
function ClientThought(props) {
  const data = props.data;
  return (
    <div>
      <div className="max-md:ml-[12vw] block min-w-[250px] w-[26vw] max-md:w-[85vw] h-[16rem] max-md:text-xs overflow-x-clip p-5 border-2  rounded-2xl border-black hover:bg-gray-100 bg-white ">
        <h5 className="mb-[0.7vh] text-lg font-semibold tracking-tight text-black ">
          {data.company}
        </h5>
        <p className="font-normal  text-start text-sm max-md:text-xs lg:text-sm md:text-xs">
          {data.review}
        </p>
      </div>
    </div>
  );
}

export default ClientThought;
