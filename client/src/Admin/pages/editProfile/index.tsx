import React from 'react'
import Bar from '../common/Bar'
import { pages } from "../../types/types"

const index = () => {
  return (
    <div className='flex h-[100vh] overflow-hidden'>
    <Bar pages={pages.Edit}/>
    <div className='w-3/4  flex flex-col'>
        <div className='w-full py-4 px-8 font-bold text-2xl uppercase'>
            <h1>Add Dealer</h1>
        </div>
        <div>

        </div>
        <form className="mx-auto my-10 bg-slate-50 w-1/2 px-10 py-5 h-fit pb-6 rounded-xl shadow flex flex-col gap-3">
            <h2 className='text-sm '>Change your password here</h2>
            <div className='flex gap-1 uppercase flex-col'>
                <label htmlFor="" className='my-auto'>Username</label>
                <input type="text" placeholder='username' className='px-2 py-1 outline-none border  rounded' />
            </div>
            <div className='flex gap-1 uppercase flex-col'>
                <label htmlFor="" className='my-auto'>Password</label>
                <input type="text" placeholder='Password' className='px-2 py-1 outline-none border  rounded' />
            </div>
            <div className='flex gap-1 uppercase flex-col'>
                <label htmlFor="" className='my-auto'>Confirm</label>
                <input type="text" placeholder='Confirm' className='px-2 py-1  outline-none border rounded' />
            </div>
            
            <div className='flex justify-center my-2'>
                <button className='px-5 py-1 bg-slate-900 text-white font-sembold rounded uppercase'>submit</button>
            </div>
        
        </form>
    </div>
      
    </div>
  )
}

export default index
