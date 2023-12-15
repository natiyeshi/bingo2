// import React from 'react'

import { IoMdClose as CloseIcon } from "react-icons/io";
import { MdNavigateNext as NextIcon } from "react-icons/md";

interface Props {
    setPayment : Function,
}

const index = ({setPayment} : Props) => {
  return (
    <div className='absolute flex left-0 right-0 top-0 bottom-0  z-20'>
        <div className='absolute flex left-0 right-0 top-0 bottom-0  z-10 bg-black opacity-90'> </div>
        <div className='rounded w-1/2 pb-12 h-fit bg-white z-40 mx-auto mt-[6em] '>
            <nav className="flex py-2 px-7 justify-between bg-slate-800  ">
                <div className="text-lg font-semibold text-white">Bet</div>
            </nav>
        <form className="flex flex-col px-12 mt-5 gap-2" onSubmit={(e) => e.preventDefault()}>
           <div className="flex gap-2 w-2/3 justify-between">
                <label htmlFor="" className="py-2">Number of players</label>
                <input type="number" placeholder="players" className="px-2 border py-2 rounded-xl" />
           </div>
           <div className="flex gap-2 w-2/3 justify-between">
                <label htmlFor="" className="py-2">Bet Amount</label>
                <input type="number" placeholder="players" className="px-2 border py-2 rounded-xl" />
           </div>
           <div className="flex flex-row-reverse w-2/3 mt-6">
                <button onClick={() => setPayment(true)} className="bg-slate-800  w-fit px-10 py-1 rounded-lg text-white">Bet</button>
           </div>
        </form>
        
            
           
        </div>
    </div>
  )
}

export default index
