import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Transfer from "./pages/Transfer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import { Home } from "lucide-react";
import Home from "./pages/Home";
import Update from "./pages/Update";

const App = () => {
  return (
  <>
    <BrowserRouter>
    <Routes>

      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/send" element={<SendMoney />} />
      <Route path="/update" element={<Update />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App