
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import UserProfile from "./UserProfile";
import SidebarData from "./SidebarData";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="fixed top-3 left-0 h-screen">
      <div
        className={`${
          toggle ? "w-[5.8rem]" : "w-[18rem]"
        } dark:bg-[#1a2133]/60 bg-gray-400 bg-opacity-50 h-[94%] rounded-3xl ml-6 p-4 border transition-all duration-500 border-solid border-white/50 dark:border-white/10 relative shadow-lg backdrop-blur-sm flex flex-col`}
      >
        {/* User Profile Section */}
        <div className="flex-shrink-0">
          <UserProfile toggle={toggle} />
        </div>
        
        {/* Menu Items Section */}
        <div className="flex-grow overflow-y-auto scrollbar-hide mt-4">
          <SidebarData toggle={toggle} />
        </div>
        
        {/* Toggle Button */}
        <div
          className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-white dark:bg-gray-700 rounded-full cursor-pointer shadow-md border border-gray-100 dark:border-gray-600"
          onClick={() => setToggle(!toggle)}
        >
          <BiChevronLeft
            className={`${
              toggle ? "rotate-180" : ""
            } text-3xl transition-all duration-300 dark:text-gray-300 text-[#AABB9F]`}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;