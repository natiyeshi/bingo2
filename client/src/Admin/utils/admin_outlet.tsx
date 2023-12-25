import Cookies from "js-cookie"
import { Outlet } from 'react-router-dom'

const index = () => {
  const cookie = Cookies.get("admin_access_token")
  if(cookie){
    return <Outlet />
  } else{
    location.href = "/admin/login"
  }
}

export default index
