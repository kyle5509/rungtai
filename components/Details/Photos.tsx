'use client'
import React, { useState } from 'react'
type Props = {
  images: string[]
}

export default function Photos({ images }: Props) {
  const [active, setActive] = useState(0)
  return (
    <div className='flex gap-3'>
      {images?.length > 1 && <div className="flex flex-col gap-3">
        {images?.map((image, key) => (
          <div onMouseEnter={() => setActive(key)} className={`h-16 w-16 rounded-md hover:scale-105 active:scale-100 border-2 duration-300 hover:border-gray-700 cursor-pointer  ${active === key ? "border-gray-700" : "border-transparent"}`}>
            <img src={image} alt="" className='h-full w-full object-contain ' />
          </div>
        ))}
      </div>
      }
      <div className=" flex-1 h-96 relative">
        {images?.map((el, key) => (
          <img src={`${el}`} alt="" className={`h-full duration-500 w-full object-contain absolute top-0 left-0 ${active === key ? "opacity-100 visible scale-100 blur-0": "blur-md scale-0 opacity-0 invisible"}`} />
        ))}
      </div>
    </div>
  )
}
