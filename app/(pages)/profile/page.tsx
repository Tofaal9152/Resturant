"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ClipboardTypeIcon,
  LucideArrowUpAz,
  Mail,
  MapPin,
  Plus,
} from "lucide-react";
import { useRef, useState } from "react";

const Page = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });

  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

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
  };

  const imageRef = useRef<HTMLInputElement>(null);

  const fileChangeHandler = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-black bg-slate-50  h-[88.5vh] flex flex-col p-4">
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center justify-center  space-x-4">
          <div className="relative cursor-pointer group">
            <Avatar className="w-20 h-20 bg-gray-200 ring-2 ring-[#3C72BE]">
              {selectedImage ? (
                <AvatarImage src={selectedImage as string} alt="Profile" />
              ) : (
                <AvatarFallback className="text-xl text-white">
                  CN
                </AvatarFallback>
              )}
            </Avatar>
            <input
              ref={imageRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={fileChangeHandler}
            />
            <div
              className="absolute inset-0 flex items-center justify-center rounded-full transition-opacity duration-300 hover:bg-black bg-transparent opacity-0 group-hover:opacity-40"
              onClick={() => imageRef.current?.click()}
            >
              <Plus size={25} className="text-white" />
            </div>
          </div>
          <div>
            <input
              name="name"
              onChange={handleChange}
              value={input.name}
              type="text"
              className="flex-grow text-xl font-bold bg-transparent outline-none py-2 px-4 rounded-md focus:outline-none "
              id="name"
            />
          </div>
        </div>
      </div>

      <form
        onSubmit={submitHandler}
        className="w-full max-w-md space-y-6 mx-auto "
      >
        <div className="flex items-center space-x-4">
          <Mail className="text-[#3C72BE]" />
          <label
            htmlFor="email"
            className="w-24 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            value={input.email}
            type="email"
            className="flex-grow outline-none py-2 px-4 rounded-md focus:outline-none "
            id="email"
          />
        </div>

        <div className="flex items-center space-x-4">
          <MapPin className="text-[#3C72BE]" />
          <label
            htmlFor="address"
            className="w-24 text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            name="address"
            onChange={handleChange}
            value={input.address}
            type="text"
            className="flex-grow outline-none py-2 px-4 rounded-md focus:outline-none "
            id="address"
          />
        </div>

        <div className="flex items-center space-x-4">
          <ClipboardTypeIcon className="text-[#3C72BE]" />
          <label
            htmlFor="city"
            className="w-24 text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            name="city"
            onChange={handleChange}
            value={input.city}
            type="text"
            className="flex-grow outline-none py-2 px-4 rounded-md focus:outline-none "
            id="city"
          />
        </div>

        <div className="flex items-center space-x-4">
          <LucideArrowUpAz className="text-[#3C72BE]" />
          <label
            htmlFor="country"
            className="w-24 text-sm font-medium text-gray-700"
          >
            Country
          </label>
          
          <input
            name="country"
            onChange={handleChange}
            value={input.country}
            type="text"
            className="flex-grow outline-none py-2 px-4 rounded-md focus:outline-none "
            id="country"
          />
        </div>

        <Button type="submit" variant="outline" className="w-full bg-[#3C72BE] text-white">
          Update
        </Button>
      </form>
    </div>
  );
};

export default Page;
