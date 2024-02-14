// import { ModeToggle } from "@/components/mode-toggle";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";
const SendMoney = () => {

const [transferData,setTransferData] = useState({
  amount:0,
  to:"",
});
const location = useLocation();
const {userId,username} = location.state || {};
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
    })
  } catch (error) {
    console.error("Error transferring money",error);
  }
}
 
  return (
    <div className="w-[40rem] h-[30rem] mx-auto ">
{/* <ModeToggle /> */}
      
      {/* <div className="text-white">
        <h1>{userId}</h1>
        <h1>{username}</h1></div> */}
      <h1>Transfering money to :{username}</h1>
        <input className="text-black" type="number" placeholder="Enter amount" value={transferData.amount === 0 ? '' : transferData.amount} onChange={(e)=>{
          setTransferData({...transferData,amount:Number(e.target.value)})
        }} />
        

        <Button onClick={handleTransfer}>Transfer Money</Button>
    </div>
  )
}

export default SendMoney