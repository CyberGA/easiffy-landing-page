"use client";

import React, { useState } from "react";
import { TbAlertCircle } from "react-icons/tb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required")
    .trim(),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email({ message: "Invalid email address" }),
  subject: z
    .string({ required_error: "Subject is required" })
    .min(1, "Subject is required")
    .trim(),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, "Message is required")
    .trim(),
});

export default function MessageForm(): React.JSX.Element {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setLoading(true);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white/60 backdrop-blur-md h-full space-y-5 max-w-lg sm:max-w-lg w-full  min-w-sm pb-10 sm:w-full px-6 rounded-lg ml-auto fade-in-30 text-secondary-gray-40"
      >
        <div>
          <h2 className="text-3xl text-secondary-gray-40 mt-20">
            SEND US A MESSAGE
          </h2>
        </div>
        {!!error && (
          <div className="relative w-full rounded-lg border px-4 py-3 text-sm border-destructive/50 text-destructive flex items-center gap-2">
            <TbAlertCircle className="size-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Your Name:
              </FormLabel>
              <FormControl>
                <input
                  placeholder="John Doe"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                />
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
              <FormLabel>
                Your Email:
              </FormLabel>
              <FormControl>
                <input
                  placeholder="email@example.com"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Subject:
              </FormLabel>
              <FormControl>
                <input
                  placeholder="Subject"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
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
              <FormLabel>
                Your Message:
              </FormLabel>
              <FormControl>
                <textarea
                  placeholder="Enter Your Message"
                  {...field}
                  className="w-full h-32 py-2 resize-none rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-2 mt-4 mb-10">
          <button
            type="submit"
            className="w-full px-4 py-3 text-white text-base bg-primary-60 rounded-md hover:bg-primary-orange61 duration-300"
          >
            {loading ? "Loading..." : "Send Message"}
          </button>
        </div>
      </form>
    </Form>
  );
}
