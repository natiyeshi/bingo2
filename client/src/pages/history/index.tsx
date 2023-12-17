// import React from 'react'

import { IoMdClose as CloseIcon } from "react-icons/io";
import { MdNavigateNext as NextIcon } from "react-icons/md";

interface Props {
    setShowHistory : Function,
}

const index = ({setShowHistory} : Props) => {
  return (
    <div className='absolute flex left-0 right-0 top-0 bottom-0  z-30'>
        <div className='absolute flex left-0 right-0 top-0 bottom-0  z-10 bg-black opacity-80'> </div>
        <div className='rounded w-2/3 h-[400px] bg-white z-40 mx-auto mt-[6em] px-5'>
            <nav className="flex py-2 px-7 justify-between">
                <div className="text-lg font-semibold">History</div>
                <div className="my-auto cursor-pointer" onClick={() => setShowHistory(false)}> <CloseIcon className="text-xl"/> </div>
            </nav>
 
            <div className="flex my-2 flex-row-reverse me-8">
                <p className="text-gray-600 px-3 py-1 rounded  bg-gray-100">1 / 3</p>
            </div>
            
            <div className="h-[220px] overflow-auto">
                <table className="bg-red-30 w-full overflow-scroll">
                    <tr className="px-2 bg-slate-600 text-white border">
                        <td className="text-center py-3 border border-gray-300">No</td>
                        <td className="text-center py-3 border border-gray-300">Number of Peoples</td>
                        <td className="text-center py-3 border border-gray-300">Amount per Person</td>
                        <td className="text-center py-3 border border-gray-300">Total Bet</td>
                        <td className="text-center py-3 border border-gray-300">Winner Pay</td>
                        <td className="text-center py-3 border border-gray-300">Commission</td>
                        <td className="text-center py-3 border border-gray-300">Date</td>
                    </tr>
                    {[1,2,3,4,5].map(data => 
                    <tr className="bg-gray-50 hover:bg-slate-100">
                        <td className="text-center border py-1 ">1</td>
                        <td className="text-center border py-1 ">12</td>
                        <td className="text-center border py-1 ">10</td>
                        <td className="text-center border py-1 ">400</td>
                        <td className="text-center border py-1 ">200</td>
                        <td className="text-center border py-1 ">30</td>
                        <td className="text-center border py-1 ">Mon 12 2021</td>
                    </tr>)
                }
                </table>
            </div>

            <div className="flex float-right mt-5 me-2 gap-2">
                <button title="next" className="flex bg-gray-200 rounded duration-300 hover:bg-gray-300 py-1 px-5 "> 
                    <NextIcon className="text-xl m-auto rotate-180" />
                    Prev 
                </button>
                <button title="prev" className="flex bg-gray-200 rounded duration-300 hover:bg-gray-300 py-1 px-5">
                    Next
                    <NextIcon className="text-xl m-auto " />
                </button>
            </div>

        </div>
    </div>
  )
}

export default index
