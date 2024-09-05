"use client";
import { useState } from "react";
import EditMenu from "./EditMenu";
import AddMenu from "./AddMenu";

const page = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const data = [
    {
      img: "https://img.freepik.com/premium-vector/illustration-online-pharmacy-store-concept-purchasing-medicines-online-mobile-service_277904-4573.jpg?w=826",
      title: "Paracetamol",
      description:
        "Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature etamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature Paetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature.",
      price: "10",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl pt-4 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-4">
        <p className="text-md md:text-2xl font-bold text-[#3C72BE] underline">
          Available Medicines:
        </p>
        <AddMenu />
      </div>

      <div className="flex flex-col space-y-3">
        {data.map((item, index) => (
          <div className="p-4 border md:flex items-center justify-between w-full border-gray-200 rounded-lg shadow-md bg-slate-50 ">
            <img
              src={item.img}
              alt={item.title}
              className="w-40 h-40 object-cover rounded-lg mb-4 md:mb-0"
            />
            <div className="flex-1 mx-8">
              <h3 className="text-lg font-semibold text-[#3C72BE] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-2">
                {isExpanded
                  ? item.description
                  : item.description.slice(0, 100) +
                    (item.description.length > 100 ? "..." : "")}
              </p>
              {item.description.length > 100 && (
                <button
                  onClick={toggleReadMore}
                  className="text-sm text-[#3C72BE] underline focus:outline-none"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
              <p className="text-[#3C72BE] text-lg font-bold mt-2">
                <span className="text-2xl font-bold">৳</span>
                {item.price}
              </p>
            </div>
            <EditMenu item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
