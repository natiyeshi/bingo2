
import { IoPersonCircleOutline as AdminIcon } from "react-icons/io5";
import { FaHome as HomeIcon } from "react-icons/fa";
import { IoPersonAddSharp as AddDealerIcon } from "react-icons/io5";
import { FaExpeditedssl as EditProfileIcon } from "react-icons/fa";
import { FaPercentage as PercentageIcon} from "react-icons/fa";
import { IoIosLogOut as LogoutIcon } from "react-icons/io";
import { pages as Pages } from "../../types/types"
import { Link } from "react-router-dom";

interface Props{
    pages: Pages
}

const Bar = ({pages}:Props) => {
  return (
    <div className='w-1/4 bg-slate-800  text-white'>
            
            <div className="flex gap-2 justify-center border-b pb- py-8">
                <AdminIcon className="text-[40px] my-auto" />
                <h1 className="text-[30px] font-bold"> Admin </h1>
            </div>

            <div className="pt-5">
                <div className="flex flex-col gap-2">
                    <Link to={"/admin"} className={`hover:bg-slate-700  hover:border-white ${pages == Pages.Home && "border-white " } border-slate-800 border-l-4 cursor-pointer duration-300 ps-12 py-3 flex gap-5`}>
                        <HomeIcon className="text-xl my-auto" />
                        <p>Home</p>
                    </Link>
                    <Link to={"/admin/addDealer"} className={`hover:bg-slate-700  hover:border-white ${pages == Pages.AddDealer && "border-white " } border-slate-800 border-l-4 cursor-pointer duration-300 ps-12 py-3 flex gap-5`}>
                        <AddDealerIcon className="text-xl my-auto" />
                        <p>Add Dealer</p>
                    </Link>
                    <Link to={"/admin/edit"} className={`hover:bg-slate-700  hover:border-white ${pages == Pages.Edit && "border-white " } border-slate-800 border-l-4 cursor-pointer duration-300 ps-12 py-3 flex gap-5`}>
                         <EditProfileIcon className="text-xl my-auto" />
                        <p>Edit Profile</p>
                    </Link>
                    <Link to={"/admin/setting"} className={`hover:bg-slate-700  hover:border-white ${pages == Pages.Setting && "border-white " } border-slate-800 border-l-4 cursor-pointer duration-300 ps-12 py-3 flex gap-5`}>
                         <PercentageIcon className="text-xl my-auto" />
                        <p>Set Rage</p>
                    </Link>
                    <Link to={"/admin/login"} className={`hover:bg-slate-700  hover:border-white  border-slate-800 border-l-4 cursor-pointer duration-300 ps-12 py-3 flex gap-5`}>
                         <LogoutIcon className="text-xl my-auto" />
                        <p>Logout</p>
                    </Link>
                </div>
            </div>
            <div className="h-full mt-20 w-full text-center border-t border-slate-700 text-xs pt-12">
                2023 &copy; copy right
            </div>
        </div>
  )
}

export default Bar
