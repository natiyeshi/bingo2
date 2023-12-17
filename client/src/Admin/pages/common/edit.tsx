import React from 'react'
import { IoSettingsOutline as SettingIcon } from "react-icons/io5";
import { IoCloseSharp as CloseIcon} from "react-icons/io5";

interface Props{
    css : string
}

const edit = ({}:Props) => {
  return (
    <div className='absolute left-0 right-0 top-0 bottom-0 flex'>
    <div className='absolute left-0 right-0 top-0 bottom-0 bg-slate-900 opacity-50'> </div>
      <div className='mx-auto mt-12 w-3/4 h-3/4 rounded-xl flex bg-white z-20 flex-col'>
        
        <nav className='px-4 py-3 mb-1 flex justify-between rounded-t-xl '>
          <div className='flex gap-2 '>
            <SettingIcon className="my-auto text-xl" />
            <h1 className='text-lg font-semibold uppercase'>Setting</h1>
          </div>
          <div className='ml-auto my-auto'>
            <CloseIcon className="text-xl" /> 
          </div>
        </nav>

        <div className=' h-full'>
          {/* <div className='flex '>
            <button className='ml-auto me-5 my-3 text-blue-600 font-semibold'>Edit</button>
          </div> */}
          
          <div className='flex flex-col px-4 gap-3'>
            
            <div className='w-full bg-green-50 border rounded px-6 pt-2 text-sm flex flex-col pb-4'>
               <h4 className='font-semibold my-2 uppercase'>Charge</h4>
               <p className='text-sm mb-1'>
                Charging will increase the amount of money in Abebes's Account.  
               </p>
               <div className='flex gap-4'>
                  <input type="number" className='rounded px-2 font-bold w-[130px]' placeholder='money' />
                  <button className='px-6 py-1 bg-green-800 rounded-lg text-white font-semibold'>Charge</button>
               </div>
            </div>

            <div className='w-full bg-yellow-50 border rounded px-6 pt-2 text-sm flex flex-col pb-4'>
               <h4 className='font-semibold my-2 uppercase'>Stop</h4>
               <p className='text-sm mb-1'>
                Stoping an account means temporarly halting abebe from the system.  
               </p>
               <div className='flex gap-4'>
                  <button className='px-6 py-1 bg-yellow-600 rounded-lg text-white shadow font-semibold'>Stop</button>
               </div>
               
            </div>

            <div className='w-full bg-red-50 border rounded px-6 pt-2 text-sm flex flex-col pb-4'>
               <h4 className='font-semibold my-2 uppercase'>Delete</h4>
               <p className='text-sm mb-1'>
                Deleting a user will permanently removes the user from the system.  
               </p>
               <div className='flex gap-4'>
                  <button className='px-6 py-1 bg-red-800 rounded-lg text-white shadow font-semibold'>Delete</button>
               </div>
               
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
// edit stop delete charge

export default edit
