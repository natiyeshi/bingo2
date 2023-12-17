import Home from "./pages/home/index"
import UserLogin from "./pages/login/index"
import LoginAdmin from "./Admin/pages/Login/index"
import Dealers from "./Admin/pages/dashbord/index"
import AddDealer from "./Admin/pages/addDealer/index"
import Setting from "./Admin/pages/setting/index"
import EditProfile from "./Admin/pages/editProfile/index"
import { Route , Routes, } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes >
        <Route path="/" element={<Home /> }  />
        <Route path="/login" element={<UserLogin /> }  />
        <Route path="/admin" >
          <Route path=""  element={<Dealers />} />
          <Route path="setting"  element={<Setting />} />
          <Route path="addDealer"  element={<AddDealer />} />
          <Route path="edit"  element={<EditProfile />} />
          <Route path="login"  element={<LoginAdmin />} />
        </Route>
     </Routes>
    </div>
  )
}

export default App
