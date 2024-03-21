import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axiosInstance from "@/lib/axiosInstance";
import { useContext } from "react";
import { Context } from "@/main";

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
});

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {setIsAuthenticated} = useContext(Context);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      toast({
        description: "Loading...",
      });

      const response = await axiosInstance.post("/user/signup", values, {
        headers: {
          "Content-Type": "application/json",
        },
       
      });
      if (response.status === 200) {
        setIsAuthenticated(true);
        toast({
          description: "Signup successful , Please wait..",
        });
        navigate("/dashboard");
      } else {
        toast({
          description: "Signup Failed",
        });
      }
      // console.log(response);
    } catch (error) {
      toast({
        description: "Signup Error",
        
      });
    }
  }
  return (
    <div className=" md:my-[4rem] my-[2rem] font-roboto md:h-[36.8rem] mx-auto md:w-[73%] border md:border-zinc-50/30  border-x-transparent border-y-transparent rounded-lg md:flex md:justify-center md:items-center w-[100%]">
      {/* <div className="md:w-[50%] w-[90%] rounded-t-full md:rounded-sm bg-white md:h-full h-[60%]  flex justify-center items-center mx-auto md:mx-0">
        <img
          src="/logo-final.png"
          className="md:w-[26rem] md:h-[26rem] w-[7rem] h-[7rem]"
          alt=""
        />
      </div> */}
       <div className="lg:flex md:h-[36.8rem] lg:justify-center lg:items-center lg:w-[50%] md:hidden w-[80%] bg-white rounded-t-full md:rounded-sm md:mx-0 mx-auto">
        <img className="mx-auto  ml-4 md:h-[36.8rem]" src="/logo.png" alt="logo" />
      </div>
       
      <div className=" md:pl-[0.8rem] md:w-[80%] lg:w-[43%] md:h-full h-[222%] w-[80%] mx-auto border md:border-transparent border-zinc-50/30 relative md:pt-[2rem] pt-[1.5rem]">
        <div className="pb-[0.8rem]">
          <h1 className="font-medium lg:text-4xl md:text-3xl text-3xl  text-center leading-6 font-rakkas">
            Signup to PayBuddy
          </h1>
        </div>
        <div className=" px-[1.5rem] md:px-0 ld:px-[0.5rem] py-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 md:space-y-6"
            >
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
                    <FormLabel>First Name</FormLabel>
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
                    <FormLabel>Last Name</FormLabel>
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
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className=""
                variant={"outline"}
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
              <div className="flex justify-start items-start gap-4">
                <h2>
                  <span className="text-[0.8rem] text-gray-300/50">
                    Already a member?
                  </span>
                </h2>
                <h2 className="font-medium text-xs  pt-1">
                  <a href="/signin">Log in here</a>
                </h2>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
