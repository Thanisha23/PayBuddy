import { datas } from "@/components/Data";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="">

<div className="w-[20rem] mx-auto bg-white mt-[2rem] h-[3.5rem] rounded-full text-blue-950 flex justify-center items-center gap-8">
{datas.map((data)=>{
 return (
  <div className="text-[1.9rem]" onClick={()=> {
    navigate(data.navigateTo)
  }} key={data.id}>{data.icon}</div>
 )
})}
</div> 
    </div>
  )
}

export default Navbar