"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Filter = () => {
  const filterData = [
    { id: "Antibiotics", name: "Antibiotics" },
    { id: "Pain Relievers", name: "Pain Relievers" },
    { id: "Vitamins", name: "Vitamins" },
    { id: "Supplements", name: "Supplements" },
  ];

  const submitHandler = (e: any) => {
    // alert(e);
  };

  return (
    <div className="w-full md:w-1/6 px-2 ">
      <div className="text-[#3C72BE] text-md font-semibold flex items-center justify-between">
        <div>Filter By Category:</div>
        <Button
          variant="outline"
          className="w-auto flex md:hidden "
        >
          Reset
        </Button>
      </div>
      <div className="mt-[1rem] mb-[1rem] space-y-2">
        {filterData.map((data) => (
          <div
            key={data.id}
            className="flex items-center space-x-2 text-[#3C72BE] font-medium"
          >
            <Checkbox
              onClick={() => submitHandler(data.id)}
              id={`filter-${data.id}`}
            />
            <label htmlFor={`filter-${data.id}`}>{data.name}</label>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        className="w-auto hidden md:flex text-[#3C72BE] text-md font-semibold"
      >
        Reset
      </Button>
    </div>
  );
};

export default Filter;
