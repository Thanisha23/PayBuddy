import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";
import { UserContext } from "@/components/context/UserContext";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import Tick from "../../tick.json";
import Lottie from "lottie-react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "../Home.module.css";

const SendMoney = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(UserContext);
  const [transferData, setTransferData] = useState({
    amount: 0,
    to: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const { userId, username, firstName, lastName } = location.state || {};

  const handleTransfer = async () => {
    if (!transferData.amount || transferData.amount <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await axiosInstance.post("/account/transfer", {
        amount: transferData.amount,
        to: userId,
      });

      console.log(response.data);
      setTransferData({
        amount: 0,
        to: "",
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error transferring money", error);
      setError("Transaction failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/dashboard");
  };

  return (
    <div className="bg-[#F8F5CA] dark:bg-[#020817] min-h-screen font-rakkas">
      <div className="hidden lg:block fixed top-3 left-0 h-screen z-10">
        <Sidebar />
      </div>
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-[#1a2133] w-[20rem] sm:w-[24rem] h-auto rounded-2xl shadow-xl relative p-6 flex flex-col items-center">
              <button className="absolute top-4 right-4" onClick={closeModal}>
                <IoMdCloseCircleOutline
                  className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                  size={28}
                />
              </button>

              <div className="w-48 h-48">
                <Lottie animationData={Tick} />
              </div>

              <div className="text-center mt-4 mb-2">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Transaction Successful
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  ₹{transferData.amount} has been sent to {firstName} {lastName}
                </p>
              </div>

              <Button className="mt-6 w-full max-w-xs" onClick={closeModal}>
                Back to Dashboard
              </Button>
            </div>
          </div>
        </>
      )}
      <div className="lg:ml-[18rem] px-4 py-8 flex flex-col items-center justify-center min-h-screen pb-20 lg:pb-8">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="bg-white dark:bg-[#1a2133] rounded-xl shadow-lg overflow-hidden w-full sm:w-[90%] md:w-[80%] mx-auto">
            <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-[#32374A] dark:text-white">
                Send Money
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Complete your transaction details
              </p>
            </div>
            <div className="flex justify-center items-center py-8 px-4 bg-blue-50 dark:bg-blue-900/10">
              <div className="flex items-center gap-4 md:gap-8">
                <div className="bg-white dark:bg-[#121927] rounded-lg shadow-md p-3 flex flex-col items-center w-[8rem]">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-500 dark:border-blue-400 flex items-center justify-center text-blue-500 dark:text-blue-400 font-bold mb-2">
                    {user.firstName
                      ? user.firstName.slice(0, 1).toUpperCase()
                      : ""}
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {user.firstName || "You"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user.lastName || ""}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <FaArrowRight
                    className="text-blue-500 dark:text-blue-400 mx-2"
                    size={24}
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Transfer
                  </span>
                </div>
                <div className="bg-white dark:bg-[#121927] rounded-lg shadow-md p-3 flex flex-col items-center w-[8rem]">
                  <div className="w-10 h-10 rounded-full border-2 border-green-500 dark:border-green-400 flex items-center justify-center text-green-500 dark:text-green-400 font-bold mb-2">
                    {firstName ? firstName.slice(0, 1).toUpperCase() : ""}
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {firstName || "Recipient"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {lastName || ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Sending to:
                </span>
                <span className="ml-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full">
                  {username}
                </span>
              </div>
            </div>
            <div className="px-6 py-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Enter Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-500 dark:text-gray-400">₹</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white bg-white dark:bg-[#121927] transition-all"
                    type="number"
                    placeholder="0.00"
                    value={transferData.amount === 0 ? "" : transferData.amount}
                    onChange={(e) => {
                      setTransferData({
                        ...transferData,
                        amount: Number(e.target.value),
                      });
                      setError("");
                    }}
                  />
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {error}
                  </p>
                )}
              </div>

              <Button
                className="w-full md:w-auto"
                onClick={handleTransfer}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Send Money"}
              </Button>
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

export default SendMoney;
