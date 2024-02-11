"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
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
async function logoutHandler(){
  try {
    await axios.get(
      "http://localhost:3000/api/v1/user/logout",
      {
        withCredentials:true,
      }
    );
    toast({
      description:"Logged out"
    })
    navigate("/");
  } catch (error) {
    toast({
      description:"Error logging out"
    })
    
  }
}
async function onSubmit(values: z.infer<typeof formSchema>) {
try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
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
    
      <div className="my-[5rem] mx-auto md:w-[30%] w-[70%]">
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
      <Button variant={"outline"} onClick={()=>{
      logoutHandler()
    }} className="ml-7">Logout</Button>
    </Form>
    
    </div>

  )
}
export default Signin;