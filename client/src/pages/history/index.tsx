// import React from 'react'

import { useState,useEffect } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";
import axios from "../../axios"
import { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { getDealer, getDealerLoading } from "../../store/features/dealer/dealerSlice";

interface Props {
    setShowHistory : Function,
}

const index = ({setShowHistory} : Props) => {


    const [err,setErr] = useState("")
    const [charges,setCharges] = useState<any>([])
    const [bets,setBets] = useState<any>([])
    const [loading,setLoading] = useState(false)
    const [type,setType] = useState<0 | 1>(0)
    
    const dealer = useSelector(getDealer)
    const isLoading = useSelector(getDealerLoading)

    useEffect(() => {
        const fetch = async () => {
            
            try {
                setErr("")
                setLoading(true)
                const chargeRes = await axios.post("charge/getDealerCharge",{ id : dealer.id})
                const betRes = await axios.post("bet/getDealerCharge",{ id : dealer.id})
                setCharges(chargeRes.data)
                setBets(betRes.data)
              }catch(error){
                let err = error as AxiosError
                let errMessage : any = err.response?.data
                setErr(errMessage?.error?.message || "Connection lost")
              }finally{
                setLoading(false)
              }
        }
        if(dealer != null){
            fetch()
        }
        
    }, [dealer])
    

  return (
    <div className='absolute flex left-0 right-0 top-0 h-[400vh]  z-30'>
        <div className='absolute flex left-0 right-0 top-0 bottom-0  z-10 bg-black opacity-80'> </div>
        <div className='rounded w-2/3 h-fit pb-10 bg-white z-40 mx-auto mt-[6em] px-5'>
            <nav className="flex py-2 px-2   justify-between">
                <div className="text-lg font-semibold">History</div>
                <div className="my-auto cursor-pointer" onClick={() => setShowHistory(false)}> <CloseIcon className="text-xl"/> </div>
            </nav>
            <div className="px-2 flex gap-3 my-2 flex-row-reverse pe-12">
                <button  onClick={()=>{ setType(1)}} className={`px-1 ${type == 1 && "border-b-2 text-blue-500 " } font-semibold capitalize border-blue-500`}>charges</button>
                <button onClick={()=>{ setType(0)}} className={`px-1  ${type == 0 && "border-b-2 text-blue-500 " } font-semibold capitalize border-blue-500 `}>bets</button>
            </div>
            
            

            <div className={`h-[220px] overflow-auto ${((loading || isLoading || err) && "flex")}`}>
                {}
                {
                loading ? 
                    <div className="m-auto ">loading</div>
                :
                err ? 
                <div className="m-auto ">{err}</div>
                :
                type == 0 ? 
                 <table className="bg-red-30 w-full overflow-scroll">
                 <tr className="px-2 bg-slate-600 text-white border">
                     <td className="text-center py-3 border border-gray-300">No</td>
                     <td className="text-center py-3 border border-gray-300">Number of Peoples</td>
                     <td className="text-center py-3 border border-gray-300">Amount per Person</td>
                     <td className="text-center py-3 border border-gray-300">Total Bet</td>
                     <td className="text-center py-3 border border-gray-300">Winner Pay</td>
                     <td className="text-center py-3 border border-gray-300">Commission</td>
                     <td className="text-center py-3 border border-gray-300">Rate</td>
                     {/* <td className="text-center py-3 border border-gray-300">Date</td> */}
                 </tr>
                 {bets.map((data:any,ind : number) => 
                    <tr className="bg-gray-50 hover:bg-slate-100">
                        <td className="text-center border py-1 ">{ind + 1}</td>
                        <td className="text-center border py-1 ">{data.numberOfPlayers}</td>
                        <td className="text-center border py-1 ">{data.betAmount}</td>
                        <td className="text-center border py-1 ">{data.totalBet}</td>
                        <td className="text-center border py-1 ">{data.netWinnerGain}</td>
                        <td className="text-center border py-1 ">{data.commution}</td>
                        <td className="text-center border py-1 ">{data.currRate} % </td>
                        {/* <td className="text-center border py-1 ">Mon 12 2021</td> */}
                    </tr>)
             }
             </table>
                :
                <table className="bg-red-30 w-full overflow-scroll">
                <tr className="px-2 bg-slate-600 text-white border">
                    <td className="text-center py-3 border border-gray-300">No</td>
                    <td className="text-center py-3 border border-gray-300">Charge Amount</td>
                    <td className="text-center py-3 border border-gray-300">Date</td>
                </tr>
                {charges.map((data:any,ind:number) => 
                <tr className="bg-gray-50 hover:bg-slate-100">
                    <td className="text-center border py-1 ">{ind + 1}</td>
                    <td className="text-center border py-1 ">{data.amount} birr</td>
                    <td className="text-center border py-1 ">{new Date(data.date).getUTCDate()}-{new Date(data.date).getUTCMonth()}-{new Date(data.date).getUTCFullYear()}  </td>
                </tr>)
            }
            </table>
                }
               
               
            </div>

            

        </div>
    </div>
  )
}

export default index
