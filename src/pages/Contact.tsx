import SectionWrapper from "@/components/layout/SectionWrapper";
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
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

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
    <SectionWrapper>
      <section className="py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1544141687-4a0477ba4ccc?q=80&w=870&auto=format&fit=crop"
              alt="contact"
            />

            {/* CONTACT DETAILS */}
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-3">
                <Mail className="text-[#DE802B]" />
                <span className="text-gray-700 font-medium">
                  isratbiswas28@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#DE802B]" />
                <span className="text-gray-700 font-medium">
                  +880 1774610081
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#DE802B]" />
                <span className="text-gray-700 font-medium">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="lg:shadow-md rounded-md p-6">
            <div>
              <h2 className="text-3xl font-bold text-center text-[#DE802B] mb-3">
                Contact Us
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Have questions? Get in touch with us.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-500 font-semibold">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-500 font-semibold  mt-6">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          type="email"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-500 font-semibold mt-6">
                        What can we help you?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your problem in at least 250 characters"
                          rows={4}
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-6 py-3 w-full  mt-4 rounded-xl shadow-lg hover:from-orange-500 hover:to-orange-700 hover:scale-105 transition-transform duration-300"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Contact;
