import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import axiosInstance from "@/lib/axiosInstance";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { IoMdSearch } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";

const Transfer = () => {
  interface User {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
  }

  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleSearch = async () => {
    if (!filter.trim()) {
      setUsers([]);
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.get(`/user/bulk?filter=${filter}`);
      setUsers(response.data.user || []);
    } catch (error) {
      console.error("Error searching users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [filter]);

  return (
    <div className="bg-[#F8F5CA] dark:bg-[#020817] min-h-screen font-rakkas">
      <div className="hidden lg:block fixed top-3 left-0 h-screen z-10">
        <Sidebar />
      </div>
      <div className="lg:ml-[18rem] px-4 py-8 flex flex-col items-center justify-center min-h-screen pb-20 lg:pb-8">
        <div className="w-full max-w-4xl">
          <div className="bg-white dark:bg-[#1a2133] w-full sm:w-[90%] md:w-[85%] mx-auto rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Select a recipient
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Find who you want to send money to
              </p>
            </div>
            <div className="p-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IoMdSearch className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white bg-white dark:bg-[#121927] transition-all"
                  placeholder="Search by name or email"
                  value={filter}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="mt-6 h-[55vh] sm:h-[60vh] md:h-[50vh] overflow-y-auto">
                {loading ? (
                  <div className="flex justify-center items-center h-24">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : filter.length > 0 && users.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <IoPersonAddOutline className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-2" />
                    <p className="text-gray-600 dark:text-gray-400">
                      No users found matching "{filter}"
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {users.map((user) => (
                      <UserCard
                        key={user._id}
                        username={user.username}
                        id={user._id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                      />
                    ))}
                  </div>
                )}

                {!filter && (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <IoMdSearch className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-2" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Type to search for users
                    </p>
                  </div>
                )}
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

export default Transfer;
