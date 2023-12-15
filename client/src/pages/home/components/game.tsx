import React, { useState } from 'react'
import { MyStates } from '../../../types/ui.types'
import { FaArrowUp as Arrow } from "react-icons/fa";

type Props = {
    play : Function,
    initialData : any,
    pauseGame : Function,
    bingo : Function,
    currState : MyStates,
    setToggleNav : Function,
    toggleNav : Boolean,
    currInd : number,
    audioFileNames : any
}


const game = ({play,bingo,audioFileNames,pauseGame,currInd,currState,setToggleNav,toggleNav,initialData}:Props) => {

    

    return (
        <>
        <div className='basis-[27%] bg-slate-900 py-4 flex flex-col gap-10'> 
                <div className='h-[260px] relative w-[260px] rounded-full bg-white p-2 my5 mx-auto'>
                    <div className='h-full w-full bg-blue-300 rounded-full p-2 '>
                        <div className='h-full w-full bg-blue-500 rounded-full p-2'>
                        <div className='h-full w-full bg-blue-700 rounded-full'>
                            <div className={` ${currState == MyStates.playing && "circleAnimation"} h-full w-full bg-white rounded-full flex  scale-90`} >

                                <div className='m-auto'>
                                    <p className='text-[80px] capitalize text-black font-bold'>
                                        {   audioFileNames! ? 
                                            currInd == 0 ? "Start" :
                                            audioFileNames[currInd - 1] : 
                                            "."
                                        }
                                    </p>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div onClick={() =>  setToggleNav((data : Boolean) => !data)} className='text-white cursor-pointer absolute left-0 top-0 bg-slate-600 opacity-30 hover:opacity-100 w-[30px] h-[30px] rounded-full p-2 flex'>
                        <Arrow className={`m-auto ${!toggleNav ? "rotate-180" : ""} duration-300`} />
                    </div>
                </div>

                <div className='flex px-5 justify-around '>
                    <div className='flex w-[100px] h-[70px] border'> 
                        <p className='m-auto text-2xl uppercase'> {currInd > 2 ? audioFileNames[currInd - 3] : "."} </p>
                    </div>
                    <div className='flex w-[100px] h-[70px] border'> 
                        <p className='m-auto text-2xl uppercase'> {currInd > 1 ? audioFileNames[currInd - 2] : "."} </p>
                    </div>
                    <div className='flex w-[100px] h-[70px] border'> 
                        <p className='m-auto text-2xl uppercase'> {currInd > 0 ? audioFileNames[currInd - 1] : "."} </p>
                    </div>
                </div>

                <div className='flex justify-center gap-10'>
                    {
                        currState == MyStates.loaded ? 
                            <>
                                <button onClick={()=>{play()}} className='bg-blue-700 duration-300 px-12 py-2 rounded-xl text-white font-bold button-shadow-blue'>Start</button>
                            </> :
                            currState == MyStates.playing ? 
                            <>
                                <button onClick={()=>pauseGame()} className=' px-7 py-2 rounded-xl border hover:bg-slate-600 bg-slate-700 duration-300 '>Pause</button>
                            </>:
                             currState == MyStates.paused ? 
                             <>
                                 <button onClick={()=>bingo()} className='bg-green-500 duration-300 px-7 py-2 rounded-xl text-slate-900 font-bold button-shadow-green'>Bingo</button>
                                 <button onClick={()=>play()} className=' px-7 py-2 rounded-xl border hover:bg-slate-600 bg-slate-700 duration-300 '>Resume</button>
                             </>:
                            currState == MyStates.bingo ? 
                            <>
                                <button onClick={()=>play()} className='bg-blue-700 duration-300 px-12 py-2 rounded-xl text-white font-bold button-shadow-blue'>Restart</button>
                            </> :
                            <></>

                    }
                    
                </div>

            </div>
            
            <main className='flex-grow bg-white text-black'> 

                <div className='h-[13vh] flex  text-white mx-2 gap-2'>
                    <div className='bg-orange-700 basis-1/5 py-5 text-center m-auto font-bold text-xl border-2'>B</div>
                    <div className='bg-green-700 basis-1/5 py-5 text-center m-auto font-bold text-xl border-2'>I</div>
                    <div className='bg-blue-700 basis-1/5 py-5 text-center m-auto font-bold text-xl border-2'>N</div>
                    <div className='bg-purple-700 basis-1/5 py-5 text-center m-auto font-bold text-xl border-2'>G</div>
                    <div className='bg-yellow-500 basis-1/5 py-5 text-center m-auto font-bold text-xl border-2'>O</div>
                </div>

                <div className='h-[75vh] overflow-auto grid gap-2 pb-12 scroll-smooth'>
                
               
                    {initialData.b.map((_:any,index:any) => {
                        return (
                    <div key={index} className='flex gap-2 mx-2'>
                        <div  id={`b${index}`} className='bg-gray-100 basis-1/5 py-5 text-center font-bold text-xl capitalize border-2 text-gray-700'>{initialData.b[index]}</div>
                        <div  id={`i${index}`} className='bg-gray-100 basis-1/5 py-5 text-center font-bold text-xl capitalize border-2 text-gray-700'>{initialData.i[index]}</div>
                        <div  id={`n${index}`} className='bg-gray-100 basis-1/5 py-5 text-center font-bold text-xl capitalize border-2 text-gray-700'>{initialData.n[index]}</div>
                        <div  id={`g${index}`} className='bg-gray-100 basis-1/5 py-5 text-center font-bold text-xl capitalize border-2 text-gray-700'>{initialData.g[index]}</div>
                        <div  id={`o${index}`} className='bg-gray-100 basis-1/5 py-5 text-center font-bold text-xl capitalize border-2 text-gray-700'>{initialData.o[index]}</div>
                    </div>
                    )
                    })}
                  
                    

                </div>

            </main>
    </>
  )
}

export default game
