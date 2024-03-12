import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import axiosInstance from "@/lib/axiosInstance";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
const Transfer = () => {
  const [isSmallScreen,setIsSmallScreen] = useState(window.innerWidth<=600);


  useEffect(()=>{
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 600);
      };
      window.addEventListener('resize',handleResize);
      
      return () => {
        window.removeEventListener('resize',handleResize);
      }
    },[]);
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
      // useEffect(() => {
      //   axiosInstance.get(`/user/bulk?filter=${filter}`).then((response) => {
      //     setUsers(response.data.user);
      //   });
      // }, []);

      const handleSearch = async () => {
        try {
          const response = await axiosInstance.get(`/user/bulk?filter=${filter}`);
          setUsers(response.data.user);
        } catch (error) {
          console.error("Error searching users", error);
        }
      };
      useEffect(() => {
        handleSearch();
      }, [filter]);
  return (

    <div className="relative">
    <div className="mt-0 md:mt-[5rem] md:flex md:justify-start md:items-start flex justify-center items-center gap-0 md:gap-60 bg-[#F8F5CA] dark:bg-[#020817]">
    <div className="">
   {!isSmallScreen && (
       <Sidebar />
   )}
    </div>
     <div className="">
          {" "}
       
          <div className="mt-[4rem]">
            <div className="flex justify-center items-center gap-7">
              <input
                className="text-black w-[14rem] h-[2.5rem] px-[1rem] rounded-md"
                type="text"
                value={filter}
                onChange={handleFilterChange}
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>
            <div className="flex flex-col gap-6 justify-center items-center mt-[3rem]">
              {users.map((user) => (
                <UserCard
                  key={user._id}
                  username={user.username}
                  id={user._id}
                />
              ))}
            </div>
          </div>
        </div>
        
    </div>
    <div className="fixed bottom-8 left-0 right-0">
        {isSmallScreen && (
         <Navbar />
     )} 
        </div>
    </div>
  )
}

export default Transfer