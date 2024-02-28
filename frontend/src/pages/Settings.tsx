import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { FiLogOut } from "react-icons/fi";
import { useState,useEffect } from "react";

const Settings = () => {
    
    const [isSmallScreen,setIsSmallScreen] = useState(window.innerWidth<=600);


    useEffect(()=>{
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 600);
        };
        window.addEventListener('resize',handleResize);
        
        return () => {
          window.removeEventListener('resize',handleResize);
        }
      },[]);
  return (

    <div className="md:mx-0 bg-[#F8F5CA] dark:bg-[#020817] relative mx-[1rem]">
        <div className="w-[3rem] h-[3rem] border border-white flex justify-center items-center p- absolute top-[1.8rem] rounded-lg  right-4"> <FiLogOut size={20} /></div>
    <div  className="mt-0 md:mt-[5rem] md:flex md:justify-start md:items-start flex justify-center items-center gap-0 md:gap-[15rem]  mb-[18rem]">
      {!isSmallScreen && (
         <Sidebar />
     )}
 
      <div className="flex justify-center items-center gap-4 md:mt-[12rem] mt-[17rem]"> <div className="text-2xl"> You would like to use PayBuddy in : </div>
       <ModeToggle /></div>
        
    </div>

    <Navbar />
    </div>
  )
}

export default Settings

