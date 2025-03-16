import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "@/main";
import { useToast } from "@/components/ui/use-toast";
import axiosInstance from "@/lib/axiosInstance";

interface SidebarDataProps {
  toggle: boolean;
}

const SidebarData: React.FC<SidebarDataProps> = ({ toggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(Context);
  const { toast } = useToast();
  
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <IoHomeOutline className="text-2xl" />
    },
    {
      title: "Send Money",
      path: "/transfer",
      icon: <RiMoneyDollarCircleLine className="text-2xl" />
    },
    {
      title: "Profile",
      path: "/myprofile",
      icon: <FaRegUser className="text-xl" />
    },
    {
      title: "Settings",
      path: "/mysettings",
      icon: <IoSettingsOutline className="text-2xl" />
    }
  ];

  async function logoutHandler() {
    try {
      await axiosInstance.get("/user/logout");
      setIsAuthenticated(false);
      toast({
        description: "Logged out"
      });
      navigate("/");
    } catch (error) {
      toast({
        description: "Error logging out"
      });
    }
  }

  return (
    <div className="flex flex-col h-full justify-between py-2">
      {/* Main Menu Items */}
      <div>
        <ul className="flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" 
                      : "hover:bg-white/10 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span className="min-w-[24px] flex justify-center">
                    {item.icon}
                  </span>
                  {!toggle && (
                    <span className={`transition-all duration-200 ${toggle ? "opacity-0" : "opacity-100"}`}>
                      {item.title}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      
      {/* Logout Button - Now positioned properly */}
      <div className="mt-auto mb-4">
        <button
          onClick={logoutHandler}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-all"
        >
          <span className="min-w-[24px] flex justify-center">
            <BiLogOut className="text-2xl" />
          </span>
          {!toggle && (
            <span className={`transition-all duration-200 ${toggle ? "opacity-0" : "opacity-100"}`}>
              Logout
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SidebarData;