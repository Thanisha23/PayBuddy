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
import { FiMail, FiUser, FiLock } from "react-icons/fi";

const formSchema = z.object({
  username: z.string().email().min(3, {
    message: "Please enter a valid email",
  }),
  firstName: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setIsAuthenticated } = useContext(Context);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
    },
  });

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
          description: "Signup successful, Please wait..",
        });
        navigate("/dashboard");
      } else {
        toast({
          description: "Signup Failed",
        });
      }
    } catch (error) {
      toast({
        description: "Signup Error",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#020817] dark:to-[#0b1122] font-rakkas flex items-center justify-center px-4 sm:px-6 py-8">
    <div className="w-full max-w-6xl">
      {/* Card Container */}
      <div className="bg-white dark:bg-[#1a2133] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Section - Brand/Image (hidden on small screens) */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900 p-12 hidden md:flex flex-col justify-between relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
            
            {/* Logo and Brand */}
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <img 
                  src="/finalLogo.jpeg" 
                  alt="PayBuddy Logo" 
                  className="h-12 w-12 rounded-full mr-3"
                />
                <h1 className="text-white text-3xl font-bold">PayBuddy</h1>
              </div>
              <h2 className="text-white/90 text-2xl font-medium mb-4">Start your financial journey with us</h2>
              <p className="text-white/70 mb-8">
                Secure, fast, and convenient payments. Join thousands of users who trust PayBuddy for their financial needs.
              </p>
            </div>
            
            {/* Features List */}
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-white/90">Fast and secure transactions</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-white/90">Low transaction fees</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-white/90">24/7 customer support</span>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2 p-6 sm:p-12">
            <div className="md:hidden flex justify-center mb-6">
              <img 
                src="/finalLogo.jpeg" 
                alt="PayBuddy Logo" 
                className="h-16 w-16 rounded-full"
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#32374A] dark:text-white text-center md:text-left mb-2">
              Create your account
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center md:text-left mb-8">
              Join PayBuddy today and take control of your finances
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#32374A] dark:text-white flex items-center">
                        <FiMail className="mr-2" /> Email
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus-visible:ring-blue-500" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#32374A] dark:text-white flex items-center">
                          <FiUser className="mr-2" /> First Name
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your first name" 
                            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus-visible:ring-blue-500" 
                            {...field} 
                          />
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
                        <FormLabel className="text-[#32374A] dark:text-white flex items-center">
                          <FiUser className="mr-2" /> Last Name
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your last name" 
                            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus-visible:ring-blue-500" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#32374A] dark:text-white flex items-center">
                        <FiLock className="mr-2" /> Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Create a strong password"
                          className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus-visible:ring-blue-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white py-6 rounded-lg mt-2 transition-all"
                  type="submit"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </div>
                  ) : "Create Account"}
                </Button>
              </form>
            </Form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <a href="/signin" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Sign in here
                </a>
              </p>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;