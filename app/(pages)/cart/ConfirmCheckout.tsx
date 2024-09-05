"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ConfirmCheckout = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="p-4">
      <Dialog>
        <DialogTrigger className="font-medium bg-[#3C72BE] hover:bg-black duration-100 shadow-lg text-white rounded-lg px-4 py-2 transition-all ease-in-out">
          Proceed to Checkout
        </DialogTrigger>
        <DialogContent className="bg-slate-50  p-6 max-w-lg w-full mx-auto rounded-lg shadow-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Review Your Order
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio perferendis nemo sapiente.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label>Full Name</Label>
                <Input
                  type="text"
                  name="fullname"
                  value={input.fullname}
                  onChange={handleChange}
                  className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label>Contact</Label>
                <Input
                  type="text"
                  name="contact"
                  value={input.contact}
                  onChange={handleChange}
                  className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your contact"
                />
              </div>
              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  value={input.city}
                  onChange={handleChange}
                  className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your city"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label>Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={input.address}
                  onChange={handleChange}
                  className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your address"
                />
              </div>
              <div>
                <Label>Country</Label>
                <Input
                  type="text"
                  name="country"
                  value={input.country}
                  onChange={handleChange}
                  className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your country"
                />
              </div>
            </div>
            <DialogClose asChild>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  size={"sm"}
                  className="bg-[#3C72BE] hover:bg-indigo-700 text-white py-2 px-4 rounded-md shadow-md transition-all duration-200"
                >
                  Continue to Payment
                </Button>
              </div>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfirmCheckout;
