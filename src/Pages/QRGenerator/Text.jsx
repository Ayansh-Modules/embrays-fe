import React, { useState } from 'react'
import Button from "../../Components/Button";
import { useQRContext } from '../../Context/QRContext';
import {validateMessage} from "../../Utility/CommonFunctions"
function Text() {
  const {generateQRLink,setQRColor} = useQRContext()
  const [message , setMessage] = useState("")
  const [error,setError]=useState("")

  function getFinalMessage (){
let result = validateMessage(message)
if (result == true) {
  setError(false)
  generateQRLink(message)
}
else {
  setError(true)
  setQRColor("gray")
}
  }
  return (
    <div className='p-5 ml-5 '>
         <label
          for="success"
          class="block my-2 text-sm text-Layoutblue font-semibold"
        >
          Message
        </label>
        <textarea
          type="text"
          id="success"
          placeholder='your message here'
          onChange={(e)=>{setMessage(e.target.value)}}
          class="bg-gray-100 border  text-sm rounded-lg focus:ring-Layoutblue focus:border-Layring-Layoutblue block w-[97%] p-3 "
        />
        {error && <p class="mt-2 text-sm text-red-600 dark:text-red-600"><span class="font-medium">Not a Valid Message</span></p> }
      <Button text={"Generate QR"} onClick={()=>{getFinalMessage()}}/>
     
    </div>
  )
}

export default Text