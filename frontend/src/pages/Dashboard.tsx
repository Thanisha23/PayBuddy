import { useContext, useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import axiosInstance from "@/lib/axiosInstance";
import Navbar from "@/components/Navbar";
import {UserContext} from "@/components/context/UserContext";
const Dashboard = () => {

 const {user,setUser} = useContext(UserContext);

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
  
  const [userBalance, setUserBalance] = useState(0);
 
 

  useEffect(() => {
    async function fetchBalance() {
      try {
        const response = await axiosInstance.get("/account/balance");
        setUserBalance(response.data.balance);
      } catch (error) {
        console.log("Error fetching");
      }
    }
    fetchBalance();
  }, []);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axiosInstance.get("/account/userProfile");
        console.log(response);
      
        setUser({
          firstName:response.data.user.firstName,
          lastName:response.data.user.lastName,
          username:response.data.user.username
        })
      console.log(`hello ${user.firstName} ji`);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile();
  }, []);
  return (
   
    <div className="relative">
    <div className="mt-0 md:mt-[5rem] md:flex md:justify-start md:items-start flex justify-center items-center gap-0 md:gap-20 bg-[#F8F5CA] dark:bg-[#020817]">
      <div className="">
     {!isSmallScreen && (
         <Sidebar />
     )}
      </div>
      <div className="relative flex flex-col justify-center items-center ">
        <div className="z-10 flex justify-center items-center md:w-[68rem] w-[19.5rem] h-[29rem] mt-[8rem] rounded-xl bg-white dark:bg-white">
          <div className="z-50 shadow-2xl absolute w-[15rem] h-[11rem] md:w-[25rem] md:h-[15rem] rounded-xl border border-zinc-50/30 top-[2rem] md:top-[1rem] bg-gray-400 bg-opacity-50 text-black transform rotate-10">
          <div className="p-4 pl-7 pr-7 flex justify-between items-center">
            <img className="bg-white rounded-full" width={30} height={25} src="/chip.png" alt="" />
            <div className="w-[2.5rem] h-[2.3rem] rounded-full bg-white"><img width={50} height={50} src="/logo-final.png" alt="" /></div></div>
           
            <div className="pr-4 pl-9 text-xl  md:text-2xl  font-bold md:font-semibold text-[#020817]">{user.firstName} {user.lastName}</div>
            <div className="dark:text-gray-600 text-gray-800 pl-10 md:pt-8 pt-2">Total Balance</div>
            <div className="text-gray-900 text-xl md:text-2xl font-semibold pl-10"><h1>${userBalance.toFixed(2)}</h1></div>
          </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-8 left-0 right-0">
      {isSmallScreen && (
         <Navbar />
     )}
     </div>
    </div>

  );
};

export default Dashboard;
