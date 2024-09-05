import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import ConfirmCheckout from "./ConfirmCheckout";


const page = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="text-right ">
        <Button className="font-bold text-[#3C72BE] underline" variant={"link"}>
          Clear All
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Tittle</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <TableBody>
              <TableRow>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>Napa Extra</TableCell>
                <TableCell>80</TableCell>
                <TableCell>
                  <span className=" flex items-center ">
                    <Button
                      variant={"outline"}
                      className="rounded-full bg-red-500 text-white"
                      size={"icon"}
                    >
                      <Minus />
                    </Button>
                    <Button
                      variant={"outline"}
                      className="border-none outline-none shadow-none font-bold bg-transparent"
                      size={"icon"}
                    >
                      1
                    </Button>
                    <Button
                      variant={"outline"}
                      className="rounded-full bg-green-500 text-white"
                      size={"icon"}
                    >
                      <Plus />
                    </Button>
                  </span>
                </TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell className="text-right ">
                  <Button
                    variant={"link"}
                    size={"icon"}
                    className="text-[#3C72BE] font-bold"
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} className="font-bold text-[#3C72BE] text-2xl">
              Total:
            </TableCell>
            <TableCell className="text-right font-bold text-[#3C72BE] text-lg">800</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="text-right mt-4 ">
       <ConfirmCheckout/>
      </div>

    </div>
  );
};

export default page;
