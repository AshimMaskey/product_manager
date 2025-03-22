"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";

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
import { useProductStore } from "@/store/productStore";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z.coerce.number().positive({
    message: "Price must be positive number.",
  }),
  image: z.string().url({
    message: "Enter the valid image url.",
  }),
});

export default function ProductForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      image: "",
    },
  });

  const { createProduct, isAdding } = useProductStore();
  function onSubmit(values: z.infer<typeof formSchema>) {
    createProduct(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input placeholder="Enter the product name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price:</FormLabel>
              <FormControl>
                <Input placeholder="Enter the product's price..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the product's image url..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!isAdding ? (
          <Button type="submit">Add Product</Button>
        ) : (
          <Button disabled>
            <Loader2 className="animate-spin" />
            Please wait
          </Button>
        )}
      </form>
    </Form>
  );
}
