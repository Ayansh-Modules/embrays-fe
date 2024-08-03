import React from "react";
import Button from "../../Components/Button";

function PDF() {
  return (
    <div className="p-5 ml-5 ">
      <label
        for="success"
        className="block my-2 text-sm text-Layoutblue font-semibold"
      >
        Name
      </label>
      <input
        type="text"
        id="success"
        className="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layoutblue block w-[97%] p-3 "
      />

      <label
        className="block my-3 text-sm  text-Layoutblue font-semibold "
        for="multiple_files"
      >
        Upload PDF file
      </label>
      <input
        className="block w-[97%] p-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 font-medium focus:outline-Layoutblue "
        id="multiple_files"
        type="file"
        multiple
      />

      <Button text={"Generate QR"} />
    </div>
  );
}

export default PDF;
