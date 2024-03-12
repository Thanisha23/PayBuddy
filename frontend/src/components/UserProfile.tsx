// import { useEffect, useState } from "react";
import { useContext} from "react";
import { UserContext } from "./context/UserContext";

interface UserProfileProps {
    toggle: boolean;
   
  }
  const UserProfile: React.FC<UserProfileProps> = ({toggle}) => {
 
    const {user} = useContext(UserContext);
  


  return (
    <div
      className={`flex gap-5 items-center ${
        toggle
          ? "bg-none transition-all duration-300 delay-200"
          : "bg-transparent rounded-xl p-2"
      }`}
    >
      <div className="min-w-[3.5rem] h-[3.5rem] bg-white  px-auto flex justify-center items-center rounded-full">
       <div className="text-black text-3xl"> {user.firstName? user.firstName.slice(0,1): ""}</div>
        {/* <img
          src={userimg}
          alt="user-img"
          className="md:w-[3.5rem] md:h-[3.5rem] w-[2rem] rounded-full object-cover"
        /> */}

      </div>

      <div className={toggle ? "opacity-0 delay-200" : "text-white"}>
        <h3 className="text-xl">
          
            <p className="username font-Lilita text-xl">{user.firstName ? user.firstName : "loading..." }</p>
       
        </h3>
        <span className="text-[0.75rem] opacity-60 ">{user.username ? user.username : "loading..."}</span>
      </div>
    </div>
  );
};


export default UserProfile;
