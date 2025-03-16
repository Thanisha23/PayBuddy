import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "@/main";
import axiosInstance from "@/lib/axiosInstance";
import { Button } from "@/components/ui/button";
import { FiLogOut, FiMoon} from "react-icons/fi";

const Settings = () => {
  const { setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  async function logoutHandler(){
    try {
      await axiosInstance.get("/user/logout");
      setIsAuthenticated(false);
      toast({
        description: "Logged out successfully"
      });
      navigate("/");
    } catch (error) {
      toast({
        description: "Error logging out"
      });
    }
  }
  
  return (
    <div className="bg-[#F8F5CA] dark:bg-[#020817] min-h-screen font-rakkas">
      <div className="hidden lg:block fixed top-3 left-0 h-screen z-10">
        <Sidebar />
      </div>
      <div className="lg:ml-[18rem] px-4 py-8 flex flex-col items-center justify-center min-h-screen pb-20 lg:pb-8">
        <div className="w-full max-w-4xl">
          <div className="w-full sm:w-[90%] md:w-[85%] mx-auto">
            <div className="rounded-xl bg-white dark:bg-[#1a2133] shadow-lg overflow-hidden mb-6">
              <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Settings</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Manage your account preferences</p>
              </div>
            </div>
            <div className="rounded-xl bg-white dark:bg-[#1a2133] shadow-lg overflow-hidden mb-6">
              <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Appearance</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Customize how PayBuddy looks to you</p>
              </div>
              
              <div className="p-6 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                      <FiMoon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Theme Mode</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Choose between light and dark theme</p>
                  </div>
                </div>
                <ModeToggle />
              </div>
            </div>
            <div className="rounded-xl bg-white dark:bg-[#1a2133] shadow-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Account</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Manage your account security</p>
              </div>
              
              <div className="p-6">
                <Button 
                  variant="destructive" 
                  className="flex items-center gap-2"
                  onClick={logoutHandler}
                >
                  <FiLogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
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
}

export default Settings;