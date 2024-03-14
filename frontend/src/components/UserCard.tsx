import React from "react"
// import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
interface UserCardProps {
    username:string;
    id:string;
    firstName:string,
    lastName:string,
}

const UserCard: React.FC<UserCardProps> = ({username,id,firstName,lastName}) => {
    const navigate = useNavigate();
0
    function sendButtonHandler(id:string){
        navigate("/send",{state:{userId:id,username,firstName,lastName}});
        console.log(id);
    }
  return (
    <div className="bg-white rounded-lg h-[3.5rem] w-full flex md:justify-start md:items-center justify-start items-center py-3 border border-zinc-500/40 gap-3 md:px-6 px-0 relative md:pl-4 pl-3">
    {/* <h1 className="text-base p-2">{username}</h1> */}
    <div className="text-[#020817] bg-[#F9F5CB] w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center font-medium text-xl shadow-2xl">{firstName.slice(0,1)}</div>
    <div className="">
        <h1 className="text-base text-black">{firstName} {lastName}</h1>
        <h2 className="text-zinc-500/50 text-xs">{username}</h2>
    </div>
    {/* <Button onClick={()=>{
        sendButtonHandler(id)
    }}>Send Money</Button> */}
    
<FaArrowRight color="black"className="absolute right-3"  onClick={()=>{
        sendButtonHandler(id)
    }} size={22}/>
   
  </div>
  )
}

export default UserCard