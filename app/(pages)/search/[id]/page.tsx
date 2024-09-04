import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Filter from "../Filter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe2, MapPin, Search, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const page = ({ params }: { params: { id: string } }) => {
  const isLoading = false;
  const data = [1, 2, 3, 4];

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-[2rem] px-4">
      <Filter />
      <div className="flex-1 space-y-7">
        <div className="space-y-3">
          <div className="flex flex-row items-center gap-3">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#9873CF]"
              />
              <Input
                className="w-full pl-10 border-[#9873CF] shadow-sm shadow-[#9873CF] outline-none ring-[#9873CF] ring-0 focus-visible:ring-0"
                placeholder="Search for medicines or health products"
              />
            </div>

            <Button
              variant="outline"
              className="sm:w-auto bg-[#9873CF] text-white"
            >
              Search
            </Button>
          </div>
          <p className="text-md text-[#9873CF] font-semibold">
            (2) Search result found
          </p>
          <div className="flex items-center space-x-2 flex-wrap">
            {[1, 2, 3, 4].map((item, index) => (
              <Badge
                className="bg-[#9873CF] text-white cursor-pointer flex items-center justify-center "
                variant="outline"
                key={index}
              >
                <span>Badge</span>
                <X size={16} />
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          {isLoading ? (
            Array(6)
              .fill(0)
              .map((_, index) => <SkeletonDemo key={index} />)
          ) : data.length === 0 ? (
            <div>
              <NotFound />
            </div>
          ) : (
            data.map((item, index) => (
              <Card className="z-10" key={index}>
                {/* <CardHeader className="relative"> */}
                  <img
                    src="https://img.freepik.com/premium-vector/illustration-online-pharmacy-store-concept-purchasing-medicines-online-mobile-service_277904-4573.jpg?w=826"
                    alt="product"
                    className="w-full rounded-t-xl  h-40 object-cover relative "
                  />
                {/* </CardHeader> */}
                <CardContent>
                  <CardTitle className="mt-4">Product Name</CardTitle>
                  <CardDescription className="mt-2 flex items-center">
                    <MapPin className="mr-2" />
                    <strong>City:</strong>
                    <span>Dhaka</span>
                  </CardDescription>
                  <CardDescription className="mt-2 flex items-center">
                    <Globe2 className="mr-2" />
                    <strong>Country:</strong>
                    <span>Bangladesh</span>
                  </CardDescription>

                  <div className="mt-2 flex items-center  space-x-2">
                    {[1, 2, 3].map((item, index) => (
                      <Badge
                        className="bg-[#9873CF] text-white cursor-pointer flex items-center justify-center "
                        variant="outline"
                        key={index}
                      >
                        Badge
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link href="/search/restaurant/1">
                    <Button
                      variant="outline"
                      className="bg-[#9873CF] text-white"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default page;

const SkeletonDemo = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-full h-40" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/2 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Skeleton className="h-8 w-24" />
      </CardFooter>
    </Card>
  );
};

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-xl font-semibold text-[#9873CF]">
          No Results Found...
        </h1>
      </div>
    </div>
  );
};
