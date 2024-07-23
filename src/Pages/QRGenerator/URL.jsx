import React, { useState } from "react";
import Button from "../../Components/Button";
import { useQRContext } from "../../Context/QRContext";
import { validateURL } from "../../Utility/CommonFunctions";
function URL() {
  const { generateQRLink,setQRColor } = useQRContext();
  const [value, setValue] = useState("");
  const [error,setError]= useState(false)
  function generateFinalURL() {
    let result = validateURL(value);
    if (result == true) {
      generateQRLink(value);
      setError (false)

    }
    else {
      setError (true)
      setQRColor("gray")
    }
  }
  return (
    <>
      <div className="p-5 ml-5 ">
        <label
          for="success"
          class="block mb-2 text-sm text-Layoutblue font-semibold"
        >
          Website URL
        </label>
        <input
          type="text"
          placeholder="https://embraystechnology.com"
          id="success"
          onChange={(e) => {
            setValue(e.target.value)
            let result = validateURL(value);
            if (result == true) {
            setError (false)     
            }
            else {
              setError (true)
            }
          }}
          class="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue block w-[97%] p-3 "
        />
        {error && (
          <p class="mt-2 text-sm text-red-600 dark:text-red-600">
            <span class="font-medium">Paste a Valid URL </span>
          </p>
        )}{" "}
        <Button
          text={"Generate QR"}
          onClick={() => {
            generateFinalURL();
          }}
        />
      </div>
    </>
  );
}

export default URL;
