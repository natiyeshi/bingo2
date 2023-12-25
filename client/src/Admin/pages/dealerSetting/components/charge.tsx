import  { useState } from 'react'
import { AxiosError } from 'axios'
import axios from '../../../../axios'
import Error from '../../common/error'
import Success from '../../common/success'
import loadingGif from "../../../../assets/gif/Rolling-1s-200px.gif"
import { changeCharge } from '../../../../store/features/admin/adminSlice'
import { useDispatch } from 'react-redux'

interface Props {
    data : any
}

const charge = ({ data }:Props) => {

    const dispatch = useDispatch()
    const [amount,setAmount] = useState<number>(0) 
    const [err,setErr] = useState("")
    const [suc,setSuc] = useState("")
    const [loading,setLoading] = useState(false)
    const changeAmount = ({ target } : any) => {
        try{
            const value = parseFloat(target.value) 
            setAmount(value)
        } catch(err){
            alert("wrong input")
        }
    } 
    const chargeAmount = async () => {
        try {
            setErr("")
            setLoading(true)
            const res = await axios.post("charge/chargeDealer",{ id : data.id, amount })
            dispatch(changeCharge(res.data))
            setSuc("charge completed successfully")
            setAmount(0)
          }catch(error){
            let err = error as AxiosError
            let errMessage : any = err.response?.data
            setErr(errMessage.error?.message)
          }finally{
            setLoading(false)
          }
    }


    return (
            <form onSubmit={(e) => e.preventDefault()} className='w-full bg-green-50 border rounded px-6 pt-2 text-sm flex flex-col pb-4'>
            {
               err && <Error err={err} css={'my-1'} setErr={setErr} />
            }
            { suc && <Success msg={suc} css={'my-1'} setSuc={setSuc} />}
                <h4 className='font-semibold my-2 uppercase'>Charge</h4>
                <p className='text-sm mb-1' >
                    Charging will increase the amount of money in Abebes's Account.  
                </p>
                <div className='flex gap-4'>
                    <input onChange={changeAmount} value={amount} type="number" className='rounded px-2 font-bold w-[130px]' placeholder='money' />
                    {   !loading ? 
                            <button onClick={chargeAmount} className='px-6 py-1 bg-green-800 rounded-lg text-white font-semibold'> charge </button>
                        :   
                        <div className='flex gap-3 px-3 py-1 bg-gray-400 rounded-lg text-white font-semibold'>
                            <p>Charging</p>
                            <img className='m-auto' src={loadingGif} width={10} height={10} alt="" />
                        </div>   
                    }
                </div>
            </form>
  )
}

export default charge
