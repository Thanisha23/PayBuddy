import { Button } from "@/components/ui/button"
import styles from "../Home.module.css"

const Home = () => {
  return (
    
   <div className="bg-[#CECDB7] h-screen w-[100] relative">
    <div className="md:w-[4rem] w-[8rem] md:left-34 md:h-[4rem] h-[8rem]  absolute md:absolute md:left-10 md:top-9 top-40 left-0 right-0 md:mx-0 mx-auto"><img src="./logo-final.png" alt="logo" /></div>
    <div className="md:w-full flex justify-center items-center md:pt-[3rem] pt-[4rem]">
      <div className={`${styles.logo} logo font-medium md:px-3 md:text-md px-3 md:py-2 py-[0.5rem] bg-[#32374A] rounded-3xl flex justify-center items-center  sm:gap-0 md:text-base text-sm`}>
      <h1 className ="md:px-2 px-[0.3rem] py-[0.1rem] hover:bg-white hover:text-[#32374A] hover:rounded-2xl">Home</h1>
      <h1 className="md:px-2 px-[0.3rem] py-[0.1rem] hover:bg-white hover:text-[#32374A] hover:rounded-2xl">About</h1>
      <h1 className="md:px-2 px-[0.3rem] py-[0.1rem] hover:bg-white hover:text-[#32374A] hover:rounded-2xl">Features</h1>
      <h1 className="md:px-2 px-[0.3rem] py-[0.1rem] hover:bg-white hover:text-[#32374A] hover:rounded-2xl">Contact</h1>

      </div>
    </div>
      {/* <div className="bg-[#B6AA9D] w-[100] h-screen">  */}
    <div className="bg-[#CECDB7] md:mt-[5rem] mt-[3rem] flex justify-center items-center md:gap-[9rem] sm:gap-[3rem] gap-5 px-[1rem] sm:px-[1rem]"> 


        
     {/* <div className="flex flex-col gap-7 justify-center items-center my-[17rem]"> */}

        {/* <a href="/signup"><Button variant="outline">Signup</Button>
</a>
<a href="/signin"><Button variant="outline">Signin</Button>
</a> */}
<div className="flex flex-col justify-start items-center"><p className="text-[#32374A] text-2xl md:text-5xl md:p-[1rem] font-bold md:px-8 md:pb-0 pb-4 md:mt-0 mt-40 text-center md:text-left"><p>Simplify Payments,</p><p> Elevate Experiences with</p> PayBuddy.</p>
<div className="w-full md:p-[1rem] md:px-9 flex md:justify-start justify-center items-center gap-5 md:mt-0 mt-4">
<a href="/signup"><Button variant="custom">Signup</Button>
</a>
<a href="/signin"><Button variant="custom">Signin</Button>
</a>
</div>
</div>
<div className="hidden md:block"><img className="md:h-[30rem]  md:w-[26rem]" src="/home-photo-4.1.png" alt="photo hai" /></div>
    {/* </div> */}
    </div>
    
   </div>
  )
}

export default Home
