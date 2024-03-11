import Sidebar from "@/components/Sidebar"
import Update from "@/pages/Update"
import { useState,useEffect } from "react";
import Navbar from "@/components/Navbar";
import axiosInstance from "@/lib/axiosInstance";
const MyProfile = () => {
    const [fname,setFname] = useState("Thanisha");
    const [lname,setLname] = useState("Belchada");
    const [username,setUsername] = useState("thanishabelchada@gmail.com");
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


      useEffect(()=>{
        async function fetchProfile(){
          try {
            const response = await axiosInstance.get("/account/userProfile");
            setFname(response.data.firstName);
            setLname(response.data.lastName);
            setUsername(response.data.username);
          } catch (error) {
            console.log(error);
          }
        }
        fetchProfile();
      },[])
  return (
    <div className="relative">
     
        <div className="mt-0 md:mt-[5rem] md:flex md:justify-start md:items-start flex justify-center items-center gap-0 md:gap-60 bg-[#F8F5CA] dark:bg-[#020817]">
      <div className="">
     {!isSmallScreen && (
      
         <Sidebar />
     )}
      </div>
        <div className={isSmallScreen? "mt-[9rem]":"mt-[3rem]"}>  
        <div className="text-3xl font-medium">Here to update?</div>
            <Update />
        </div>
      
       
        </div>

       {isSmallScreen && (
           <div className="flex justify-center items-center fixed top-12 mx-[1.5rem] left-0 right-0 gap-[1.3rem]">
            <div className="h-[4rem] w-[4rem] bg-white  rounded-full flex justify-center items-center">
            <h1 className="text-black text-4xl">{fname? fname.slice(0,1): ""}</h1>
           </div>
           <div className="pt-[0.5rem]">
            <h1 className="text-xl font-bold">{fname} {lname}</h1>
            <h3 className="pt-[0.3rem] text-gray-500">{username}</h3></div>
           </div>
       )}
        <div className="fixed bottom-8 left-0 right-0">
      {isSmallScreen && (
         <Navbar />
         
     )}
     </div>
        
        </div>
  )
}

export default MyProfile