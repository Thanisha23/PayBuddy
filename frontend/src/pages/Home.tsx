import { Button } from "@/components/ui/button"


const Home = () => {
  return (
    
   <div className="bg-[#CECDB7] h-screen w-[100] ">

    <div className="w-full flex justify-center items-center pt-[3rem]">
      <div className="md:px-4 px-3 py-2 bg-[#32374A] rounded-3xl flex justify-center items-center  sm:gap-0 font-medium">
      <h1 className ="md:px-3 px-2 py-[0.1rem] hover:bg-white hover:text-[#32374A] hover:rounded-2xl">Home</h1>
      <h1 className="md:px-4 px-2 py-[0.1rem] hover:bg-white hover:text-[#32374A] hover:rounded-2xl">About</h1>
      <h1 className="md:px-4 px-2 py-[0.1rem] hover:bg-white hover:text-[#32374A] hover:rounded-2xl">Features</h1>
      <h1 className="md:px-4 px-2 py-[0.1rem] hover:bg-white hover:text-[#32374A] hover:rounded-2xl">Contact</h1>

      </div>
    </div>
      {/* <div className="bg-[#B6AA9D] w-[100] h-screen">  */}
    <div className="bg-[#CECDB7] md:mt-[5rem] mt-[3rem] flex justify-center items-center md:gap-[9rem] sm:gap-[3rem] gap-5 px-[1rem] sm:px-[1rem]"> 


        
     {/* <div className="flex flex-col gap-7 justify-center items-center my-[17rem]"> */}

        {/* <a href="/signup"><Button variant="outline">Signup</Button>
</a>
<a href="/signin"><Button variant="outline">Signin</Button>
</a> */}
<div className="flex flex-col justify-start items-center"><p className="text-[#32374A] text-md md:text-5xl md:p-[1rem] font-bold md:px-8 md:pb-0 pb-4"><p>Simplify Payments,</p><p> Elevate Experiences with</p> PayBuddy.</p>
<div className="w-full md:p-[1rem] md:px-9 flex justify-start items-center gap-5">
<a href="/signup"><Button variant="custom">Signup</Button>
</a>
<a href="/signin"><Button variant="custom">Signin</Button>
</a>
</div>
</div>
<div className=""><img className="md:h-[30rem] h-[8rem] md:w-[26rem] w-[7rem]" src="/home-photo-4.1.png" alt="photo hai" /></div>
    {/* </div> */}
    </div>
    
   </div>
  )
}

export default Home
