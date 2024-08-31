import React from "react";
function ClientThought(props) {
  const data = props.data;
  return (
    <div>
      <div className="max-md:ml-[25vw] max-sm:ml-[10vw] flex flex-col min-w-[300px] w-[26vw] h-[300px] max-sm:w-[45vw] max-lg:[80vw]  max-md:text-xs overflow-x-clip border-2  rounded-2xl border-black hover:bg-gray-100 bg-white px-5 py-10">
        <h5 className="mt-[10pxh] text-lg font-semibold tracking-tight text-black ">
          {data.company}
        </h5>
        <p className="  text-start text-black font-medium text-sm max-md:text-xs lg:text-xs xl:text-sm leading-relaxed md:text-xs my-5">
          {data.review}
        </p>
      </div>
    </div>
  );
}

export default ClientThought;
