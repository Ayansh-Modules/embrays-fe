import React from "react";
import { RiLinkM } from "react-icons/ri";
import baseAssets from "../../assets/baseAssets";
import Button from "../../Components/Button";
import { useLinkShortContext } from "../../Context/LinkShortContext";
function LinkPage() {
  const {
    shortUrl,
    setUserUrl,
    error,
    handleClick,
    copyShortURL,
    copied,
    generateShortLinkQR,
    loading
  } = useLinkShortContext();

  const pattern = baseAssets.pattern;

  return (
    <div className="w-full  flex flex-col items-center justify-center ">
     {/*  <img
        src={pattern}
        alt=""
        srcset=""
        className="absolute top-24 left-0 size-24"
      />
      <img
          src={pattern}
          alt=""
          srcset=""
          className="absolute bottom-0 right-0 size-24"
        />  */}
      <div className="text-4xl max-md:text-3xl font-semibold text-Layoutblue mt-5 ">
        Link Shortener
      </div>
      <div
        className=" w-[80vw] max-md:w-full shadow-custom max-md:shadow-none max-md:border-none border-2 border-black rounded-lg flex my-10 "
        
      >
        <div className="border-2 rounded-lg m-5 w-full flex-col flex max-md:items-center max-md:justify-center">
          <div className="btnshortURL flex max-md:justify-center  items-center  max-md:w-full border-b-2 bg-gray-200">
            <a
              href={shortUrl}
              target="_blank"
              className="btn p-2 max-md:px-5 rounded-md   bg-gray-300 m-5 ml-10 max-md:ml-0 border-2 hover:border-Layoutblue flex items-center justify-center text-sm font-semibold hover:text-Layoutblue focus:ring-Layoutblue cursor-pointer"
            >
              <RiLinkM size={20} className="mr-2" />
              Short URL
            </a>
         
            {shortUrl && (
              <p className="mt-2 text-sm text-Layoutblue font-semibold dark:text-Layoutblue ">
                <span className="font-medium">Click To Visit !</span>
              </p>
            )}
          </div>

          <div className="longurl p-5 ml-5 max-md:ml-0">
            <label
              htmlFor="success"
              className="block mb-2 text-sm text-Layoutblue font-semibold"
            >
              Paste Long URL
            </label>
            <input
              type="text"
              id="success"
              placeholder="EmbraysTechnologies.com"
              onChange={(e) => {
                setUserUrl(e.target.value);
              }}
              className="bg-gray-200 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue focus:border-Layoutblue block w-[60vw] p-3 "
            />
            {error && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-600">
                <span className="font-medium">Paste a Valid URL !</span>
              </p>
            )}
            <Button
              text={"Shorten URL"}
              onClick={() => {
                handleClick();
              }}
            />
          </div>
               {loading && <div className="flex items-center justify-center p-2">Loading...</div>}
          {shortUrl !== "" && (
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
                  value={shortUrl}
                  readOnly
                  className="bg-gray-200 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layoutblue block w-[60vw] p-3 "
                />
                {
                  <p className="mt-2 text-sm text-green-600 dark:text-green-600">
                    <span className="font-medium">Copy The Short URL</span>
                  </p>
                }

                <div className="flex items-center max-md:flex-col max-md:items-start">
                  <Button
                    text={"Copy URL"}
                    onClick={() => {
                      copyShortURL();
                    }}
                  />{" "}
                  <span className="ml-5 max-md:ml-0">
                    <Button
                      text={"Generate QR"}
                      onClick={() => {
                        generateShortLinkQR();
                      }}
                    />
                  </span>
                </div>
                {copied && (
                  <p className="mt-2 text-sm text-green-600 dark:text-green-600">
                    <span className="font-medium">Copied Successfully !!</span>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LinkPage;
