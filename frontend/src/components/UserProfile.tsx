import userimg from "../../public/paybuddy.png";


interface UserProfileProps {
    toggle: boolean;
   
  }
const UserProfile: React.FC<UserProfileProps> = ({toggle}) => {

  return (
    <div
      className={`flex gap-5 items-center ${
        toggle
          ? "bg-none transition-all duration-300 delay-200"
          : "bg-transparent rounded-xl p-2"
      }`}
    >
      <div className="min-w-[3.5rem] h-[3.5rem]">
        <img
          src={userimg}
          alt="user-img"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* <div className={`${props.toggle ? "text-black" : "text-white"}`}
          > */}
      <div className={toggle ? "opacity-0 delay-200" : "text-white"}>
        <h3 className="text-xl">
          
            <p className="username font-Lilita text-xl">name</p>
       
        </h3>
        <span className="text-[0.75rem] opacity-60 ">email</span>
      </div>
    </div>
  );
};


export default UserProfile;
