import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axiosInstance";
import { useContext } from "react";
import { Context } from "@/main";
const formSchema = z.object({
  username: z.string().min(3, {
    message: "Invalid email",
  }),
  password: z.string().min(6, {
    message: "Invalid Password",
  }),
});

const Signin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setIsAuthenticated } = useContext(Context);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      toast({
        description: "Loading...",
      });
      const response = await axiosInstance.post("/user/signin", values, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        setIsAuthenticated(true);

        toast({
          description: "Login successful , Please wait..",
        });
        navigate("/dashboard");
      } else {
        toast({
          description: "Login Failed",
        });
      }
    } catch (error) {
      toast({
        description: "Login Error",
      });
      console.log(error);
    }
   
  }
  return (
    <div className="my-[3rem] md:my-[5rem] mx-auto md:w-[60%]  lg:w-[70%] w-[85%] border md:border-zinc-50/30 border-x-transparent border-y-transparent  rounded-xl md:flex md:justify-center md:items-center ">
      <div className="lg:flex lg:justify-center md:h-[35.8rem] lg:items-center lg:w-[50%] md:hidden w-[100%] bg-white  rounded-t-full md:rounded-sm">
        <img className="mx-auto ml-4 md:h-[35rem]" src="/logo.png" alt="logo" />
      </div>
      <div className=" md:h-full md:py-[3rem] py-[2rem] md:w-[80%] lg:w-[43%] w-[100%] mx-auto border md:border-transparent border-zinc-50/30">
        <div className="flex justify-center items-center">
          <h1 className="font-medium lg:text-4xl md:text-3xl text-3xl md:pb-4 lg:pb-10 text-center leading-6 font-rakkas">
            Welcome back to PayBuddy!
          </h1>
        </div>

        <div className="md:px-0 px-[1.5rem] md:pt-0 pt-8">
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
                variant={"outline"}
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
              <div className="flex justify-start items-start">
                <h2 className="text-[0.8rem] text-gray-300/50">
                  Don't have an account?
                </h2>
                <h2 className="font-medium text-xs pl-2">
                  <a href="/signup">Signup here</a>
                </h2>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Signin;
