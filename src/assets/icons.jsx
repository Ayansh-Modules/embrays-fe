import React from 'react'
import { IoDownloadOutline } from "react-icons/io5"; // Download
import { IoIosArrowRoundForward } from "react-icons/io"; // Right arrow
import { PiShootingStarFill } from "react-icons/pi"; // shooting star
import { HiOutlineExternalLink } from "react-icons/hi"; // link
import { GiCancel } from "react-icons/gi"; // cancel 
import { TbMailFilled } from "react-icons/tb"; // mail
import { BiSolidPhoneCall } from "react-icons/bi"; // call 
import { TfiLinkedin } from "react-icons/tfi"; // linkedin
import { GrInstagram } from "react-icons/gr"; // instagram
import { FaRegCopyright } from "react-icons/fa6"; // copyright
function icons() {
  return (
    <div>
        <IoDownloadOutline />
        <IoIosArrowRoundForward />
        <PiShootingStarFill />
        <HiOutlineExternalLink />
        <GiCancel />
        <TbMailFilled />
        <BiSolidPhoneCall />
        <TfiLinkedin />
        <GrInstagram />
        <FaRegCopyright />
    </div>
  )
}

export default icons
