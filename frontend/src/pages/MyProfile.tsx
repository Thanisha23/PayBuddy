import Sidebar from "@/components/Sidebar";
import Update from "@/pages/Update";
import { useContext } from "react";
import Navbar from "@/components/Navbar";
import { UserContext } from "@/components/context/UserContext";
import { User, Mail,Shield } from "lucide-react";

const MyProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-[#F8F5CA] dark:bg-[#020817] min-h-screen font-rakkas">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="lg:pl-[20rem] px-4 py-8 pt-6 lg:pb-6 pb-24 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="w-full sm:w-[90%] md:w-[85%] mx-auto lg:ml-[3rem]">
            <div className="rounded-xl bg-white dark:bg-[#1a2133] shadow-lg mb-6 overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-blue-500/80 to-purple-500/80 dark:from-blue-600/40 dark:to-purple-600/40"></div>

              <div className="px-6 pb-6 relative">
                <div className="flex flex-col sm:flex-row items-center sm:items-end">
                  <div className="h-20 w-20 rounded-full bg-white dark:bg-[#121927] border-4 border-white dark:border-[#1a2133] flex justify-center items-center -mt-10 shadow-lg">
                    <h1 className="text-black dark:text-white text-4xl">
                      {user?.firstName
                        ? user.firstName.slice(0, 1).toUpperCase()
                        : ""}
                    </h1>
                  </div>

                  <div className="mt-3 sm:mt-0 sm:ml-4 text-center sm:text-left pb-3">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {user?.firstName || ""} {user?.lastName || ""}
                    </h1>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400">
                      {user?.username || ""}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white dark:bg-[#1a2133] shadow-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Account Settings
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Update your profile information
                </p>
              </div>

              <div className="p-6">
                <Update />
              </div>
            </div>

            <div className="rounded-xl bg-white dark:bg-[#1a2133] shadow-lg overflow-hidden mt-6">
              <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Account Information
                </h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Name
                    </p>
                    <p className="text-gray-800 dark:text-white font-medium">
                      {user?.firstName || ""} {user?.lastName || ""}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mr-3">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="text-gray-800 dark:text-white font-medium">
                      {user?.username || ""}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Account Status
                    </p>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 sm:bottom-8 left-0 right-0 flex justify-center lg:hidden">
        <Navbar />
      </div>
    </div>
  );
};

export default MyProfile;
