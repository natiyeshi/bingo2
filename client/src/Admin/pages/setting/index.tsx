import React from 'react'
import Bar from '../common/Bar'
import { pages } from "../../types/types"

const index = () => {
  return (
    <div className='flex h-[100vh] overflow-hidden'>
    <Bar pages={pages.Setting}/>
    <div className='w-3/4  flex flex-col'>
        <div className='w-full py-4 px-8 font-bold text-2xl uppercase'>
            <h1>Setting</h1>
        </div>
        <div className="mx-auto my-10 bg-slate-50 w-4/5 px-5 py-5 h-fit pb-6 rounded-xl shadow flex flex-col gap-3">
            <div className='border text-sm px-3 py-2 flex gap-2 flex-col'>
              <h1 className='text-base font-semibold'>Rate</h1>
              <div className='flex flex-col gap-1'>
                <p>
                  changin the value of the rate will directly affects the commution percentage
                </p>
                <div className='my-1 flex gap-3'>
                  <input type="number" placeholder='Percentage' className='px-2 border-2 py-1 rounded font-bold' />
                  <button className='bg-slate-800 px-3 py-1 rounded text-white'>update</button>
                </div>
              </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default index
