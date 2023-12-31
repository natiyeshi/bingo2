import axios from "../../axios"
import { AxiosError } from 'axios'
interface Props {
    isFullScreen : Boolean,
    setIsFullScreen : Function,
    toggleScreen : Function,
    setShowHistory : Function,
    setShowProfile : Function
}

const Nav = ({setShowHistory,setShowProfile,toggleScreen}:Props) => {
    
    const logout = async () => {
        try{
          await axios.post("/dealer/logout")
          location.href = "/login"
        }catch(error){
          let err = error as AxiosError
          let errMessage : any = err.response?.data
          alert(errMessage?.error?.message || "check you connection please!")
        }
      }

      
    return (
        <nav className={`h-[12vh] duration-100 w-full bg-slate-900 flex text-white `}>

            <div className='flex basis-1/3 justify-center my-auto gap-3' >
                <span className='bg-orange-900 rounded-full flex w-[40px] h-[40px]  '>
                   <span className='m-auto font-bold'>B</span> 
                </span>
                <span className='bg-green-700 rounded-full flex w-[40px] h-[40px]  '>
                   <span className='m-auto font-bold'>I</span> 
                </span>
                <span className='bg-blue-700 rounded-full flex w-[40px] h-[40px]  '>
                   <span className='m-auto font-bold'>N</span> 
                </span>
                <span className='bg-purple-700 rounded-full flex w-[40px] h-[40px]  '>
                   <span className='m-auto font-bold'>G</span> 
                </span>
                <span className='bg-yellow-500 rounded-full flex w-[40px] h-[40px]  '>
                   <span className='m-auto font-bold'>O</span> 
                </span>

            </div>  
            <div className='basis-1/3 flex'>
                <h1 className='text-3xl font-semibold my-auto justify-center '>
                    Dealer
                </h1>
            </div>
            <ul className='flex basis-1/3 gap-8 my-auto capitalize text-sm font-semibold'>
                <li onClick={() => toggleScreen()} className='duration-300 cursor-pointer font-slate-100 hover:text-slate-300'>full screan</li>
                <li onClick={() => setShowProfile((data : boolean) => !data)} className='duration-300 cursor-pointer font-slate-100 hover:text-slate-300'>profile</li>
                <li onClick={() => setShowHistory((data : boolean) => !data)} className='duration-300 cursor-pointer font-slate-100 hover:text-slate-300' >history</li>
                <li onClick={logout} className='duration-300 cursor-pointer font-slate-100 hover:text-slate-300'>Logout</li>
               
            </ul>        
        </nav>
    )
}

export default Nav
