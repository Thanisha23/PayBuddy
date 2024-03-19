// import { ModeToggle } from "@/components/mode-toggle";
import { useLocation } from "react-router-dom";
import {useState,useContext} from "react";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";
import { UserContext } from "@/components/context/UserContext";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import Tick from '../../tick.json';
import Lottie from 'lottie-react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import '../Home.module.css'
const SendMoney = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const {user} = useContext(UserContext);
const [transferData,setTransferData] = useState({
  amount:0,
  to:"",
});
const location = useLocation();
const {userId,username,firstName,lastName} = location.state || {};
const handleTransfer = async() =>{
  try {
    const response = await axiosInstance.post(
      "/account/transfer",
      {
        amount:transferData.amount,
        to:userId,
      },
    );

    console.log(response.data);
    setTransferData({
      amount:0,
      to:"",
    });
    setIsModalOpen(true);
  } catch (error) {
    console.error("Error transferring money",error);
  }
}
const blurToggle = isModalOpen ? '' : '';
const showToggle = isModalOpen ? 'block' : '';
const closeModal = () => {
  setIsModalOpen(false);
};

const handleOverlay = () =>{
  {isModalOpen && 
      setIsModalOpen(false);
  }
}


  return (
    <div onClick={handleOverlay} className={`relative font-roboto ${blurToggle}`}>
      {isModalOpen && (
        <div className="overlay" onClick={closeModal}></div>
      )}
       {isModalOpen && (
        <div id="modal" className={`${showToggle} fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50  z-50`}>
          <div className="bg-white w-[18rem] h-[18rem] rounded-lg relative">
            <Lottie animationData={Tick} />
            <div className="absolute bottom-2 w-full text-center text-zinc-800/90 text-2xl font-rakkas">Transaction Successful</div>
            <button className="absolute top-2 right-2" onClick={closeModal}><IoMdCloseCircleOutline color="black" size={25} /></button>
          </div>
        </div>
      )}

<div className="lg:absolute lg:left-2 lg:block md:hidden hidden">
 
       <Sidebar />
 
    </div>
    <div className="mt-0 md:mt-[5rem] md:flex md:justify-center md:items-center flex justify-center items-center bg-[#F8F5CA] dark:bg-[#020817]">
   
     <div className="bg-white w-[20rem] md:w-[30rem] h-[30rem] my-[4rem] md:my-[3rem] overflow-hidden rounded-lg lg:ml-[15rem]">
          {" "}
       <div className="pl-6 pt-4 pb-4 border border-transparent border-b-zinc-400/50"><p className="text-black font-medium  text-xl ">Fill in the details</p>
       <p className="text-zinc-800/60 text-sm">Your transfer is almost ready to be executed</p></div>
       <div className="flex justify-center items-center bg-opacity-15 bg-[#769ce2] h-[8rem] gap-[1.5rem]">
        <div className="w-[7rem] h-[4.5rem] bg-white rounded-md p-2 pl-3 flex justify-center items-center flex-col">
          <div className="text-black w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-full border border-black">{user.firstName ? user.firstName.slice(0,1).toUpperCase(): ""}</div>
          <div className="text-center text-black">
            <div className="text-xs">{user.firstName? user.firstName: "Error"}</div>
            <div className="text-xs">{user.lastName? user.lastName: "Error"}</div>
          </div>
        </div>
        <div><FaArrowRight color="black" size={22} /></div>
        <div className="w-[7rem] h-[4.5rem] bg-white rounded-md p-2 pl-3 flex justify-center items-center flex-col">
          <div className="text-black w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-full border border-black">{firstName? firstName.slice(0,1).toUpperCase() :""}</div>
          <div className=" text-black text-center">
            <div className="text-xs">{firstName ? firstName :"Error"}</div>
            <div className="text-xs">{lastName ? lastName :"Error"}</div>
          </div>
        </div>
       </div>

       <div className="text-black pl-[1.2rem] font-medium text-lg pt-2">Recipient:  <span className="ml-2 text-xs font-normal text-zinc-600/80 px-3 py-1 bg-opacity-15 bg-[#769ce2] rounded-full pt-1">{username}</span></div>

       <div className="text-black pl-4 font-medium text-base pt-6 relative">
        Transfer details:
        <h1 className="pt-4 mb-2">Amount</h1>
        <input
                className="text-black w-[full] h-[2.5rem] text-sm px-[1.5rem] rounded-md border-2 border-zinc-500/30 border-solid"
                type="number" placeholder="Enter amount" value={transferData.amount === 0 ? '' : transferData.amount} onChange={(e)=>{
                  setTransferData({...transferData,amount:Number(e.target.value)})
                }} />
               <span className="absolute text-black text-xl top-[6.4rem] right-[5.5rem] md:right-[15.5rem]">₹</span>
      </div>
      <div className="pl-4 mt-8">
      <Button variant={"outline"} onClick={handleTransfer}>Transfer Money</Button>
      </div>
    
        </div>
        
    </div>
    <div className="fixed bottom-8 left-0 right-0 block lg:hidden">
       
         <Navbar />
    
        </div>
    </div>
  )
}

export default SendMoney

