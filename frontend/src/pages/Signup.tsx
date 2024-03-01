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

    const response  = await axiosInstance.post(
      "/user/signup",
     values,
      {
        headers:{
          "Content-Type":"application/json",

        },
     
      }
    )
    if(response.status === 200){
      toast({
        description:"Signup successful"
      });
      form.reset();
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
    <div className="md:my-[6rem] my-[3rem] mx-auto  md:w-[60%] w-[88%] border border-transparent rounded-lg md:flex md:justify-center md:items-center">
       <div  className="md:flex md:justify-center md:items-center md:w-[50%] w-[100%] bg-white rounded-t-full md:rounded-sm  ">
    <img className="w-full md:h-[35rem] pl-6" src="/logo.png" alt="logo" />
    </div>
      <div className="py-[1.5rem] md:pl-[1.5rem] md:w-[40%] w-[100%] mx-auto border border-zinc-50/30 px-[1.5rem]">

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
        <Button variant={"outline"} type="submit">Submit</Button>
      </form>
    </Form>
  
    </div>

   
    </div>
   
  )
}
export default Signup;