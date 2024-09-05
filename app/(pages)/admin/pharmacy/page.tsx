"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

const pharmacySchema = z.object({
  pharmacy_name: z.string().nonempty("Pharmacy name is required"),
  city: z.string().nonempty("City is required"),
  country: z.string().nonempty("Country is required"),
  deliveryTime: z.string().nonempty("Delivery time is required"),
  medicine: z.array(z.string().nonempty()).optional(),
  banner: z.any().optional(),
});

interface PharmacyInput {
  pharmacy_name: string;
  city: string;
  country: string;
  deliveryTime: string;
  medicine: string[];
  banner?: any;
}

const Page = () => {
  const [input, setInput] = useState<PharmacyInput>({
    pharmacy_name: "",
    city: "",
    country: "",
    deliveryTime: "",
    medicine: [],
    banner: undefined,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof PharmacyInput, string>>
  >({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    console.log(files);

    // Handle file input separately
    if (name === "banner" && files) {
      setInput({ ...input, banner: files[0] });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate using Zod schema
    const result = pharmacySchema.safeParse(input);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof PharmacyInput, string>> = {};
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof PharmacyInput;
        fieldErrors[fieldName] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      console.log("Validated data:", result.data);
    }
  };

  const hasPharmacy = true;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#3C72BE] underline">
        {hasPharmacy ? "Update Pharmacy" : "Add a Pharmacy"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 rounded-lg shadow-md shadow-[#3C72BE]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label>Pharmacy Name</Label>
            <Input
              type="text"
              name="pharmacy_name"
              value={input.pharmacy_name}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
              placeholder="Enter pharmacy name"
            />
            {errors.pharmacy_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pharmacy_name}
              </p>
            )}
          </div>

          <div>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              value={input.city}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
              placeholder="Enter city"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
        </div>

        <div>
          <Label>Country</Label>
          <Input
            type="text"
            name="country"
            value={input.country}
            onChange={handleChange}
            className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
            placeholder="Enter country"
          />
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">{errors.country}</p>
          )}
        </div>

        <div>
          <Label>Delivery Time</Label>
          <Input
            type="text"
            name="deliveryTime"
            value={input.deliveryTime}
            onChange={handleChange}
            className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
            placeholder="Estimated delivery time"
          />
          {errors.deliveryTime && (
            <p className="text-red-500 text-sm mt-1">{errors.deliveryTime}</p>
          )}
        </div>

        <div>
          <Label>Types of Medicine</Label>
          <Input
            type="text"
            name="medicine"
            value={input.medicine}
            onChange={(e) =>
              setInput({ ...input, medicine: e.target.value.split(",") })
            }
            className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
            placeholder="e.g. napa, panadol, etc."
          />
        </div>

        <div>
          <Label>Pharmacy Banner</Label>
          <Input
            type="file"
            name="banner"
            accept="image/*"
            onChange={handleChange}
            className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            size={"lg"}
            className="bg-[#3C72BE] hover:bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            {hasPharmacy ? "Update Pharmacy" : "Add Your Pharmacy"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
