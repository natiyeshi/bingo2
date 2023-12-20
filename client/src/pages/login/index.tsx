import { IoMdClose as CloseIcon } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";

const index = () => {
  
  
  return (
    <div>
        <nav className='py-4 ps-12'>
            <h1 className='text-xl font-bold'>Bingo</h1>
        </nav>
        <div className='flex'>
            
          <form className="flex mx-auto flex-col mt-5 gap-2 bg-gray-100 rounded-xl px-32 py-5" onSubmit={(e) => e.preventDefault()}>
            <h1 className='text-xl font-bold'>Login</h1>
            <div className='bg-red-200 border-l-4 border-red-700 ps-2 p-1 rounded flex justify-between'>
              <p>user not found</p>
              <div className="my-auto me-2 cursor-pointer">
                <CloseIcon />
              </div>
            </div>
            <div className="flex gap-2  justify-between">
                  <label htmlFor="" className="py-2">Number of players</label>
                  <input type="text" placeholder="players" className="px-2 border py-1 rounded-xl" />
            </div>
            <div className="flex gap-2  justify-between">
                  <label htmlFor="" className="py-2">Bet Amount</label>
                  <input type="text" placeholder="players" className="px-2 border py-1 rounded-xl" />
            </div>
            <div className="flex flex-row-reverse  mt-6">
                  <Link to={"/"}>
                    <button className="bg-slate-800  w-fit px-10 py-1 rounded-lg text-white" >Bet</button>
                  </Link>
            </div>

            </form>

        </div>

    </div>
  )
}

export default index
