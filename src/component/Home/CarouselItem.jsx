import React from 'react'

export default function CarouselItem({image,title}) {
  return (
    <div className='flex flex-col justify-center items-center py-7 px-7'>
       <img className='w-[12rem] h-[12rem] lg:w-[12rem] rounded-full object-cover object-center' src={image} alt=''></img>
    <span className='py-5 font-semibold text-xl text-gray-400'>{title}</span>
    </div>
  )
}
