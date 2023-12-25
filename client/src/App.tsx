import Home from "./pages/home/index"
import UserLogin from "./pages/login/index"
import LoginAdmin from "./Admin/pages/Login/index"
import Dealers from "./Admin/pages/dashbord/index"
import AddDealer from "./Admin/pages/addDealer/index"
import Setting from "./Admin/pages/setting/index"
import EditProfile from "./Admin/pages/editProfile/index"
import AdminOutlet from "./Admin/utils/admin_outlet"
import AdminLoginOutlet from "./Admin/utils/admin_login_outlet"
import DealerLoginOutlet from "./pages/utils/dealer_login_outlet"
import DealerOutlet from "./pages/utils/dealer_outlet"

import { Route , Routes, } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes >
        <Route path="/login" element={<DealerLoginOutlet /> }  >
          <Route path="" element={<UserLogin />} />
        </Route>
        <Route path="/" element={<DealerOutlet /> }  >
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/admin/login"  element={<AdminLoginOutlet />} >
          <Route path="" element={<LoginAdmin />} />
        </Route>
        <Route path="/admin" element={<AdminOutlet />} >
          <Route path=""  element={<Dealers />} />
          <Route path="setting"  element={<Setting />} />
          <Route path="addDealer"  element={<AddDealer />} />
          <Route path="edit"  element={<EditProfile />} />
        </Route>
     </Routes>
    </div>
  )
}

export default App
