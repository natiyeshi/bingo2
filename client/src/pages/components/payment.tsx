// import React from 'react'

import Error from "./error"

interface Props {
    setPayment : Function,
    setShowHistory : Function,
    setShowProfile : Function,
}

const index = ({setPayment,setShowHistory,setShowProfile} : Props) => {
  return (
    <div className='absolute flex left-0 right-0 top-0 bottom-0  z-20'>
        <div className='absolute flex left-0 right-0 top-0 bottom-0  z-10 bg-gray-900 opacity-90'> </div>
        <div className='rounded w-1/2 pb-12 h-fit bg-white z-40 mx-auto mt-[6em] '>
            <nav className="flex py-2 px-7 justify-between bg-slate-800  ">
                <div className="text-2xl font-semibold text-white uppercase">Bet</div>
                <ul className="flex gap-3 text-white my-auto uppercase text-xs">
                  <li onClick={() => setShowHistory((data : boolean) => !data)} className="cursor-pointer">history</li>
                  <li onClick={() => setShowProfile((data : boolean) => !data)} className="cursor-pointer">Amout</li>
                  <li onClick={() => alert("hey")}>Logout</li>
                </ul>
            </nav>
        <form className="flex flex-col px-12 mt-5 gap-2 uppercase" onSubmit={(e) => e.preventDefault()}>
           <Error error="hey" style="" />
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
