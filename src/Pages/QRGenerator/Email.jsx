import React, { useState } from "react";
import Button from "../../Components/Button";
import { useQRContext } from "../../Context/QRContext";
import { validateEmail, validateMessage } from "../../Utility/CommonFunctions";
function Email() {
  const { generateQRLink, setQRColor } = useQRContext();
  const [Email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorEmail, SetErrorEmail] = useState(false);
  const [errorSubject, SetErrorSubject] = useState("");
  const [errorMessage, SetErrorMessage] = useState("");
  function getFinalEmail() {
    let result1 = validateEmail(Email);
    let result2 = validateMessage(subject);
    let result3 = validateMessage(message);

    if (result1 == true) {
      SetErrorEmail(false);
    } else {
      SetErrorEmail(true);
      setQRColor("gray");
    }

    if (result2 == true) {
      SetErrorSubject(false);
    } else {
      SetErrorSubject(true);
      setQRColor("gray");
    }

    if (result3 == true) {
      SetErrorMessage(false);
    } else {
      SetErrorMessage(true);
      setQRColor("gray");
    }

    if (result1 == true && result2 == true && result3 == true) {
      const mailto = `mailto:${Email}?subject=${subject}&body=${message}`;
      generateQRLink(mailto);
    }
  }
  return (
    <>
      <div className="p-5 ml-5 ">
        <label
          for="success"
          className="block my-2 text-sm text-Layoutblue font-semibold"
        >
          Email
        </label>
        <input
          type="text"
          placeholder="ex: embrays123@gmail.com"
          id="success"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue block w-[97%] p-3 "
        />
        {errorEmail && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-600">
            <span className="font-medium">Not a Email</span>
          </p>
        )}
        <label
          for="success"
          className="block my-2 text-sm text-Layoutblue font-semibold"
        >
          Subject
        </label>
        <input
          type="text"
          placeholder="your subject"
          id="success"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue block w-[97%] p-3 "
        />
        {errorSubject && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-600">
            <span className="font-medium">Not Valid Subject</span>
          </p>
        )}
        <label
          for="success"
          className="block my-2 text-sm text-Layoutblue font-semibold"
        >
          Message
        </label>
        <textarea
          type="text"
          id="success"
          placeholder="your message here"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue block w-[97%] p-3 "
        />
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-600">
            <span className="font-medium">Not Valid Message</span>
          </p>
        )}

        <Button
          text={"Generate QR"}
          onClick={() => {
            getFinalEmail();
          }}
        />
      </div>
    </>
  );
}

export default Email;
