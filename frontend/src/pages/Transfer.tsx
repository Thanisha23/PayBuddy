import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import axiosInstance from "@/lib/axiosInstance";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { IoMdSearch } from "react-icons/io";
import "../Home.module.css"
const Transfer = () => {
    interface User {
        _id: string;
        username: string;
        firstName: string;
        lastName: string;
      }
    const [filter, setFilter] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
      };
     

      const handleSearch = async () => {
        try {
          const response = await axiosInstance.get(`/user/bulk?filter=${filter}`);
          {filter && setUsers(response.data.user)}
        } catch (error) {
          console.error("Error searching users", error);
        }
      };
      useEffect(() => {
        handleSearch();
      }, [filter]);
  return (

    <div className="relative font-roboto">
   
    <div className="lg:absolute lg:left-2 lg:block md:hidden hidden">
   
       <Sidebar />
 
    </div>
    <div className="mt-0 md:mt-[5rem] md:flex md:justify-center md:items-center flex justify-center items-center bg-[#F8F5CA] dark:bg-[#020817]">
     <div className="bg-white w-[20rem] md:w-[30rem] h-[33rem] my-[3rem] md:my-[3rem] overflow-hidden rounded-lg lg:ml-[15rem]">
          {" "}
       <div className="pl-6 pt-4 pb-4 border border-transparent border-b-zinc-400/50"><p className="text-black font-medium  text-xl ">Select a recipient</p>
       <p className="text-zinc-800/60 text-sm">This is the beneficiary of your transfer</p></div>
          <div className="mt-[1.5rem]">
            
            <div className="flex justify-center items-center gap-7 px-6 md:px-12 relative">
      
              <input
                className="text-black w-full h-[2.5rem]  px-[2.5rem] rounded-md border-2 border-zinc-500/30 border-solid"
                type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Find your recipient"
              />
              <div className="absolute md:left-[3.7rem] top-[0.6rem] text-black font-medium left-[2.2rem]"><IoMdSearch size={20}/></div>
              {/* <Button onClick={handleSearch}>Search</Button> */}
            </div>
            <div className="flex flex-col gap-6 justify-center items-center mt-[1rem] md:px-12 px-6">
              {filter.length > 0 && 
              users.map((user) => (
                <UserCard
                  key={user._id}
                  username={user.username}
                  id={user._id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                />
              ))}
               
            </div>
          </div>
        </div>
        
    </div>
    <div className="fixed bottom-8 left-0 right-0 block lg:hidden">
   
         <Navbar />
 
        </div>
    </div>
  )
}

export default Transfer