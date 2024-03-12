import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Transfer from "./pages/Transfer";
import Settings from "./pages/Settings";
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import { Home } from "lucide-react";
import Home from "./pages/Home";
import Update from "./pages/Update";
import MyProfile from "./pages/MyProfile";
import UserProvider from "./components/context/UserContext";
const App = () => {
  return (
  <>
  <UserProvider>
    <BrowserRouter>
    <Routes>

      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/send" element={<SendMoney />} />
      <Route path="/update" element={<Update />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/mysettings" element={<Settings />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </UserProvider>
  </>
  )
}

export default App