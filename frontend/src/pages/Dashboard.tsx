import { useContext, useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import axiosInstance from "@/lib/axiosInstance";
import Navbar from "@/components/Navbar";
import { UserContext } from "@/components/context/UserContext";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, User, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [userBalance, setUserBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBalance() {
      try {
        const response = await axiosInstance.get("/account/balance");
        setUserBalance(response.data.balance);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching");
        setLoading(false);
      }
    }
    fetchBalance();
  }, []);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axiosInstance.get("/account/userProfile");
        setUser({
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          username: response.data.user.username,
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile();
  }, [setUser]);

  const refreshBalance = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/account/balance");
      setUserBalance(response.data.balance);
    } catch (error) {
      console.log("Error refreshing balance");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8F5CA] dark:bg-[#020817] min-h-screen font-rakkas">
      <div className="hidden lg:block fixed top-3 left-0 h-screen z-10">
        <Sidebar />
      </div>
      <div className="lg:ml-[18rem] px-4 py-8 flex flex-col items-center justify-center min-h-screen pb-20 lg:pb-8">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="mb-4 md:mb-8 text-center">
            <h1 className="text-xl md:text-3xl font-bold text-[#32374A] dark:text-white">
              Welcome, {loading ? "User" : `${user?.firstName || ""}`}!
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">
              Here's your current balance
            </p>
          </div>
          <div className="relative w-full flex justify-center mb-6 md:mb-8">
            <Button
              onClick={refreshBalance}
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 z-20"
              disabled={loading}
            >
              <RefreshCw
                className={`h-5 w-5 ${loading ? "animate-spin" : ""}`}
              />
              <span className="sr-only">Refresh Balance</span>
            </Button>
            <div className="z-10 w-full max-w-3xl h-[16rem] sm:h-[20rem] md:h-[26rem] rounded-xl bg-white dark:bg-white/5 shadow-xl flex flex-col justify-center items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-blue-100/50 dark:bg-blue-900/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-purple-100/50 dark:bg-purple-900/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

              <div className="z-50 shadow-2xl absolute w-[12rem] h-[9rem] sm:w-[15rem] sm:h-[11rem] md:w-[20rem] md:h-[13rem] rounded-xl border border-zinc-50/30 bg-gradient-to-br from-gray-400 to-gray-300 dark:from-gray-700 dark:to-gray-500 text-black dark:text-white transform rotate-10 hover:rotate-0 transition-transform duration-300 ease-in-out">
                <div className="p-3 sm:p-4 pl-4 sm:pl-7 pr-4 sm:pr-7 flex justify-between items-center">
                  <img
                    className="bg-white rounded-full"
                    width={24}
                    height={19}
                    src="/chip.png"
                    alt=""
                  />
                  <div className="w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.3rem] rounded-full bg-white flex items-center justify-center">
                    <img
                      width={24}
                      height={24}
                      src="/finalLogo.jpeg"
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="pr-4 pl-5 sm:pl-9 text-base sm:text-lg md:text-xl font-bold md:font-semibold text-[#020817] dark:text-white">
                  {user?.firstName || ""} {user?.lastName || ""}
                </div>
                <div className="dark:text-gray-300 text-gray-800 pl-5 sm:pl-10 md:pt-6 pt-1 text-xs sm:text-sm">
                  Total Balance
                </div>
                <div className="text-gray-900 dark:text-white text-lg sm:text-xl md:text-2xl font-semibold pl-5 sm:pl-10">
                  <h1>₹ {loading ? "..." : userBalance.toFixed(2)}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-1 sm:px-0 max-w-xs sm:max-w-md">
            <h2 className="text-lg md:text-xl font-semibold text-center text-[#32374A] dark:text-white mb-3 md:mb-4">
              Quick Actions
            </h2>

            <div className="md:flex md:justify-center md:items-center grid grid-cols-1 gap-2 sm:gap-3">
              <Link to="/transfer" className="w-full">
                <Button
                  variant="outline"
                  className="w-full h-12 md:h-14 justify-start gap-3 bg-white dark:bg-[#1a2133] border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-800 transition-all"
                >
                  <ArrowUpRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>Send Money</span>
                </Button>
              </Link>

              <Link to="/myprofile" className="w-full">
                <Button
                  variant="outline"
                  className="w-full h-12 md:h-14 justify-start gap-3 bg-white dark:bg-[#1a2133] border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-800 transition-all"
                >
                  <User className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <span>View Profile</span>
                </Button>
              </Link>
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

export default Dashboard;
