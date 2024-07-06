import React from 'react'
import { RxCross2 } from "react-icons/rx";

function Snackbar() {
  return (
    <div
    //   ref={modalRef}
    //   onClick={closeModal}
      className=" z-[20] bg-black top-5  bg-opacity-10 absolute flex justify-start "
    >
      <div className="bg-Layoutneon mt-[10vh] h-[5rem] border-2 border-Layoutblue w-[23rem] z-[2] rounded-2xl flex items-center justify-evenly ">
       
          <h2 className='text-sm text-black font-semibold p-5'>Thank you for getting in touch,<br />
          we will reach back to you in a short time.</h2>
          <RxCross2  className="text-4xl cursor-pointer mb-10 mr-2" size={20}/>
          
       
     
      </div>
    </div>
  )
}

export default Snackbar