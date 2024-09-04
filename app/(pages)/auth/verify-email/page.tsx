"use client";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const VerifyEmail = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Implement your OTP verification logic here
    console.log("Submitted OTP:", value);
  };
  const loading = false;
  const isButtonDisable = value.length !== 6;

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#000319]">
      <div className="bg-white items-center justify-center flex flex-col mx-auto p-6 rounded-lg shadow-lg w-80">
        <p className="text-xs mb-3 text-center font-semibold text-[#9873cf]">
          Enter the 6-digit code sent to your email
        </p>
        <form onSubmit={handleSubmit}>
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup>
              {[...Array(6)].map((_, i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="border-[#9873cf] font-semibold focus:border-[#7e3ff2] focus:ring-[#9873cf] rounded-md text-center"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <Button
            type="submit"
            disabled={isButtonDisable}
            className="w-full bg-[#9873cf] text-white py-2 mt-3 rounded-md hover:bg-[#af94f3] transition-colors shadow-sm"
          >
            {loading ? (
              <>
                <Loader className="mr-2 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              "Verify your email"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
