import React, { useState } from "react";
import { RiLinkM } from "react-icons/ri";
import Button from "../../Components/Button";
import baseAssets from "../../assets/baseAssets";
import {validateURL} from "../../Utility/CommonFunctions"
import {useLinkShortContext} from "../../Context/LinkShortContext"
function LinkPage() {
  // const {} = useLinkShortContext()
  
  console.log ()
  const [openShortURL, setOpenShortURL] = useState(false);
  const [url , setUrl]= useState("")
  const [error,setError]= useState(false)
  const [copyUrlValue,setCopyUrlValue]=useState(true)
  const pattern = baseAssets.pattern;

function handleClick (){
 const result =  validateURL(url)
 if(result == true){
   setOpenShortURL(true)
   setError(false)
 }
 else {
  setError(true)
 }
}


  return (
    <div className="w-full  flex flex-col items-center justify-center">
       {/* <img
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
        /> */}
      <div className="text-4xl max-md:text-3xl font-semibold text-Layoutblue mt-5 ">
       
        Link Shortener
      </div>
      <div
        className=" w-[70vw] max-md:w-full max-md:border-none border-2 border-black rounded-lg flex my-10 "
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
              placeholder="ex : EmbraysTechnologies.com"
              onChange={(e)=>{setUrl(e.target.value)}}
              className="bg-gray-200 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue focus:border-Layoutblue block w-[97%] p-3 "
            />
            {error && <p className="mt-2 text-sm text-red-600 dark:text-red-600">
              <span className="font-medium">Paste a Valid URL !</span> 
            </p>}
            <Button
              text={"Shorten URL"}
              onClick={() => { handleClick() }}
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
                  onChange={()=>{setCopyUrlValue()}}
                  className="bg-gray-200 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layoutblue block w-[95%] p-3 "
                />
                {copyUrlValue && <p className="mt-2 text-sm text-green-600 dark:text-green-600">
                  <span className="font-medium">Copy The Short URL</span> 
                </p>}
                <div className="flex items-center max-md:flex-col max-md:items-start">
                  <Button text={"Copy URL"} />{" "}
                  <span className="ml-5 max-md:ml-0">
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
