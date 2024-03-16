import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom"
import axiosInstance from "@/lib/axiosInstance"
const formSchema = z.object({
  username: z.string().min(3, {
    message: "Invalid email",
  }),
  password: z.string().min(6, {
    message: "Invalid Password",
  }),
})

const Signin = () => {
  const navigate = useNavigate();
const {toast} = useToast();
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    username: "",
    password:"",
  },
})

async function onSubmit(values: z.infer<typeof formSchema>) {
try {
  toast({
    description:"Loading...",
   
  })
    const response = await axiosInstance.post(
      "/user/signin",
      values,
      {
        headers:{
          "Content-Type":"application/json",
        },
        withCredentials:true,
      }
    )
    if(response.status === 200){
      toast({
        description:"Login successful"
      });
      navigate("/dashboard")
    }else{
      toast({
        description:"Login Failed"
      })
    }
} catch (error) {
  toast({
    description:"Login Error"
  
})
console.log(error);
}
  // console.log(values)
}
  return (
    
      <div className="my-[3rem] md:my-[5rem] mx-auto  md:w-[70%] w-[85%] border md:border-zinc-50/30  border-x-transparent border-y-transparent  rounded-xl md:flex md:justify-center md:items-center ">
        <div  className="md:flex md:justify-center md:items-center md:w-[50%] w-[100%] bg-white rounded-t-full md:rounded-sm">
    <img className="mx-auto ml-3 md:h-[35rem]" src="/logo.png" alt="logo" />
    
    </div>
        <div className="md:py-[1rem] py-[4rem] md:pl-[0.8rem] md:w-[43%] w-[100%] mx-auto border md:border-transparent border-zinc-50/30 relative">
       
            <h1 className="font-medium md:font-bold md:text-xl md:w-[14rem] w-[8rem] text-left leading-6 absolute md: md:left-1 bottom-[21rem] left-4">Welcome back to PayBuddy!</h1>
           <div className="leading-6 absolute md:bottom-[20.8rem] md:right-0 right-4 md: bottom-[20.3rem]"> <h2 className="text-[0.8rem] text-gray-300/50 text-center md:w-[12rem] w-[6rem] leading-4">Don't have an account?</h2>
            <h2 className="font-medium text-xs text-center pt-2"><a href="/signup">Signup here</a></h2></div>
          
      <div className="md:px-0 px-[1.5rem] md:pt-0 pt-8"><Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         
        <Button variant={"outline"} type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? "Submitting..." : "Submit"}</Button>
       
      </form>
     
    </Form></div>
    </div>
  
    
    </div>

  )
}
export default Signin;