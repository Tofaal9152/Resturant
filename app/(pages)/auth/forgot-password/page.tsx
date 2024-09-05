"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Loader, Mail } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";

// Validation schema
const resetemailSchema = z.object({
  email: z.string().min(6, "email must be at least 6 characters long"),
});

interface ResetemailInput {
  email: string;
}

const ResetemailPage = () => {
  const [input, setInput] = useState<ResetemailInput>({
    email: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ResetemailInput, string>>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const result = resetemailSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ResetemailInput, string>> = {};
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof ResetemailInput;
        fieldErrors[fieldName] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      console.log("email reset with data:", result.data);
      // Proceed with email reset logic
    }
  };

  const loading = false;

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#000319] absolute z-50 top-0">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg shadow-lg w-96 bg-white"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center text-[#3C72BE]">
         Forget Password
        </h1>

        <div className="mb-6">
          <div className="flex items-center border border-[#3C72BE] rounded-md p-2 bg-slate-50">
            <Mail className="text-[#3C72BE] mr-2" />
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border-none outline-none bg-transparent focus-visible:ring-0"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#3C72BE] text-white py-2 rounded-md  transition-colors shadow-sm"
        >
          {loading ? (
            <>
              <Loader className="mr-2 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            "Reset email"
          )}
        </Button>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            <Link
              href="/auth/login"
              className="text-[#3C72BE] hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetemailPage;
