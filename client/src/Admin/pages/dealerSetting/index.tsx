import { IoSettingsOutline as SettingIcon } from "react-icons/io5";
import { IoCloseSharp as CloseIcon} from "react-icons/io5";
import Charge from "./components/charge";
import Working from "./components/working";
import Delete from "./components/delete"

interface Props{
    setSettingData : Function,
    data : any
}

const setting = ({setSettingData,data}:Props) => {
  return (
    <div className='absolute left-0 right-0 top-0 bottom-0 flex'>
    <div className='absolute left-0 right-0 top-0 bottom-0 bg-slate-900 opacity-50'> </div>
      <div className='mx-auto mt-8 w-3/4 h-fit pb-10 rounded-xl flex bg-white z-20 flex-col'>
        
        <nav className='px-4 py-3 mb-1 flex justify-between rounded-t-xl '>
          <div className='flex gap-2 '>
            <SettingIcon className="my-auto text-xl" />
            <h1 className='text-lg font-semibold uppercase'>{data.firstName}</h1>
          </div>
          <div className='ml-auto my-auto'>
            <CloseIcon onClick={() => setSettingData(null)} className="text-xl cursor-pointer" /> 
          </div>
        </nav>

        <div className=' h-full'>
         
          <div className='flex flex-col px-4 gap-3'>
            
            <Charge data={data}/>
            <Working data={data}/>
            <Delete data={data} setSettingData={setSettingData} />
            

          </div>

        </div>

      </div>
    </div>
  )
}
// edit stop delete charge

export default setting
