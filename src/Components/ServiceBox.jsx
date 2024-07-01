import React from 'react'

function ServiceBox(props) {

  const id = props.boxData.id
  const service = props.boxData.service
  const testimonial = props.boxData.testimonial
  const  img = props.boxData.img
  const  color =props.boxData.color
  console.log(color)
     
  return (
    
    <div className='serviceBox'>
    <div className={`h-[80vh] w-[40vw]  rounded-xl bg-${color}`}>
      <div className='number ml-[3vw] text-6xl '>{id}</div>
      <div className='text ml-[3vw] '>
        <p className='role text-4xl font-semibold'>{service}</p>
        <p className='testimonial text-lg'> {testimonial} </p>
      </div>
      <img src={img}  />
    </div>
      
    </div>
    
  )
}

export default ServiceBox