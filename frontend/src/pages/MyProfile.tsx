import Sidebar from "@/components/Sidebar"
import Update from "@/pages/Update"
import { useContext } from "react";
import Navbar from "@/components/Navbar";
import { UserContext } from "@/components/context/UserContext";
const MyProfile = () => {
  const {user} = useContext(UserContext);

  return (
    <div className="relative font-rakkas">
     <div className="lg:absolute lg:left-2 md:hidden lg:block hidden">
   
      
         <Sidebar />
   
      </div>
        <div className="mt-0 md:mt-[7.5rem] md:flex md:justify-center md:items-center flex justify-center items-center bg-[#F8F5CA] dark:bg-[#020817]">
      
        <div className= "mt-[9rem] lg:mt-[3rem]">  
        <div className="text-3xl lg:text-5xl font-medium">Here to update?</div>
            <Update />
        </div>
      
       
        </div>

      
           <div className="flex justify-center items-center fixed top-12 mx-[1.5rem] left-0 right-0 gap-[1.3rem] lg:hidden">
            <div className="h-[4rem] w-[4rem] bg-white  rounded-full flex justify-center items-center">
            <h1 className="text-black text-4xl">{user.firstName? user.firstName.slice(0,1): ""}</h1>
           </div>
           <div className="pt-[0.5rem]">
            <h1 className="text-xl font-bold">{user.firstName} {user.lastName}</h1>
            <h3 className="pt-[0.3rem] text-gray-500">{user.username}</h3></div>
           </div>
     
        <div className="fixed bottom-8 left-0 right-0 block lg:hidden">
     
         <Navbar />
         
    
     </div>
        
        </div>
  )
}

export default MyProfile