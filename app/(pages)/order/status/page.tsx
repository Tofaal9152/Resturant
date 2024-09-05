import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  const order = [1, 2, 3];
  return (
    <>
      {order.length > 0 ? (
        <div className="max-w-7xl mx-auto min-h-[84vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="shadow-lg p-6 bg-white rounded-lg w-full max-w-2xl">
            <div className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
              Order Status: <span className="text-green-600">Confirm</span>
            </div>
            <div className="text-lg sm:text-xl mb-4 text-gray-700 text-center sm:text-left">
              Order Summary: <span className="font-semibold">Napa Extra</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-3">
              <img
                src="https://img.freepik.com/premium-vector/illustration-online-pharmacy-store-concept-purchasing-medicines-online-mobile-service_277904-4573.jpg?w=826"
                alt="Order Image"
                className="w-full sm:w-1/3 rounded-lg"
              />
              <p className="text-xl sm:text-2xl text-green-600 font-semibold ">
                60 Tk
              </p>
            </div>
          <Link className="flex items-center justify-center " href="/cart"><Button className="bg-[#3C72BE]">Go back to Cart</Button> </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto text-[#3C72BE] min-h-[84vh] flex items-center justify-center font-bold text-3xl px-4 sm:px-6 lg:px-8 text-center">
          Order not found...
        </div>
      )}
    </>
  );
};

export default page;
