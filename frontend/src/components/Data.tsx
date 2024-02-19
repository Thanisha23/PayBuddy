import { RxDashboard } from "react-icons/rx";
import { BsSend } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";



export const datas = [
  {
    id: 1,
    icon: <RxDashboard />,
    text: "Dashboard",
    navigateTo: "/dashboard",
  },
  {
    id: 2,
    icon: <BsSend />,
    text: "Transfer",
    navigateTo: "/trending",
  },
  {
    id: 3,
    icon: <FaUser />,
    text: "My Profile",
    navigateTo: "/myprofile",
  },

  {
    id: 4,
    icon: <IoSettings />,
    text: "Settings",
    navigateTo: "/mysettings",
  },
];
