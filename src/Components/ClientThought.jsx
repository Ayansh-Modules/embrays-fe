import React from "react";
function ClientThought(props) {
  const data = props.data;
  return (
    <div>
      <div className="max-md:ml-[25vw] max-sm:ml-[15vw] block min-w-[250px] w-[26vw] max-lg:[80vw] h-[17rem] max-md:text-xs overflow-x-clip p-5 border-2  rounded-2xl border-black hover:bg-gray-100 bg-white ">
        <h5 className="mb-[0.7vh] text-lg font-semibold tracking-tight text-black ">
          {data.company}
        </h5>
        <p className="  text-start text-black font-medium text-sm max-md:text-xs lg:text-xs xl:text-sm leading-relaxed md:text-xs pb-5">
          {data.review}
        </p>
      </div>
    </div>
  );
}

export default ClientThought;
