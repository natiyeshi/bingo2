// import React from 'react'
import { useState } from "react";
import Bar from "../common/Bar"
import Setting from "../common/setting"
import { IoSettingsOutline as SettingIcon } from "react-icons/io5";
import { CiEdit as EditIcon} from "react-icons/ci";
import { pages } from "../../types/types"
const index = () => {
  const [settingData,setSettingData] = useState(false)
  return (
    <div className='flex h-[100vh] overflow-hidden'>
        <Bar pages={pages.Home} />
        <div className='w-3/4 px-3 overflow-auto pb-20 relative'>
            {settingData && <Setting  setSettingData={setSettingData}/>}
            <h1 className="text-2xl py-3 ps-10 font-bold ">Dealers</h1>
            <div className="w-full flex ">
                <input type="search" placeholder="Search Sealer Name" className="border border-slate-400 outline-8 outline-slate-300 m-auto w-1/2 px-2 py-2 rounded-lg"/>
            </div>
            <table className="bg-gry-50 w-full mt-5 border border-gray-100 shadow">
                <tr className="text-center bg-gray-50">
                    <td colSpan={7} className="text-xl py-2 font-semibold">Dealers</td>
                </tr>
                <tr className="uppercase text-sm font-semibold">
                    <td className="py-2 border border-gray-100 text-center">#</td>
                    <td className="py-2 border border-gray-100 text-center">First Name</td>
                    <td className="py-2 border border-gray-100 text-center">Last Name</td>
                    <td className="py-2 border border-gray-100 text-center">username</td>
                    <td className="py-2 border border-gray-100 text-center">password</td>
                    <td className="py-2 border border-gray-100 text-center">Edit</td>
                    <td className="py-2 border border-gray-100 text-center">Setting</td>
                </tr>
                {[11,1,1,111,1,1,1,1,2,3].map(_ => 
                    <tr>
                        <td className="py-2 border border-gray-100 text-center">1</td>
                        <td className="py-2 border border-gray-100 text-center">Natnael</td>
                        <td className="py-2 border border-gray-100 text-center">Yeshiwas</td>
                        <td className="py-2 border border-gray-100 text-center">username</td>
                        <td className="py-2 border border-gray-100 text-center">password</td>
                        <td className="py-2 border border-gray-100 text-center">
                            <EditIcon className="m-auto text-lg hover:text-blue-600 cursor-pointer"/>
                        </td>
                        <td className="py-2 border border-gray-100 text-center ">
                            <SettingIcon onClick={() => {setSettingData(true)}} className="m-auto cursor-pointer hover:text-blue-600" />
                        </td>
                    </tr>
                )}
            </table>
        </div>
    </div>
  )
}

export default index
