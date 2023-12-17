import { IoMdClose as CloseIcon } from "react-icons/io";

interface Props {
  error : string,
  style? : string
}

const error = ({error,style} : Props) => {
  return (
    <div className={`bg-red-200 border-l-4 border-red-700 ps-2 p-1 rounded flex justify-between ${style}`}>
        <p>{error}</p>
        <div className="my-auto me-2 cursor-pointer">
          <CloseIcon />
        </div>
    </div>
  )
}

export default error
