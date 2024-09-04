"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Eye, Loader, PhoneCall, User2 } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";

const signUpSchema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  contact: z.string().regex(/^\d+$/, "Contact must be a number"),
});

interface SignUpInput {
  fullname: string;
  email: string;
  password: string;
  contact: string;
}

const SignUp = () => {
  const [errors, setErrors] = useState<Partial<Record<keyof SignUpInput, string>>>({});
  const [input, setInput] = useState<SignUpInput>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });


  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const result = signUpSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SignUpInput, string>> = {};
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof SignUpInput;
        fieldErrors[fieldName] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      console.log("Validated data:", result.data);
      // Proceed with form submission logic
    }
  };

  const loading = false;

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#000319]">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg shadow-lg w-96 bg-white"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center text-[#9873cf]">
          Sign Up
        </h1>

        <div className="mb-4">
          <div className="flex items-center border border-[#CBACF9] rounded-md p-2 bg-gray-100">
            <User2 className="text-[#CBACF9] mr-2" />
            <Input
              type="text"
              placeholder="Fullname"
              onChange={onChangeHandler}
              name="fullname"
              value={input.fullname}
              className="w-full border-none outline-none bg-transparent focus-visible:ring-0"
            />
          </div>
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-center border border-[#CBACF9] rounded-md p-2 bg-gray-100">
            <Mail className="text-[#CBACF9] mr-2" />
            <Input
              type="email"
              placeholder="Email"
              value={input.email}
              name="email"
              onChange={onChangeHandler}
              className="w-full border-none outline-none bg-transparent focus-visible:ring-0"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-center border border-[#CBACF9] rounded-md p-2 bg-gray-100">
            <Eye className="text-[#CBACF9] mr-2" />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={onChangeHandler}
              className="w-full border-none outline-none bg-transparent focus-visible:ring-0"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-center border border-[#CBACF9] rounded-md p-2 bg-gray-100">
            <PhoneCall className="text-[#CBACF9] mr-2" />
            <Input
              type="text"
              placeholder="Contact"
              name="contact"
              value={input.contact}
              onChange={onChangeHandler}
              className="w-full border-none outline-none bg-transparent focus-visible:ring-0"
            />
          </div>
          {errors.contact && (
            <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#9873cf] text-white py-2 rounded-md hover:bg-[#af94f3] transition-colors shadow-sm"
        >
          {loading ? (
            <>
              <Loader className="mr-2 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            "Sign Up"
          )}
        </Button>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?
            <Link
              href="/auth/login"
              className="text-[#9873cf] hover:underline ml-1"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
