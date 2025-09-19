import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form Data:", data);
    toast.success("Message sent successfully!");
    form.reset();
  };
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1544141687-4a0477ba4ccc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="shadow-md rounded-md">
          <div>
            <h2 className="text-3xl font-bold text-center mb-3">Contact Us</h2>
            <p className="text-center text-gray-600 mb-6">
              Have questions? Get in touch with us.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={(field) => (
                  <FormItem>
                    <FormLabel className="ml-10">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        className="flex-1 w-96 ml-10"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={(field) => (
                  <FormItem>
                    <FormLabel className="ml-10">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        className="flex-1 w-98 ml-10"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={(field) => (
                  <FormItem>
                    <FormLabel className="ml-10">
                      What can we help you?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your problem in at least 250 characters"
                        rows={4}
                        className="ml-10 w-96"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mb-4 w-96 mr-10 bg-green-700 hover:bg-green-900"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
