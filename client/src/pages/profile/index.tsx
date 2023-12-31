// import React from 'react'

import { IoMdClose as CloseIcon } from "react-icons/io";
import { useSelector } from "react-redux";
import { getDealer, getDealerError, getDealerLoading } from "../../store/features/dealer/dealerSlice";

interface Props {
    setShowProfile : Function,
}

const index = ({setShowProfile} : Props) => {

  const loading = useSelector(getDealerLoading)
  const data = useSelector(getDealer)
  const error = useSelector(getDealerError)

  return (
    <div className='absolute flex left-0 right-0 top-0 h-[400vh]  z-30'>
        <div className='absolute flex left-0 right-0 top-0 bottom-0  z-10 bg-black opacity-80'> </div>
        <div className='rounded w-1/3 pb-12 h-fit bg-white z-40 mx-auto mt-[6em] px-5'>
            <nav className="flex py-2 px-7 justify-between">
                <div className="text-lg font-semibold capitalize">{error ? "something goes wrong" : loading ? "loaing" :  data.username}</div>
                <div className="my-auto cursor-pointer" onClick={() => setShowProfile(false)}> <CloseIcon className="text-xl"/> </div>
            </nav>
        <div className="flex justify-around w-full ">
           
            <div className="m-auto flex gap-3">
                <h3 className="text-3xl font-semibold">{error ? error : loading ? "..." :  parseFloat(data.amount).toFixed(2) }</h3>
                <div className="self-end">Birr</div>
            </div>

        </div>
        
            
           
        </div>
    </div>
  )
}

export default index
