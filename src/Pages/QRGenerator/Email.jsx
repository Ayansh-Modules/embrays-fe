import React from 'react'
import Button from "../../Components/Button";

function Email() {
  return (
    <>
      <div className="p-5 ml-5 ">
        <label
          for="success"
          class="block my-2 text-sm text-Layoutblue font-semibold"
        >
          Email
        </label>
        <input
          type="text"
          id="success"
          class="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue block w-[97%] p-3 "
        />
        <label
          for="success"
          class="block my-2 text-sm text-Layoutblue font-semibold"
        >
          Subject
        </label>
        <input
          type="text"
          id="success"
          class="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue block w-[97%] p-3 "
        />
        <label
          for="success"
          class="block my-2 text-sm text-Layoutblue font-semibold"
        >
          Message
        </label>
        <textarea
          type="text"
          id="success"
          class="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue block w-[97%] p-3 "
        />
        {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Well done!</span> Some success message.</p> */}
      <Button text={"Generate QR"} />
      </div>
    </>
  )
}

export default Email