"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/constants";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { AlertDialogCancel, AlertDialogFooter } from "./ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const MessageForm = ({ modal }: { modal?: boolean }) => {
  const { toast } = useToast();
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: `Hey, ${values.fastName}`,
      description: "Your message has been sent successfully",
    });
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fastName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-[.7rem] md:space-y-2"
      >
        <div className="flex items-center gap-3">
          <FormField
            control={form.control}
            name="fastName"
            render={({ field }) => (
              <FormItem className="w-full flex-1">
                <FormLabel className="p-0 text-lg text-gray-500">
                  Fast Name
                </FormLabel>
                <FormControl className="lg:p-3">
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full flex-1">
                <FormLabel className="p-0 text-lg text-gray-500">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="p-0 text-lg text-gray-500">Email</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel className="p-0 text-lg text-gray-500">
                Subject
              </FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel className="p-0 text-lg text-gray-500">
                Message
              </FormLabel>
              <FormControl>
                <Textarea className="w-full" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AlertDialogFooter>
          {modal && <AlertDialogCancel>Cancel</AlertDialogCancel>}
          <Button
            className={`${
              modal ?? "w-full mt-5 p-4 lg:p-6 dark:text-secondary-foreground"
            }`}
            type="submit"
          >
            Submit
          </Button>
        </AlertDialogFooter>
      </form>
    </Form>
  );
};

export default MessageForm;
