import { useContext } from "react"
import { Context } from "@/main";
import { Navigate,Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const {isAuthenticated} = useContext(Context);
  return (
   isAuthenticated ? <Outlet /> :<Navigate to="signup" />
  )
}

export default PrivateRoutes