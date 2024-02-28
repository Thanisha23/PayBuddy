import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import axiosInstance from "@/lib/axiosInstance";
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
      useEffect(() => {
        axiosInstance.get(`/user/bulk?filter=${filter}`).then((response) => {
          setUsers(response.data.user);
        });
      }, []);

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
    <div>
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
  )
}

export default Transfer