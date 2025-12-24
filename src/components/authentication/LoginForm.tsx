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
import { cn } from "@/lib/utils";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useLoginMutation } from "../redux/features/auth/auth.api";
import toast from "react-hot-toast";

type LoginFormData = {
  email: string;
  password: string;
};

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const form = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res.success) {
        toast.success("Logged in successfully");
        navigate("/");
      }
    } catch (err: any) {
      if (err?.data?.message === "Password does not match") {
        toast.error("Invalid credentials");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  // 👇 Demo credential handler
  const fillDemoCredentials = (email: string, password: string) => {
    form.setValue("email", email);
    form.setValue("password", password);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-indigo-400  ">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Demo Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button
              type="button"
              className="bg-slate-600 hover:bg-slate-700 text-gray-200"
              onClick={() => fillDemoCredentials("israt@gmail.com", "A1234$")}
            >
              RIDER
            </Button>

            <Button
              type="button"
              className="bg-slate-600 hover:bg-slate-700 text-gray-200"
              onClick={() => fillDemoCredentials("anu@gmail.com", "A1234$")}
            >
              DRIVER
            </Button>

            <Button
              type="button"
              className="bg-slate-600 hover:bg-slate-700 text-gray-200"
              onClick={() => fillDemoCredentials("super@gmail.com", "A1234$")}
            >
              ADMIN
            </Button>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-slate-600 hover:bg-slate-700 text-gray-200"
          >
            Login
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm text-gray-400 font-semibold">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
}
