import React, { useState } from "react";
import { RiLinkM } from "react-icons/ri";
import Button from "../../Components/Button";
import baseAssets from "../../assets/baseAssets";
function LinkPage() {
  const [openShortURL, setOpenShortURL] = useState(false);
  const pattern =baseAssets.pattern
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-4xl font-semibold text-Layoutblue mt-5 ">
       <img src={pattern} alt="" srcset="" className="absolute top-24 left-0 size-24" />
      <img src={pattern} alt="" srcset="" className="absolute bottom-32 right-0 size-24" />

        Link Shortener
      </div>
      <div
        className=" w-[70vw]  border-2 border-black rounded-lg flex my-10"
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <div className="border-2 rounded-lg m-5 w-full">
          <div className="btnshortURL flex items-center border-b-2 bg-gray-200">
            <div className="btn p-2 rounded-md bg-gray-300 m-5 ml-10 border-2 hover:border-Layoutblue flex items-center justify-center text-sm font-semibold hover:text-Layoutblue focus:ring-Layoutblue cursor-pointer">
              <RiLinkM size={20} className="mr-2" />
              Short URL
            </div>
          </div>

          <div className="longurl p-5 ml-5">
            <label
              htmlFor="success"
              className="block mb-2 text-sm text-Layoutblue font-semibold"
            >
              Paste Long URL
            </label>
            <input
              type="text"
              id="success"
              className="bg-gray-200 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue focus:border-Layoutblue block w-[97%] p-3 "
            />
            <p className="mt-2 text-sm text-green-600 dark:text-green-500">
              <span className="font-medium">Well done!</span> Some success
              message.
            </p>
            <Button
              text={"Shorten URL"}
              onClick={() => {
                return setOpenShortURL(true);
              }}
            />
          </div>

          {openShortURL && (
            <div className="shortURL border-t-2">
              <div className="container p-5 ml-5 ">
                <label
                  htmlFor="success"
                  className="block mb-2 text-sm text-Layoutblue font-semibold"
                >
                  Short URL
                </label>
                <input
                  type="text"
                  id="success"
                  className="bg-gray-200 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layoutblue block w-[95%] p-3 "
                />
                <p className="mt-2 text-sm text-green-600 dark:text-green-500">
                  <span className="font-medium">Well done!</span> Some success
                  message.
                </p>
                <div className="flex items-center">
                  <Button text={"Copy URL"} />{" "}
                  <span className="ml-5">
                    <Button text={"Generate QR"} />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default LinkPage;
