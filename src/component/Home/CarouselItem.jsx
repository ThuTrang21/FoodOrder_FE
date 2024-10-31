  import React from 'react'

  export default function CarouselItem({image,title}) {
    return (
      <div className='flex flex-col justify-center items-center py-7 px-7'>
      <div className='w-[4rem] h-[4rem] md:w-[12rem] md:h-[12rem] sm:w-[6rem] sm:h-[6rem] rounded-full overflow-hidden'>
        <img 
          className='w-full h-full object-cover object-center' 
          src={image} 
          alt='' 
        />
      </div>
      <span className='py-5 font-semibold text-xl text-gray-400'>{title}</span>
    </div>
    )
  }
