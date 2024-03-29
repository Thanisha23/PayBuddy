import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import UserProfile from "./UserProfile";
import SidebarData from "./SidebarData";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
  <div>
    <div
      className={`${
        toggle ? "w-[5.8rem]" : "w-[18rem]"
      } dark:bg-transparent bg-gray-400 bg-opacity-50 h-[94%] rounded-3xl ml-6 p-4 border transition-all duration-500 border-solid border-white  relative`}
    >
      <UserProfile toggle={toggle} />
      <div className="relative">
      <SidebarData toggle={toggle} />
      </div>
      <div
        className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10  bg-white rounded-full cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <BiChevronLeft
          className={`${
            toggle ? "rotate-180" : ""
          } text-3xl transition-all duration-300  dark:text-black text-[#AABB9F]`}
        />
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
