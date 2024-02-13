import { RxDashboard } from "react-icons/rx";
import { AiTwotoneFire } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";

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
    icon: <AiTwotoneFire />,
    text: "Trending",
    navigateTo: "/trending",
  },
  {
    id: 3,
    icon: <CiSaveDown2 />,
    text: "Saved Posts",
    navigateTo: "/mysavedposts",
  },
  {
    id: 4,
    icon: <FaUser />,
    text: "My Profile",
    navigateTo: "/myprofile",
  },

  {
    id: 6,
    icon: <IoSettings />,
    text: "Settings",
    navigateTo: "/mysettings",
  },
];
