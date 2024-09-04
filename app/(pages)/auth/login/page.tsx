"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Eye, Loader } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

interface LoginInput {
  email: string;
  password: string;
}

const Login = () => {

  const [errors, setErrors] = useState<Partial<Record<keyof LoginInput, string>>>({});

  const [input, setInput] = useState<LoginInput>({
    email: "",
    password: "",
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse(input);

    if (!result.success) {

      const fieldErrors: Partial<Record<keyof LoginInput, string>> = {};

      result.error.errors.forEach((err) => {

        const fieldName = err.path[0] as keyof LoginInput;
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
          Login
        </h1>

        <div className="mb-4">
          <div className="flex items-center border border-[#CBACF9] rounded-md p-2 bg-gray-100">
            <Mail className="text-[#CBACF9] mr-2" />
            <Input
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-none outline-none bg-transparent focus-visible:ring-0"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <div className="flex items-center border border-[#CBACF9] rounded-md p-2 bg-gray-100">
            <Eye className="text-[#CBACF9] mr-2" />
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border-none outline-none bg-transparent focus-visible:ring-0"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
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
            "Login"
          )}
        </Button>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            <Link
              href="/auth/forgot-password"
              className="text-[#9873cf] hover:underline"
            >
              Forgot Password?
            </Link>
          </p>
        </div>

        <div className="mt-2 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?
            <Link
              href="/auth/sign-up"
              className="text-[#9873cf] hover:underline ml-1"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
