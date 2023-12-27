// import React from 'react'

import Error from "./error"
import loadingGif from "../../assets/gif/Rolling-1s-200px.gif"

import { MdNavigateNext as NextIcon } from "react-icons/md";
import { fetchDealer, getDealer, getDealerError, getDealerLoading, updateDealer } from "../../store/features/dealer/dealerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { AxiosError } from "axios";
import { changeCharge } from "../../store/features/admin/adminSlice";

interface Props {
    setPayment : Function,
    setShowHistory : Function,
    setShowProfile : Function,
}

interface FormInf {
  betAmount : number,
  numberOfPlayers : number 
}

const index = ({setPayment,setShowHistory,setShowProfile} : Props) => {

  const dispatch = useDispatch<any>()
  
  const dealersData = useSelector(getDealer)
  const isLoading = useSelector(getDealerLoading)
  const error = useSelector(getDealerError)
  const [loading,setLoading] = useState(false)
  const [err,setErr] = useState<string | null>(null)
  const initialData : FormInf = {
    betAmount : 0,
    numberOfPlayers : 0,
  }
  const [form,setForm] = useState(initialData)
  
  const logout = async () => {
      try{
        await axios.post("/dealer/logout")
        location.href = "/login"
      }catch(err){
        alert("error")
      }
    }

  function onchange ({target} : any) {
    try{
      const value = parseFloat(target.value)
      setForm(data => ({ ...data,[target.name] : value}))
    }catch(e){
      setErr("number only!")
    }
  }

  const bet = async () =>{ 
    try {
      setErr("")
      setLoading(true)
      const res = await axios.post("dealer/bet",form)
      // setSuc("charge completed successfully")
      dispatch(updateDealer(res.data))
      setForm(initialData)
      setPayment(true)
    }catch(error){
      let err = error as AxiosError
      let errMessage : any = err.response?.data
      setErr(errMessage.error?.message)
    }finally{
      setLoading(false)
    }

    
  }
    
    useEffect(()=>{
        dispatch(fetchDealer())
    },[])

  return (
    <div className='absolute flex left-0 right-0 top-0 bottom-0  z-20'>
        <div className='absolute flex left-0 right-0 top-0 bottom-0  z-10 bg-gray-900 opacity-90'> </div>
        <div className='rounded w-1/2 pb-12 h-fit bg-white z-40 mx-auto mt-[6em] '>
            <nav className="flex py-2 px-7 justify-between bg-slate-800  ">
                <div className="text-2xl font-semibold text-white capitalize">Bet</div>
                <ul className="flex gap-3 text-white my-auto capitalize text-sm">
                  <li onClick={() => setShowHistory((data : boolean) => !data)} className="cursor-pointer duration-300 hover:text-gray-300">history</li>
                  <li onClick={() => setShowProfile((data : boolean) => !data)} className="cursor-pointer duration-300 hover:text-gray-300">Amout</li>
                  <li onClick={logout} className="cursor-pointer duration-300 hover:text-gray-300">Logout</li>
                </ul>
            </nav>
        <form className="flex flex-col px-12 mt-5 gap-2 capitalize" onSubmit={(e) => e.preventDefault()}>
           {err && <Error err={err} css="" setErr={setErr}/>}
           {!isLoading && !error && parseInt(dealersData.amount) < 100 && <Error err={"your account balance is getting low!"} css="" setErr={setErr}/>}

           <div className="flex gap-2 w-3/4  justify-between">
                <label htmlFor="" className="py-2">Number of players</label>
                <input onChange={onchange} name="numberOfPlayers" value={form.numberOfPlayers} type="number" placeholder="number of players" className="px-2 border py-2 rounded-xl" />
           </div>
           <div className="flex gap-2 w-3/4  justify-between">
                <label htmlFor="" className="py-2">Bet Amount</label>
                <input type="number" onChange={onchange} name="betAmount" value={form.betAmount} placeholder="players" className="px-2 border py-2 rounded-xl" />
           </div>
           <div className="flex flex-row-reverse w-2/3 mt-6">
              {!error && isLoading || loading ?
                <div className='flex gap-3 px-3 py-1 bg-gray-400 rounded-lg text-white font-semibold'>
                    <p>Loaing</p>
                    <img className='m-auto px-3' src={loadingGif} width={20}  alt="" />
                </div> 
                :
                <button onClick={bet} className="bg-slate-800  w-fit px-10 py-1 rounded-lg text-white">Bet</button>
              }
           </div>
        </form>
            
           
        </div>
    </div>
  )
}

export default index
