import { datas } from "./Data";
import { FiLogOut } from "react-icons/fi";
import axiosInstance from "@/lib/axiosInstance";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

interface UserProfileProps {
    toggle: boolean;
   
  }


const SidebarData: React.FC<UserProfileProps> = ({toggle})=> {
  const navigate = useNavigate();
const {toast} = useToast();
  async function logoutHandler(){
    try {
      await axiosInstance.get("/user/logout");
      toast({
        description:"Logged out"
      })
      navigate("/");
    } catch (error) {
      toast({
        description:"Error logging out"
      })
      
    }
  }
  return (
    <div className="mb-[14rem]">
      {datas.map((data) => {
        return (
          <div
            onClick={() => {
              navigate(data.navigateTo);
            }}
            className={`${
              toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-white transition-all duration-300 last:absolute left-4 bottom-4 text-white hover:text-black`}
            key={data.id}
          >
            <div className="mr-8 text-[1.2rem] sm:text-[1.2rem] md:text-[1.7rem]">{data.icon}</div>
            <div
              className={`${ toggle ? "opacity-0 delay-200 " : ""
              } text-[0.9rem] md:text-[1rem] whitespace-pre`}
            >
              {data.text}
            </div>
          </div>
        );
      })}

      {/* //   id: 7,
  //   icon: <FiLogOut />,
  //   text: "Logout", */}

      <button
        className={`${
        toggle ? "last:w-[3.6rem]" : "last:w-[16rem]"
        } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-white  text-white hover:text-black transition-all duration-300 absolute top-[25.5rem]`}
        onClick={()=>{
          logoutHandler();
        }}
      >
        <div className="mr-8 text-[1.2rem] sm:text-[1.2rem] md:text-[1.7rem]">
          <FiLogOut />
        </div>
        <div
          className={`${
            toggle ? "opacity-0 delay-200 " : ""
          } ttext-[0.9rem] md:text-[1rem] whitespace-pre`}
        >
          Logout
        </div>
      </button>
    </div>
  );
};

export default SidebarData;
