import { IoMdClose as CloseIcon } from "react-icons/io";
import "./css/notification.css"

interface Props { 
    setNotify : Function,
    notify : any,
}


const index = ({ setNotify , notify} : Props) => {
  return (
    <div className='absolute notification right-10 top-10  w-[200px] pb-1 rounded-xl  capitalize shadow-lg z-20 flex flex-col bg-green-200'>
                  <div className='flex justify-between bg-green-400 px-2 py-1 rounded-t-xl'>
                    <h2>Bet</h2>
                    <CloseIcon className="cursor-pointer my-1" onClick={() => setNotify({ amount : 0, net : 0})} />
                  </div>
                  <div className="px-3 p-2">
                    <div>bet {notify.amount} birr</div>
                    <div>net win {notify.net} birr</div>
                  </div>
                </div>
  )
}

export default index
