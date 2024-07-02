import React from "react";
function ClientThought(props) {
  const data = props.data;
  return (
    <div>
      <div className="block max-w-[26rem] p-5 border-2  rounded-2xl border-black hover:bg-gray-100 h-[22rem] bg-white">
        <h5 className="mb-5 text-2xl font-bold tracking-tight text-black dark:text-black">
          {data.company}
        </h5>
        <p className="font-normal text-white-700 dark:text-white-400 text-justify">
          {data.review}
        </p>
      </div>
    </div>
  );
}

export default ClientThought;
