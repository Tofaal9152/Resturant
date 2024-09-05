"use client";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    search: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(input);
    router.push(`/search/${input.search}`);
  };

  return (
    <div className="bg-slate-50  px-[10%] h-[88.5vh] flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left space-y-4 max-w-md">
          <h1 className="text-5xl font-bold text-[#3C72BE]">
            Your Trusted Online Pharmacy
          </h1>
          <p className="text-gray-700">
            Experience the convenience of buying your essential medications and
            health products online with just a few clicks.
          </p>

          <form onSubmit={submitHandler} className="flex items-center">
            <div className="flex items-center border border-[#3C72BE] rounded-md overflow-hidden px-2 shadow-md shadow-[#3C72BE]">
              <Search size={25} className="text-[#3C72BE]" />
              <Input
                value={input.search}
                onChange={handleChange}
                className="outline-none border-none focus-visible:ring-0 "
                type="text"
                name="search"
                placeholder="Search for products"
              />
            </div>
            <Button
              type="submit"
              variant="outline"
              className="ml-3 bg-[#3C72BE] text-white"
            >
              Search
            </Button>
          </form>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="https://img.freepik.com/premium-vector/illustration-online-pharmacy-store-concept-purchasing-medicines-online-mobile-service_277904-4573.jpg?w=826"
            alt="Pharmacy illustration"
            className="w-full max-w-md mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
