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
import axiosInstance from "@/lib/axiosInstance";

const formSchema = z.object({
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

const Update = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axiosInstance.put(
        "/user/update",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        
        }
      );
      if (response.status === 200) {
        toast({
          description: "User information updated successfully",
        });
        form.reset();
      } else {
        toast({
          description: "Failed to update user information",
        });
      }
    } catch (error) {
      toast({
        description: "Error updating user information",
      });
    }
  }

  return (
    <div className="my-[9rem] mx-auto md:w-[30%] w-[70%]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
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
                  <Input placeholder="Enter your last name" {...field} />
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
          <Button variant={"outline"} type="submit">
            Update
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Update;
