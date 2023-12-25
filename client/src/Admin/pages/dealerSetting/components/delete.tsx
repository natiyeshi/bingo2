import  { useState } from 'react'
import { AxiosError } from 'axios'
import axios from '../../../../axios'
import Error from '../../common/error'
import loadingGif from "../../../../assets/gif/Rolling-1s-200px.gif"
import { deleteDealer } from '../../../../store/features/admin/adminSlice'
import { useDispatch } from 'react-redux'

interface Props {
    data : any,
    setSettingData : Function
}

const charge = ({ data , setSettingData}:Props) => {

    const dispatch = useDispatch()
    const [err,setErr] = useState("")
    const [loading,setLoading] = useState(false)
    
    const deleteData = async () => {
        try {
            setErr("")
            setLoading(true)
            await axios.post("dealer/delete/"+data.id)
            dispatch(deleteDealer(data.id))
            setSettingData(null)
          }catch(error){
            let err = error as AxiosError
            let errMessage : any = err.response?.data
            setErr(errMessage.error?.message)
          }finally{
            setLoading(false)
          }
    }


    return (
        <div className='w-full bg-red-50 border rounded px-6 pt-2 text-sm flex flex-col pb-4'>
         {
               err && <Error err={err} css={'my-1'} setErr={setErr} />
            }
        <h4 className='font-semibold my-2 uppercase'>Delete</h4>
        <p className='text-sm mb-1'>
         Deleting a user will permanently removes the user from the system.  
        </p>
        <div className='flex gap-4'>
        {   !loading ? 
                <button onClick={deleteData} className='px-6 py-1 bg-red-800 rounded-lg text-white shadow font-semibold'>Delete</button>
            :   
            <div className='flex gap-3 px-3 py-1 bg-gray-400 rounded-lg text-white font-semibold'>
                <p>deleting</p>
                <img className='m-auto' src={loadingGif} width={10} height={10} alt="" />
            </div>   
        }
           
        </div>
        
     </div>
  )
}

export default charge
