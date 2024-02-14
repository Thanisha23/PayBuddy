import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import Sidebar from "@/components/Sidebar";
import axiosInstance from "@/lib/axiosInstance";
const Dashboard = () => {

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
}

const [filter,setFilter] = useState("");
const [users,setUsers] = useState<User[]>([]);
const [userBalance,setUserBalance] = useState(0);

const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
  setFilter(e.target.value);
}

useEffect(()=>{
  axiosInstance.get(`/api/v1/user/bulk?filter=${filter}`).then(response => {
    setUsers(response.data.user)
  })
},[])
const handleSearch = async ()=>{
  try {
    const response = await axiosInstance.get(`/api/v1/user/bulk?filter=${filter}`);
    setUsers(response.data.user)
  } catch (error) {
    console.error("Error searching users",error);
  }
};

useEffect(() => {
  handleSearch();
},[filter]);


  useEffect(() => {
    async function fetchBalance(){
        try {
            const response = await axiosInstance.get("api/v1/account/balance");
            setUserBalance(response.data.balance);
        } catch (error) {
            console.log("Error fetching");
        }
    }
    fetchBalance();
},[])
  return (
   
   


<div className="mt-[2.5rem] grid grid-cols-4">
<div className="col-span-1"><Sidebar /></div>
<div className="col-span-3">
  <div className="text-3xl font-bold"> `Your Balance is ${userBalance}`</div>
  <div className="mt-[4rem]">
 <div className="flex justify-center items-center gap-7">
 <input className="text-black w-[14rem] h-[2.5rem] px-[1rem] rounded-md" type="text" value={filter} onChange={handleFilterChange} />
  <Button onClick={handleSearch}>Search</Button>
 </div>
  <div className="flex flex-col gap-6 justify-center items-center mt-[3rem]">
        {users.map((user) => (
         <UserCard key={user._id} username={user.username} id={user._id}/>
        ))}
      </div>
 </div>
</div>
</div>

     
    
  )
}

export default Dashboard
{/* {users.map((user)=>

  <div key={user._id}>
  <h1>{user.username}</h1>

</div>
  )} */}


     {/* <div> */}
    {/* <div className="flex justify-between items-center w-[60rem]">  */}
    {/* <Button variant={"outline"} onClick={()=>{
      balanceHandler()
    }} className="ml-7">Check my balance</Button>

<Button variant={"outline"} onClick={()=>{
      updateHandler()
    }} className="ml-7">Update</Button> */}


 {/* </div> */}