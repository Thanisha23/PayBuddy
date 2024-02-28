import Sidebar from "@/components/Sidebar"
import Update from "@/pages/Update"
import { useState,useEffect } from "react";
import Navbar from "@/components/Navbar";
const MyProfile = () => {
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
    <div className="relative">
        <div className="mt-0 md:mt-[5rem] md:flex md:justify-start md:items-start flex justify-center items-center gap-0 md:gap-60 bg-[#F8F5CA] dark:bg-[#020817]">
      <div className="">
     {!isSmallScreen && (
         <Sidebar />
     )}
      </div>
        <div>  
            <Update />
        </div>
      
       
        </div>
        <div className="fixed bottom-8 left-0 right-0">
      {isSmallScreen && (
         <Navbar />
     )}
     </div>
        </div>
  )
}

export default MyProfile