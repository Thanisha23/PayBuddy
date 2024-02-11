import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserCard from "@/components/UserCard";

const Dashboard = () => {
const navigate = useNavigate();
interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
}

const [filter,setFilter] = useState("");
const [users,setUsers] = useState<User[]>([]);


const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
  setFilter(e.target.value);
}

// useEffect(()=>{
//   axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
//     withCredentials:true
//   }).then(response => {
//     setUsers(response.data.user)
//   })
// },[])
const handleSearch = async ()=>{
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
      withCredentials:true,
    });
    setUsers(response.data.user)
  } catch (error) {
    console.error("Error searching users",error);
  }
};

useEffect(() => {
  handleSearch();
},[filter]);


  function updateHandler() {
   navigate('/update')
  }

   function balanceHandler() {
    navigate('/myBalance')
   }
  return (
    <div className="m-[2rem] flex flex-col justify-center items-center">
    <div className="flex justify-between items-center w-[60rem]"> 
    <Button variant={"outline"} onClick={()=>{
      balanceHandler()
    }} className="ml-7">Check my balance</Button>

<Button variant={"outline"} onClick={()=>{
      updateHandler()
    }} className="ml-7">Update</Button>


 </div>
{/* {users.map((user)=>

  <div key={user._id}>
  <h1>{user.username}</h1>

</div>
  )} */}
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
  )
}

export default Dashboard