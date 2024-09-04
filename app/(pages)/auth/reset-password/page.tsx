"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Loader } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";

// Validation schema
const resetPasswordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

interface ResetPasswordInput {
  password: string;
}

const ResetPasswordPage = () => {
  const [input, setInput] = useState<ResetPasswordInput>({
    password: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ResetPasswordInput, string>>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const result = resetPasswordSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ResetPasswordInput, string>> = {};
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof ResetPasswordInput;
        fieldErrors[fieldName] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      console.log("Password reset with data:", result.data);
      // Proceed with password reset logic
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
          Reset Your Password
        </h1>

        <div className="mb-6">
          <div className="flex items-center border border-[#CBACF9] rounded-md p-2 bg-gray-100">
            <Eye className="text-[#CBACF9] mr-2" />
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="New Password"
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
            "Reset Password"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
