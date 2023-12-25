import { IoMdClose as CloseIcon } from "react-icons/io";

interface Props {
  msg : string,
  css? : string,
  setSuc : Function
}
 
const index = ({msg,css,setSuc} : Props) => {
  return (
    <div className={`bg-green-200 border-l-4 border-green-700 ps-2 p-1 rounded flex justify-between duration-300 opacity-0 ${msg && "opacity-100"} ${css}`}>
      <p>{msg}</p>
      <div className="my-auto me-2 cursor-pointer">
        <CloseIcon onClick={() => setSuc("")} />
      </div>
    </div>
  )
}

export default index
