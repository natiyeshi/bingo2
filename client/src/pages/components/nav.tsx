import React, { useState } from 'react'

interface Props {
    isFullScreen : Boolean,
    toggleNav : Boolean,
    setIsFullScreen : Function,
    toggleScreen : Function,
    setShowHistory : Function,
    setShowProfile : Function
}

const Nav = ({setShowHistory,toggleNav,setShowProfile,toggleScreen}:Props) => {
    
    return (
        <nav className={`${toggleNav ? "h-[12vh]" : "h-0" } duration-100 w-full bg-slate-900 flex text-white `}>

            <div className='flex basis-1/3 justify-center my-auto gap-3'>
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
            <ul className='flex basis-1/3 gap-8 my-auto capitalize'>
                <li onClick={() => setShowProfile((data : boolean) => !data)} className='duration-300 cursor-pointer font-slate-100 hover:scale-[110%]'>profile</li>
                <li onClick={() => setShowHistory((data : boolean) => !data)} className='duration-300 cursor-pointer font-slate-100 hover:scale-[110%]' >history</li>
                <li onClick={() => toggleScreen()} className='duration-300 cursor-pointer font-slate-100 hover:scale-[110%]'>full screan</li>
                <li className='duration-300 cursor-pointer font-slate-100 hover:scale-[110%]'>Logout</li>
               
            </ul>        
        </nav>
    )
}

export default Nav
