import { Badge } from "@/components/ui/badge";
import { TimerIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <div className="shadow-sm">
            <img
              src="https://img.freepik.com/premium-vector/illustration-online-pharmacy-store-concept-purchasing-medicines-online-mobile-service_277904-4573.jpg?w=826"
              alt="Pharmacy illustration"
              className="w-full h-auto mix-blend-multiply rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-[#3C72BE]">PharmaEase</h1>
          <div className="flex space-x-2">
            <Badge className="bg-[#3C72BE] text-white">Antibiotic</Badge>
            <Badge className="bg-[#3C72BE] text-white">Pain Reliever</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <TimerIcon className="text-[#3C72BE]" />
            <h4 className="text-lg font-medium text-gray-700">Delivery time:</h4>
            <span className="text-lg font-semibold text-gray-900">30-40 min</span>
          </div>
          <div className="text-lg font-semibold text-green-600">Available</div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(3).fill(0).map((_, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-200">
            <CardHeader className="relative">
              <img
                src="https://img.freepik.com/premium-vector/illustration-online-pharmacy-store-concept-purchasing-medicines-online-mobile-service_277904-4573.jpg?w=826"
                alt="product"
                className="w-full h-40 object-cover mix-blend-multiply rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-semibold text-[#3C72BE]">Napa</CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor asperiores numquam nam tempore autem nesciunt minima quidem alias vel sapiente!
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="/cart">
                <Button variant="outline" className="bg-[#3C72BE] text-white">
                  Add to Cart
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
