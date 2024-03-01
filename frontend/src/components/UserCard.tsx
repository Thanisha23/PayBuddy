import React from "react"
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface UserCardProps {
    username:string;
    id:string;
}

const UserCard: React.FC<UserCardProps> = ({username,id}) => {
    const navigate = useNavigate();

    function sendButtonHandler(id:string){
        navigate("/send",{state:{userId:id,username}});
        console.log(id);
    }
  return (
    <div className="bg-blue-300 rounded-lg h-[3.5rem] w-full px-[2rem] flex justify-between items-start gap-3 p-[0.5rem]">
    <h1 className="text-lg p-2">{username}</h1>
    <div className="">
    <Button onClick={()=>{
        sendButtonHandler(id)
    }}>Send Money</Button>
    </div>

   
  </div>
  )
}

export default UserCard