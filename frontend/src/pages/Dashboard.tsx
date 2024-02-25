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
// const [userFname,setUserFname] = useState("");
const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
  setFilter(e.target.value);
}

useEffect(()=>{
  axiosInstance.get(`/user/bulk?filter=${filter}`).then(response => {
    setUsers(response.data.user)
  })
},[])
const handleSearch = async ()=>{
  try {
    const response = await axiosInstance.get(`/user/bulk?filter=${filter}`);
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
            const response = await axiosInstance.get("/account/balance");
            setUserBalance(response.data.balance);
        } catch (error) {
            console.log("Error fetching");
        }
    }
    fetchBalance();
},[])

useEffect(()=>{
  async function fetchProfile(){
    try {
      const response = await axiosInstance.get("/account/userProfile");
   console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  fetchProfile();
},[])
  return (
<div className="my-[4rem] md:my-[5rem] h-screen flex justify-start items-start gap-8 md:gap-20">
<div className=""><Sidebar /></div>
<div className="relative flex flex-col justify-center items-center">
 
  <div className=" z-10 flex justify-center items-center md:w-[68rem] w-[19.5rem] h-[29rem] mt-[8rem] rounded-xl">

  <div className="z-50 absolute w-[15rem] h-[18rem] rounded-xl border border-zinc-50/30 top-[1rem] bg-white opacity-20 text-black">
   

</div>
  </div>
  
<div className="">  <div className="text-3xl font-bold"> `Your Balance is ${userBalance}`</div>
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
 </div></div>

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

//  <div className="">
//   <div className="text-3xl font-bold"> `Your Balance is ${userBalance}`</div>
//   <div className="mt-[4rem]">
//  <div className="flex justify-center items-center gap-7">
//  <input className="text-black w-[14rem] h-[2.5rem] px-[1rem] rounded-md" type="text" value={filter} onChange={handleFilterChange} />
//   <Button onClick={handleSearch}>Search</Button>
//  </div>
//   <div className="flex flex-col gap-6 justify-center items-center mt-[3rem]">
//         {users.map((user) => (
//          <UserCard key={user._id} username={user.username} id={user._id}/>
//         ))}
//       </div>
//  </div>
// </div> 
