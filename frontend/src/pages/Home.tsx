import { Button } from "@/components/ui/button";
import { CiHome } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
const Home = () => {
  return (
    
    <div className="bg-[white] mx-[2rem] md:mx-[4rem]  dark:bg-[#020817] h-screen w-[100] relative font-rakkas">
     

      {/* navbar */}
      <div className="md:w-full gap-[14rem] flex justify-center items-center md:pt-[4.5rem] pt-[4rem] md:pl-[14rem] lg:pl-[24rem]">
     {/* logo */}
     <div className="dark:rounded-full dark:h-[4rem] w-[4rem] md:left-34 h-[8rem] md:rounded-full absolute md:left-28 md:top-9 top-56 left-0 right-0 md:pt-[2.2rem] md:mx-0 mx-auto pt-1 md:block hidden">
        <img
          className="rounded-full md:w-[3rem] md:h-[3rem]"
          src="./finalLogo.jpeg"
          alt=""
        />
      </div>



        {/* button nav */}
        <div
          className={`border border-[#32374A] dark:border-white font-normal text-xs  md:py-1 md:pt-2 rounded-full py-[0.5rem] flex justify-center items-center gap-7 md:gap-11 px-8 text-[#32374A] dark:text-white`}
        >
          <div>
            <h2 className="flex justify-center items-center">
              <CiHome size={18} />
            </h2>
            <h1 className="pt-1 hover:underline">Home</h1>
          </div>
          <div>
            <h2 className="flex justify-center items-center">
              <CiViewBoard size={18} />
            </h2>
            <h1 className="pt-1  hover:underline">Dashboard</h1>
          </div>
          <div>
            <h2 className="flex justify-center items-center">
              <CiUser size={18} />
            </h2>
            <h1 className=" pt-1  hover:underline">Profile</h1>
          </div>
        </div>
        {/* buttons */}
        <div className="lg:flex lg:justify-center lg:items-center lg:gap-5 lg:pl-8 md:hidden hidden">
          <a href="/signup">
            <Button variant="custom">Signup</Button>
          </a>
          <a href="/signin">
            <Button variant="custom">Signin</Button>
          </a>
        </div>
      </div>
     
      <div className="bg-white md:mt-[5rem] mt-[5rem] md:flex md:justify-center md:items-center md:[6rem] lg:gap-[11rem] gap-5 px-[1rem] sm:px-[1rem] rounded-2xl border border-[#32374A] md:border-transparent pt-6">
        <div className="block md:hidden w-full mb-4"><img
          className="rounded-full w-[6rem] h-[6rem] mx-auto"
          src="./finalLogo.jpeg"
          alt=""
        /></div>
        <div className="flex flex-col justify-start items-center">
          <p className="text-[#32374A] text-2xl md:text-5xl md:p-[1rem] font-medium md:px-8 md:pb-0 pb-4 md:mt-0 text-center md:text-left font-rakkas relative">
            <p>Simplify Payments,</p>
            <p> Elevate Experiences with</p>
            <p className="mb-6">PayBuddy.</p>
            <a className="" href="/signup">
              <Button variant="newVariant">Get Started</Button>
            </a>
          </p>
          {/* <div className="absolute bottom-[14.5rem] left-[13.8rem]"></div> */}
        </div>
        <div className="hidden md:block">
          <img
            className="md:h-[30rem]  md:w-[28rem]"
            src="/home-pg-1.jpg"
            alt="photo hai"
          />
        </div>
     
      </div>
      <div className="flex justify-center items-center gap-[4rem] md:hidden  mt-11 font-rakkas">
        <a href="/signup">
          <Button variant="custom">Signup</Button>
        </a>
        <a href="/signin">
          <Button variant="custom">Signin</Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
