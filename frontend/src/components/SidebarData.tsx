import { datas } from "./Data";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
interface UserProfileProps {
    toggle: boolean;
   
  }

// import axios from "axios";
const SidebarData: React.FC<UserProfileProps> = ({toggle})=> {

  const navigate = useNavigate();
  const logoutHandler = async () => {
console.log("logged out");
  };
  return (
    <div className="mb-[15rem]">
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
            <div className="mr-8 text-[1.7rem]">{data.icon}</div>
            <div
              className={`${ toggle ? "opacity-0 delay-200 " : ""
              } text-[1rem] whitespace-pre`}
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
        toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
        } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-white   text-white hover:text-black transition-all duration-300 absolute top-[31rem]`}
        onClick={logoutHandler}
      >
        <div className="mr-8 text-[1.7rem]">
          <FiLogOut />
        </div>
        <div
          className={`${
            toggle ? "opacity-0 delay-200 " : ""
          } text-[1rem] whitespace-pre`}
        >
          Logout
        </div>
      </button>
    </div>
  );
};

export default SidebarData;
