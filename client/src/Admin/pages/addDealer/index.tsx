import { useState } from 'react'
import Bar from '../common/Bar'
import { pages } from "../../types/types"
import { AxiosError } from 'axios'
import axios from '../../../axios'
import Error from '../common/error'
import loadingGif from "../../../assets/gif/Rolling-1s-200px.gif"
import Success from "../common/success"

interface formInf {
    firstName : string,
    lastName : string,
    username : string,
    password : string,
    confirm : string,
    amount : number,
}

const index = () => {

    const initialData = {
        firstName : "",
        lastName : "",
        username : "",
        password : "",
        confirm : "",
        amount : 0,
    }
    const [form,setForm] = useState<formInf>(initialData)

    const [err,setErr] = useState("")
    const [suc,setSuc] = useState("")
    const [loading,setLoading] = useState(false)

    const changeAmount = (values : string) => {
        try{
            parseFloat(values) 
            return true
        } catch(err){
            return false
        }
    } 
    const onFormchange  = ({target} : any) => {
        if(target.name == "amount"){
            const check = changeAmount(target.value)
            if(!check) return
        }
        setForm(data => ({ ...data,[target.name] : target.value}))
    } 
    const submit = async () => {
        setSuc("")
        if(form.confirm != form.password){
            return setErr("Confirm not matched!")
        }
        try {
            setErr("")
            setLoading(true)
            await axios.post("dealer/signup",form)
            setSuc("dealer added")
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
    <Bar pages={pages.AddDealer} />
    <div className='w-3/4  flex flex-col'>
        <div className='w-full py-4 px-8 font-bold text-2xl capitalize'>
            <h1>Add Dealer </h1>
        </div>
        <div>

        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mx-auto my-10 bg-slate-50 w-1/2 px-10 py-5 h-fit pb-6 rounded-xl shadow flex flex-col gap-3">
            <h2 className='text-sm '>new dealer</h2>
           {err && <Error err={err} setErr={setErr} />}
           {suc && <Success msg={suc} setSuc={setSuc} />}
            <div className='flex justify-between'>
                <div className='flex gap-1 capitalize flex-col'>
                    <label htmlFor="" className='my-auto'>First Name</label>
                    <input type="text" placeholder='first name' value={form.firstName} name='firstName' onChange={onFormchange} className='px-2 py-1 outline-none border  rounded' />
                </div>
                <div className='flex gap-1 capitalize flex-col'>
                    <label htmlFor="" className='my-auto'>last Name</label>
                    <input type="text" placeholder='last Name' value={form.lastName} name='lastName' onChange={onFormchange} className='px-2 py-1 outline-none border  rounded' />
                </div>
            </div>
            <div className='flex justify-between'>
                
                <div className='flex gap-1 capitalize flex-col'>
                    <label htmlFor="" className='my-auto'>Username</label>
                    <input type="text" placeholder='username' value={form.username} name='username' onChange={onFormchange} className='px-2 py-1 outline-none border  rounded' />
                </div>
                <div className='flex gap-1 capitalize flex-col'>
                    <label htmlFor="" className='my-auto'>Amount</label>
                    <input type="number" placeholder='Amount' value={form.amount} name='amount' onChange={onFormchange} className='px-2 py-1 outline-none border  rounded' />
                </div>
            </div>
            <div className='flex gap-1 capitalize flex-col'>
                <label htmlFor="" className='my-auto'>Password</label>
                <input type="password" placeholder='Password' value={form.password} name='password' onChange={onFormchange} className='px-2 py-1 outline-none border  rounded' />
            </div>
            <div className='flex gap-1 capitalize flex-col'>
                <label htmlFor="" className='my-auto'>Confirm</label>
                <input type="password" placeholder='Confirm' value={form.confirm} name='confirm' onChange={onFormchange} className='px-2 py-1  outline-none border rounded' />
            </div>
            
            <div className='flex justify-center my-2'>
                {
                    loading ? 
                    <div className='flex gap-3 px-5 duration-300 py-1 bg-gray-400 rounded-lg text-white font-semibold'>
                        <p>Loading</p>
                        <img className='m-auto' src={loadingGif} width={20}  alt="" />
                    </div>   
                    :
                    <button onClick={submit} className='px-5 py-1 bg-slate-900 text-white font-sembold rounded capitalize'>submit</button> 

                }
            </div>
        
        </form>
    </div>
      
    </div>
  )
}

export default index
