import { useState } from 'react'
import Bar from '../common/Bar'
import { pages } from "../../types/types"
import { AxiosError } from 'axios'
import axios from '../../../axios'
import Error from '../common/error'
import loadingGif from "../../../assets/gif/Rolling-1s-200px.gif"
import Success from "../common/success"

    
interface formInf {
    confirm : string,
    password : string,
    oldPassword : string,
}

const index = () => {

    const initialData : formInf = {
        oldPassword : "",
        password : "",
        confirm : "",
    }
    const [form,setForm] = useState(initialData)

    const [err,setErr] = useState("")
    const [suc,setSuc] = useState("")
    const [loading,setLoading] = useState(false)

    const onFormchange  = ({target} : any) => {
        setForm(data => ({ ...data,[target.name] : target.value}))
    } 

    const submit = async () => {
        setSuc("")
        setErr("")
        console.log(form)
        if(form.confirm != form.password){
            return setErr("Confirm not matched!")
        }
        try {
            setErr("")
            setLoading(true)
            await axios.post("admin/changePassword",form)
            setSuc("password changed!")
            setForm(initialData)
          }catch(error){
            let err = error as AxiosError
            let errMessage : any = err.response?.data
            setErr(errMessage.error?.message)
          }finally{
            setLoading(false)
          }
    }



  return (
    <div className='flex h-[100vh] overflow-hidden'>
    <Bar pages={pages.Edit}/>
    <div className='w-3/4  flex flex-col'>
        <div className='w-full py-4 px-8 font-bold text-2xl capitalize'>
            <h1>Add Dealer</h1>
        </div>
        <div>

        </div>
        <form onSubmit={e => e.preventDefault()} className="mx-auto my-10 bg-slate-50 w-1/2 px-10 py-5 h-fit pb-6 rounded-xl shadow flex flex-col gap-3">
            <h2 className='text-xs'>Change your password here</h2>
            {err && <Error err={err} setErr={setErr} />}
            {suc && <Success msg={suc} setSuc={setSuc} />}
            <div className='flex gap-1 capitalize flex-col'>
                <label htmlFor="" className='my-auto'>Old Password</label>
                <input type="text" placeholder='old password' value={form.oldPassword} name='oldPassword' onChange={onFormchange} className='px-2 py-1 outline-none border  rounded' />
            </div>
            <div className='flex gap-1 capitalize flex-col'>
                <label htmlFor="" className='my-auto'>Password</label>
                <input type="text" placeholder='Password' value={form.password} name='password' onChange={onFormchange}  className='px-2 py-1 outline-none border  rounded' />
            </div>
            <div className='flex gap-1 capitalize flex-col'>
                <label htmlFor="" className='my-auto'>Confirm</label>
                <input type="text" placeholder='Confirm' value={form.confirm} name='confirm' onChange={onFormchange}  className='px-2 py-1  outline-none border rounded' />
            </div>
            
            <div className='flex justify-center my-2'>
            {
                    loading ? 
                    <div className='flex gap-3 px-5 duration-300 py-1 bg-gray-400 rounded-lg text-white font-semibold'>
                        <p>Loading</p>
                        <img className='m-auto' src={loadingGif} width={20}  alt="" />
                    </div>   
                    :
                <button onClick={submit} className='px-5 py-1 bg-slate-900 text-white font-sembold rounded-lg capitalize'>submit</button>
            }
            </div>
        
        </form>
    </div>
      
    </div>
  )
}

export default index
