import { useState } from 'react'
import axios from '../../../../axios'
import Error from '../../common/error'
import Success from '../../common/success'
import { updateWorkingStatus } from '../../../../store/features/admin/adminSlice'
import { useDispatch } from 'react-redux'
import { AxiosError } from 'axios'
import "../css/working.css"

interface Props {
    data : any
}

const working = ({ data }: Props) => {
    const dispatch = useDispatch()
    const [err,setErr] = useState("")
    const [suc,setSuc] = useState("")
    const [loading,setLoading] = useState(false)
    const [working,setWorking] = useState(data.working)

   
    const changeWorking = async () => {
        try {
            setErr("")
            setLoading(true)
            const res = await axios.post("dealer/updateWorking/"+data.id)
            dispatch(updateWorkingStatus({id : res.data.id, newWorking : res.data.working}))
            setWorking((data : boolean) => !data)
          }catch(error){
            let err = error as AxiosError
            let errMessage : any = err.response?.data
            setErr(errMessage.error?.message)
          }finally{
            setLoading(false)
          }
    }

  return (
    <div className='w-full bg-yellow-50 border rounded px-6 pt-2 text-sm flex flex-col pb-4'>
        {
               err && <Error err={err} css={'my-1'} setErr={setErr} />
            }
            { suc && <Success msg={suc} css={'my-1'} setSuc={setSuc} />}
            
        <h4 className='font-semibold my-2 uppercase'>Stop</h4>
        <p className='text-sm mb-1'>
            Stoping an account means temporarly halting abebe from the system.  
        </p>
        <div className='flex gap-4'>

            
            {

            <div onClick={() =>{
                 !loading && changeWorking() 
                }} className={`main ${!loading ? " cursor-pointer" : "cursor-wait"} overflow-hidden w-12 border duration-300 h-6 bg-white rounded-2xl flex ${working && "flex-row-reverse" }  relative`}>
                <div className={`absolute left-0 right-0 top-0 duration-300 bottom-0 ${working && "bg-slate-700" }`} ></div>
                <div className={`sub z-40 h-5 w-5 rounded-full bg-yellow-600 duration-700 mx-[1px] my-auto   `}></div>
            </div>
            
            }
            {working ? "customer is working" : "customer can not login in now"}
        </div>
        
    </div>

  )
}

export default working
