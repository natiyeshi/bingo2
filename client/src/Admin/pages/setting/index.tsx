import { useState } from 'react'
import Bar from '../common/Bar'
import { pages } from "../../types/types"
import { AxiosError } from 'axios'
import axios from '../../../axios'
import Error from "../common/error"
import Success from "../common/success"
import loadingGif from "../../../assets/gif/Rolling-1s-200px.gif"

const index = () => {
    const [rate,setRate] = useState<number>(0) 
    const [err,setErr] = useState("")
    const [suc,setSuc] = useState("")
    const [loading,setLoading] = useState(false)

    const onChangeRate = ({ target } : any) => {
        try{
            const value = parseFloat(target.value) 
            setRate(value)
        } catch(err){
            alert("wrong input")
        }
    } 
    const changeRate = async () => {
        try {
            setErr("")
            setSuc("")
            setLoading(true)
            await axios.post("setting/changeRate",{ rate })
            setSuc("charge completed successfully")
            setRate(0)
          }catch(error){
            let err = error as AxiosError
            let errMessage : any = err.response?.data
            console.log(errMessage)
            setErr(errMessage.error?.message || "something goes wrong")
          }finally{
            setLoading(false)
          }
    }
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
              {err && <Error err={err} setErr={setErr} />}
              {suc && <Success msg={suc} setSuc={setSuc} />}
              <div className='flex flex-col gap-1'>
                <p>
                  changin the value of the rate will directly affects the commution percentage
                </p>
                <div className='my-1 flex gap-3'>
                  <input type="number" onChange={onChangeRate} value={rate} placeholder='Percentage' className='px-2 border-2 py-1 rounded font-bold' />
                  {
                    loading ? 
                    <div className='flex gap-3 px-3 duration-300 py-1 bg-gray-400 rounded-lg text-white font-semibold'>
                        <p className='my-auto'>Updating</p>
                        <img className='m-auto' src={loadingGif} width={20}  alt="" />
                    </div>   
                    :
                  <button onClick={changeRate} className='bg-slate-800 px-3 py-1 rounded text-white'>update</button>
            }
                </div>
              </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default index
