import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
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
import axiosInstance from "@/lib/axiosInstance"


const formSchema = z.object({
  username: z.string().email().min(3, {
    message: "Please enter a valid email",
  }),
  firstName: z.string().min(2, {
    message: "Firstname must be atleast 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Lastname must be atleast 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const Signup = () => {
  const navigate = useNavigate();
  const {toast} = useToast();
// 1. Define your form.
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    username: "",
    firstName:"",
    lastName:"",
    password:"",
  },
})
 // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof formSchema>) {

  try {
    toast({
      description:"Loading..."
    })

    const response  = await axiosInstance.post(
      "/user/signup",
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
        description:"Signup successful"
      });
      navigate("/dashboard")
    }else{
      toast({
        description:"Signup Failed"
      })
    }
    console.log(response)
  } catch (error) {
    toast({
      description:"Signup Error"
    })
  }
  
  
}
  return (
    <div className="font-roboto md:my-[5rem] my-[3rem] mx-auto  md:w-[73%] w-[88%] border md:border-zinc-50/30  border-x-transparent border-y-transparent rounded-lg md:flex md:justify-center md:items-center">
       <div  className="md:flex md:justify-center md:items-center md:w-[50%] w-[100%] bg-white rounded-t-full md:rounded-sm  ">
    <img className="w-full md:h-[37.2rem] pl-6" src="/logo.png" alt="logo" />
    </div>
      <div className="py-[1rem] md:pl-[0.8rem] md:w-[43%] w-[100%] mx-auto border md:border-transparent border-zinc-50/30 ">

      <div className="flex justify-center items-center px-1 gap-x-[5rem] md:gap-[14rem] mb-6 md:px-0 px-">
            <h1 className="font-semibold md:font-bold md:text-xl pr-1 md:w-[6rem] w-[5rem] text-left leading-6">Signup to PayBuddy</h1>
           <div className="leading-6"> <h2><span className="text-[0.8rem] text-gray-300/50">Already a member?</span></h2>
            <h2 className="font-medium text-xs text-right"><a href="/signin">Log in here</a></h2></div>
          </div>
      <div className=" px-[1.5rem] md:px-[0.5rem] py-2">
      <Form {...form}>
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
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FirstName</FormLabel>
              <FormControl>
                <Input placeholder="Enter your firstname" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LastName</FormLabel>
              <FormControl>
                <Input placeholder="Enter your lastname" {...field} />
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
    </Form>
      </div>
  
    </div>

   
    </div>
   
  )
}
export default Signup;