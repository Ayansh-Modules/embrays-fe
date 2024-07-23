import React, { useState } from "react";
import Button from "../../Components/Button";
import { useQRContext } from "../../Context/QRContext";
import {
  validateContactNumber,
  validateMessage,
} from "../../Utility/CommonFunctions";
function SMS() {
  const { generateQRLink, setQRColor } = useQRContext();
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  function getFinalSMS() {
    let result1 = validateContactNumber(number);
    let result2 = validateMessage(message);
    if (result1 == true) {
      setError(false);
    } else {
      setError(true);
      setQRColor("gray");
    }
    if (result2 == false) {
      setMessageError(true);
      setQRColor("gray");
    } else {
      setMessageError(false);
    }

    if (result1 == true && result2 == true) {
      const SMS = `sms:${number}?body=${message}`;
      generateQRLink(SMS);
    }
  }
  console.log(SMS);
  return (
    <div className="p-5 ml-5 ">
      <label
        for="success"
        class="block my-2 text-sm text-Layoutblue font-semibold"
      >
        Contact Number
      </label>
      <input
        type="text"
        id="success"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        class="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue block w-[97%] p-3 "
      />
      {error && (
        <p class="mt-2 text-sm text-red-600 dark:text-red-600">
          <span class="font-medium">Not a Valid Number</span>
        </p>
      )}
      <label
        for="success"
        class="block my-2 text-sm text-Layoutblue font-semibold"
      >
        Message
      </label>
      <textarea
        type="text"
        id="success"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        class="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue block w-[97%] p-3 "
      />
      {messageError && (
        <p class="mt-2 text-sm text-red-600 dark:text-red-600">
          <span class="font-medium">Enter a valid Message</span>
        </p>
      )}
      <Button
        text={"Generate QR"}
        onClick={() => {
          getFinalSMS();
        }}
      />
    </div>
  );
}

export default SMS;
