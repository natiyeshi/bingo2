import { IoMdClose as CloseIcon } from "react-icons/io";

interface Props {
  err : string,
  css? : string,
  setErr : Function
}
 
const error = ({err,css,setErr} : Props) => {
  return (
    <div className={`bg-red-200 border-l-4 border-red-700 ps-2 p-1 rounded flex justify-between duration-300 opacity-0 ${err && "opacity-100"} ${css}`}>
      <p>{err}</p>
      <div className="my-auto me-2 cursor-pointer">
        <CloseIcon onClick={() => setErr("")} />
      </div>
    </div>
  )
}

export default error
