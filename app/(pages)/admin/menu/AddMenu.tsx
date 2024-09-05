"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusSquare } from "lucide-react";

const pharmacySchema = z.object({
  medicine_name: z.string().nonempty("Medicine name is required"),
  description: z.string().nonempty("Description is required"),
  price: z.string().nonempty("Price is required"),
  medicineImage: z.instanceof(File).refine((value) => value instanceof File, {
    message: "Medicine image is required",
    path: ["medicineImage"],
  }),
});

interface PharmacyInput {
  medicine_name: string;
  description: string;
  price: string;
  medicineImage?: File;
}

const AddMedicine = () => {
  const [input, setInput] = useState<PharmacyInput>({
    medicine_name: "",
    description: "",
    price: "",
    medicineImage: undefined,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    // Handle file input separately
    if (name === "medicineImage" && files) {
      setInput({ ...input, medicineImage: files[0] });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const [errors, setErrors] = useState<
    Partial<Record<keyof PharmacyInput, string>>
  >({});
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
      // Handle form submission here
    }
  };

  return (
    <div className="p-4">
      <Dialog>
        <DialogTrigger className="font-medium flex bg-[#3C72BE] hover:bg-black duration-100 shadow-lg text-white rounded-lg px-4 py-2 transition-all text-sm ease-in-out">
          <PlusSquare size={20} className="w-6 h-6 mr-2" />
          Add Medicine
        </DialogTrigger>
        <DialogContent className="bg-slate-50  p-6 max-w-lg w-full mx-auto rounded-lg shadow-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Add A New Medicine
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              Fill in the details below to add a new medicine
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-3 p-2 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label>Medicine Name</Label>
                <Input
                  type="text"
                  name="medicine_name"
                  value={input.medicine_name}
                  onChange={handleChange}
                  className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
                  placeholder="Enter medicine name"
                />
                {errors.medicine_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.medicine_name}
                  </p>
                )}
              </div>

              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                  className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
                  placeholder="Enter description"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label>Price in (Taka)</Label>
              <Input
                type="text"
                name="price"
                value={input.price}
                onChange={handleChange}
                className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
                placeholder="Enter price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price}</p>
              )}
            </div>

            <div>
              <Label>Upload Medicine Image</Label>
              <Input
                type="file"
                name="medicineImage"
                accept="image/*"
                onChange={handleChange}
                className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
              />
              {errors.medicineImage && (
                <p className="text-red-500 text-sm mt-1">Image is required</p>
              )}
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                size={"lg"}
                className="bg-[#3C72BE] hover:bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                Add Medicine
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddMedicine;
