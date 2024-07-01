import React from 'react'
import {appData} from "../Data/AppData"
import { PiShootingStarFill } from "react-icons/pi"
import {layoutColors} from "../Utility/Colors"
function Services() {
 const data = appData.services
  return (
    <div className='h-[100vh] w-full flex-col flex items-center justify-center'>
      <div className='title flex-col items-center justify-center '>
      
     <p className='text-6xl font-semibold flex absolute top-[140vh] left-[35vw]'>MASTERY 
     <PiShootingStarFill color={layoutColors.yellow} className='h-[12vh] w-[12vw] absolute left-[15vw] top-[-3vh]'/> </p>
      <p className="text-6xl font-semibold text-Layoutpink absolute top-[148vh]  left-[47vw]">UNLEASHED</p>
      </div>
      
      <div className='service'></div>
    </div>
  )
}

export default Services