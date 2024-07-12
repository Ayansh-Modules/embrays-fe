import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Button(props) {
    const text = props.text
    const onClick = props.onClick
  return (
    <div className="btn">
    <button
    onClick={onClick}
      type="button"
      className="connectbtn  z-10 drop-shadow-lg font-semibold text-white mt-[5vh] focus:ring-2  focus:ring-pink-300 "
    >
      <span className="flex-row flex items-center justify-center text-sm">
        {text}
        <IoIosArrowRoundForward size={20} className=" ml-[-10px]" />
      </span>
    </button>
  </div>
  )
}

export default Button