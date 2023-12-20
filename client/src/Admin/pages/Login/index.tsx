import { useState } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios"
import axios from "../../../axios"

const index = () => {
  const navigate = useNavigate()
  const [err,setErr] = useState<string | null>()
  const [username,setUsername] = useState<string | null>()
  const [password,setPassword] = useState<string | null>()
  const [loading,setLoading] = useState(false)

  const loginDb = async () => {
    try {
      setErr("")
      setLoading(true)
      const res = await axios.post("admin/login",{username,password})
      navigate("/admin")
      console.log(res)
    }catch(error){
      let err = error as AxiosError
      let errMessage : any = err.response?.data
      setErr(errMessage.error?.message)
    }finally{
      setLoading(false)
    }
  }

  const login = async () => {
    if(!username || username.length < 3){
      return setErr("username is required!")
    } 
    if(!password || password.length < 3){
      return setErr("password is required!")
    } 
    loginDb()
  }

  return (
    <div>
        <nav className='py-4 ps-12'>
            <h1 className='text-xl font-bold'>Admin</h1>
        </nav>
        <div className='flex'>
            
          <form className="flex mx-auto flex-col mt-5 gap-2 bg-gray-100 rounded-xl px-32 py-5" onSubmit={(e) => e.preventDefault()}>
            <h1 className='text-xl font-bold'>Login</h1>
            
            
            <div className={`bg-red-200 border-l-4 border-red-700 ps-2 p-1 rounded flex justify-between duration-300 opacity-0 ${err && "opacity-100"}`}>
              <p>{err}</p>
              <div className="my-auto me-2 cursor-pointer">
                <CloseIcon />
              </div>
            </div>

            <div className="flex gap-2  justify-between">
                  <label htmlFor="" className="py-2">Username</label>
                  <input type="text" disabled={loading} onChange={({target}) => setUsername(target.value)} placeholder="players" className="px-2 border py-1 rounded-lg" />
            </div>
            <div className="flex gap-2  justify-between">
                  <label htmlFor="" className="py-2">Password</label>
                  <input type="text" disabled={loading} onChange={({target}) => setPassword(target.value)}  placeholder="players" className="px-2 border py-1 rounded-lg" />
            </div>
            <div className="flex flex-row-reverse  mt-6">
                    <button onClick={login} disabled={loading} className={`${loading ? "bg-gray-600 cursor-wait" : "bg-slate-800"}   w-fit px-10 py-1 rounded-lg text-white`}>Login</button>
            </div>

          </form>

        </div>

    </div>
  )
}

export default index
