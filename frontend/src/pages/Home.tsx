import { Button } from "@/components/ui/button"


const Home = () => {
  return (
    
   <div className="">
      {/* <div className="bg-[#B6AA9D] w-[100] h-screen">  */}
    <div className="bg-[#CECDB7] h-screen w-[100] flex justify-center items-center p-[6rem]"> 
    
     {/* <div className="flex flex-col gap-7 justify-center items-center my-[17rem]"> */}

        {/* <a href="/signup"><Button variant="outline">Signup</Button>
</a>
<a href="/signin"><Button variant="outline">Signin</Button>
</a> */}
<div className="flex flex-col justify-center items-center"><p className="text-[#32374A] text-6xl p-[1rem] font-bold px-4">Simplify Payments, Elevate Experiences with PayBuddy.</p>
<div className="flex justify-center items-center gap-5">
<a href="/signup"><Button variant="outline">Signup</Button>
</a>
<a href="/signup"><Button variant="outline">Signup</Button>
</a>
</div>
</div>
<div className="mr-[10rem]"><img className="h-[32rem] w-[32rem]" src="./home-photo-4.1.png" alt="" /></div>
    {/* </div> */}
    </div>
    
   </div>
  )
}

export default Home