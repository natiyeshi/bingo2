import { useEffect, useState } from "react";
import { IoSettingsOutline as SettingIcon } from "react-icons/io5";
import { CiEdit as EditIcon} from "react-icons/ci";
import Setting from "../../dealerSetting"
import axios from "../../../../axios"
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchDealers,getDealers, getError, getLoading } from "../../../../store/features/admin/adminSlice"

interface Props{
}

const main = ({  } : Props) => {
  const navigator = useNavigate()
  const dispatch = useDispatch<any>()
  
  const dealersData = useSelector(getDealers)
  const isLoading = useSelector(getLoading)
  const error = useSelector(getError)
  const [settingData,setSettingData] = useState<any>()

    useEffect(()=>{
        dispatch(fetchDealers())
    },[])

  return (
    <div>
        {settingData && <Setting data={settingData} setSettingData={setSettingData}/>}
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
                    <td className="py-2 border border-gray-100 text-center">balance</td>
                    {/* <td className="py-2 border border-gray-100 text-center">Edit</td> */}
                    <td className="py-2 border border-gray-100 text-center">Setting</td>
                </tr>
                <tbody>
                    {error ? error  : dealersData.map((data : any,ind : number) => 
                        <tr key={data.id}>
                            <td className="py-2 border border-gray-100 text-center">{ind + 1}</td>
                            <td className="py-2 border border-gray-100 text-center">{data.firstName}</td>
                            <td className="py-2 border border-gray-100 text-center">{data.lastName}</td>
                            <td className="py-2 border border-gray-100 text-center">{data.username}</td>
                            <td className="py-2 border border-gray-100 text-center">password</td>
                            <td className="py-2 border border-gray-100 text-center">{data.amount}</td>
                            {/* <td className="py-2 border border-gray-100 text-center">
                                <EditIcon className="m-auto text-lg hover:text-blue-600 cursor-pointer"/>
                            </td> */}
                            <td className="py-2 border border-gray-100 text-center ">
                                <SettingIcon onClick={() => {setSettingData(data)}} className="m-auto cursor-pointer hover:text-blue-600" />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {isLoading && "loading"}
            {error && `${error}`}
    </div>
  )
}

export default main
