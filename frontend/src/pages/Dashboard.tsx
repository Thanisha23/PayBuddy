import { useContext, useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import axiosInstance from "@/lib/axiosInstance";
import Navbar from "@/components/Navbar";
import {UserContext} from "@/components/context/UserContext";
const Dashboard = () => {

 const {user,setUser} = useContext(UserContext);


  
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
   
    <div className="relative font-rakkas">
   
      <div className="lg:absolute lg:left-2 lg:block md:hidden hidden">
   
         <Sidebar />
   
      </div>
      {/* <div className="w-full bg-red-500">hi</div> */}
      <div className="mt-0 md:mt-[7.5rem] md:flex md:justify-center md:items-center flex justify-center items-center bg-[#F8F5CA] dark:bg-[#020817]">
      <div className="relative flex flex-col justify-center items-center lg:ml-[15rem]">

        <div className="z-10 flex justify-center items-center md:w-[65rem] w-[19.5rem]  h-[30rem] md:h-[32rem] mt-[5rem] rounded-xl bg-white dark:bg-white my-[3rem] md:my-0 md:mt-[5rem]">
       
          <div className="z-50 shadow-2xl absolute w-[15rem] h-[11rem] md:w-[25rem] md:h-[15rem] rounded-xl border border-zinc-50/30 top-[2rem] md:-top-[2rem] bg-gray-400 bg-opacity-50 text-black transform rotate-10">
          <div className="p-4 pl-7 pr-7 flex justify-between items-center">
            <img className="bg-white rounded-full" width={30} height={25} src="/chip.png" alt="" />
            <div className="w-[2.5rem] h-[2.3rem] rounded-full bg-white"><img width={50} height={50} src="/logo-final.png" alt="" /></div></div>
           
            <div className="pr-4 pl-9 text-xl  md:text-2xl  font-bold md:font-semibold text-[#020817]">{user.firstName} {user.lastName}</div>
            <div className="dark:text-gray-600 text-gray-800 pl-10 md:pt-11 pt-2">Total Balance</div>
            <div className="text-gray-900 text-xl md:text-2xl font-semibold pl-10"><h1>$  {userBalance.toFixed(2)}</h1></div>

         </div>
          </div>
          
        </div>
      </div>
      <div className="fixed bottom-8 left-0 right-0 block lg:hidden">

         <Navbar />
 
     </div>
    </div>

  );
};

export default Dashboard;
