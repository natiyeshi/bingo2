// import React from 'react'

import { IoMdClose as CloseIcon } from "react-icons/io";
import { MdNavigateNext as NextIcon } from "react-icons/md";

interface Props {
    setShowProfile : Function,
}

const index = ({setShowProfile} : Props) => {
  return (
    <div className='absolute flex left-0 right-0 top-0 bottom-0  z-20'>
        <div className='absolute flex left-0 right-0 top-0 bottom-0  z-10 bg-black opacity-80'> </div>
        <div className='rounded w-2/3 pb-12 h-fit bg-white z-40 mx-auto mt-[6em] px-5'>
            <nav className="flex py-2 px-7 justify-between">
                <div className="text-lg font-semibold">Abebe Kebede</div>
                <div className="my-auto cursor-pointer" onClick={() => setShowProfile(false)}> <CloseIcon className="text-xl"/> </div>
            </nav>
        <div className="flex justify-around w-full ">
           
            <div className="m-auto">
                <h3 className="text-3xl font-semibold">123,332 Birr</h3>
            </div>

        </div>
        
            
           
        </div>
    </div>
  )
}

export default index
