import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { FiLogOut } from "react-icons/fi";
import axiosInstance from "@/lib/axiosInstance";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "@/main";


const Settings = () => {
  const {setIsAuthenticated} = useContext(Context);
    const navigate = useNavigate();
    const {toast} = useToast();
  async function logoutHandler(){
    try {
      await axiosInstance.get("/user/logout");
      setIsAuthenticated(false);
      toast({
        description:"Logged out"
      })
      // console.log("logging out");
      navigate("/");
    } catch (error) {
      toast({
        description:"Error logging out"
      })
      
    }
  }
  return (
    <div className="relative font-rakkas">
      <div className="lg:absolute lg:left-2 lg:block md:hidden hidden">
   
       <Sidebar />
 
    </div>

{/* content */}
<div className="mt-0 md:mt-[7.5rem] md:flex md:justify-center md:items-center  flex justify-center items-center bg-[#F8F5CA] dark:bg-[#020817]">

     <button className="w-[3rem] h-[3rem] border border-white flex justify-center items-center absolute top-[1.8rem] rounded-lg  right-4 lg:hidden" 
     onClick={
        ()=>{
        logoutHandler();
    }
}><FiLogOut size={20} /></button>
   
         <div className="flex justify-center items-center gap-0 md:gap-5  w-[20rem] md:w-[20rem] lg:w-[35rem] md:mt-[12rem] mt-[17rem] h-[7rem] border border-zinc-500/30 p-[1rem] md:p-[1.8rem] rounded-xl"> <div className="lg:text-2xl md:text-xl text-xl font-medium"> You would like to use PayBuddy in  </div>
       <ModeToggle  /></div>
    </div>



    {/* small navbar */}
    <div className="fixed bottom-8 left-0 right-0 block lg:hidden">
   
         <Navbar />
    
        </div>
    </div>
  )
}

export default Settings
