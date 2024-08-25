"use client";

import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import axios from "@/lib/axios";
import { useState } from "react";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email({ message: "Invalid email address" }),
});

export default function Newsletter() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubscribe = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      axios.post("/newsletter", { email: values.email }).then((res) => {
        toast.success("Newsletter Subscription successful");
        form.reset();
        setLoading(false);
      });
    } catch (error) {
      toast.error("Failed to subscribe");
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-w-[280px] h-fit max-w-sm bg-primary-60 rounded-md px-4 py-6 border border-white/20 shadow-md">
      <h1 className="font-medium text-2xl">Our Newsletter</h1>
      <p className="text-sm my-2">
        Subscribe to our newsletter and receive the latest news about our
        services!
      </p>
      <Form {...form}>
        <form className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-1 bg-white border border-custom-black/40 rounded-md p-1 mt-3">
                  <FormControl>
                    <input
                      {...field}
                      type="email"
                      placeholder="Enter Email Address"
                      className="w-full text-sm text-custom-black pl-2 placeholder:text-secondary-grey-7F outline-none focus-visible:outline-none"
                    />
                  </FormControl>
                  <button
                    onClick={form.handleSubmit(handleSubscribe)}
                    disabled={loading}
                    className="px-2 py-3 bg-custom-black/80 hover:bg-custom-black/90 text-white font-semibold text-xs rounded-md duration-300"
                  >
                    {loading ? "Subscribing.." : "SUBSCRIBE"}
                  </button>
                </div>
                <FormMessage className="text-custom-red/50 text-xs" />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
