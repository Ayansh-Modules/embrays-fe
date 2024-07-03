import React from 'react'

function CollabCardMobile() {
    const company = props.data.company
    const testimonial = props.data.testimonial
    const background = props.data.background
    const previewImages = props.data.previewImages
  
      
    return (
      <div className="">
        <div className="collabcard h-[25rem] w-[37rem] bg-white rounded-2xl">
          <img className="rounded-2xl" src={background} />
          <div className="Mobile bg-Layoutblue">
            <div className="text w-[80%] h-[25rem]">
              <p className="font-semibold text-2xl text-center pb-[10px]">{company}</p>
              <p className="text-base">{testimonial}</p>
            </div>
          </div>
        </div>
      </div>
    //   <div className="">
    //   <div className="collabcard h-[23rem] w-[25rem] bg-white rounded-t-2xl">
    //     <img className="rounded-2xl" src={background} />
    //   </div>
    //   <div className="Mobile bg-Layoutblue w-[25rem] h-[23rem] flex items-center justify-center rounded-b-2xl">
    //     <div className="text w-[80%] text-white">
    //       <p className="font-semibold text-2xl text-center pb-[10px]">
    //         {company}
    //       </p>
    //       <p className="text-base">{testimonial}</p>
    //     </div>
    //   </div>
    // </div>
    );
}

export default CollabCardMobile