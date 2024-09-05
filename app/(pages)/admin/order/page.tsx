import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  const page = () => {
    return (
      <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#3C72BE] mb-6 text-center">
          Orders Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <PeopleWhoOrdered key={item} />
          ))}
        </div>
      </div>
    );
  };
  
  export default page;
  
  const PeopleWhoOrdered = () => {
    const Data = ["Pending", "Confirmed", "Preparing", "OutForDelivery"];
    return (
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold text-[#3C72BE] mb-2">
          Md Tofaal Ahmed
        </h3>
        <div className="text-sm md:text-md text-gray-700 space-y-2">
          <p>
            <strong className="text-gray-900">Address: </strong>
            Adi Tangail, Tangail
          </p>
          <p>
            <strong className="text-gray-900">Total Amount: </strong>
            160 Tk
          </p>
          <div>
            <Select>
              <SelectTrigger className="w-full md:w-[180px] border border-gray-300 rounded-lg shadow-sm">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-lg">
                <SelectGroup>
                  <SelectLabel className="text-gray-600">Status</SelectLabel>
                  {Data.map((item) => (
                    <SelectItem
                      key={item}
                      value={item.toLowerCase()}
                      className="text-gray-700"
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    );
  };
  