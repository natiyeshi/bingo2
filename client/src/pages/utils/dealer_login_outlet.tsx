import Cookies from "js-cookie"
import { Outlet } from 'react-router-dom'

const index = () => {
  const cookie = Cookies.get("access_token")
  if(!cookie){
    return <Outlet />
  } else{
    location.href = "/"
  }
}

export default index
