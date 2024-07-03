import React from 'react'
import baseAssets from '../assets/baseAssets'
function LetsConnect() {
  return (
    <div className="connectbox h-[80vh] w-[25vw]  " style={{backgroundImage:`url(${baseAssets.connect_form})`, backgroundPosition: "center",
    backgroundRepeat:" no-repeat",
    backgroundSize: "cover",}}>
<div className="Name mb-[5vh]">
<label
  for="default-input"
  class="block mb-2 text-sm font-medium  text-black"
>
  Your Name
</label>
<input
  type="text"
  id="default-input"
  className="bg-black border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[35vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
/>
</div>
<div className="Mail mb-[5vh]">
<label
  for="default-input"
  className="block mb-2 text-sm font-medium  text-black"
>
  Your Mail id
</label>
<input
  type="text"
  id="default-input"
  className="bg-black border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[35vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
/>
</div>
<div className="Message mb-[5vh]">
<label
  for="default-input"
  className="block mb-2 text-sm font-medium  text-black"
>
  Message for Us
</label>
<input
  type="text"
  id="default-input"
  className="bg-black border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[20vh] w-[35vw] p-2.5 dark:bg-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
/>
</div>
<button
type="button"
className="text-white bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[35vw]"
>
Submit
</button>
</div>
  )
}

export default LetsConnect