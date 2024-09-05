"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarContent,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  ListOrdered,
  Loader,
  Menu,
  Moon,
  PackageCheck,
  ShoppingCart,
  SquareMenu,
  Sun,
  User2,
  UtensilsCrossed,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { setTheme } = useTheme();
  const admin = true;
  const loading = false;

  return (
    <div className="bg-slate-50  px-[5%] py-4 sticky w-full top-0 z-40">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-[#3C72BE]">
          <Link href="/">ToLizza</Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-gray-700 hover:text-[#3C72BE]">
            Home
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-[#3C72BE]">
            Profile
          </Link>
          <Link
            href="/order/status"
            className="text-gray-700 hover:text-[#3C72BE]"
          >
            Order
          </Link>
          {admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="outline-none border-none bg-[#3C72BE] text-[#fff]">
                  Dashboard
                </MenubarTrigger>
                <MenubarContent>
                  <Link href="/admin/pharmacy">
                    <MenubarItem className="cursor-pointer hover:bg-[#3C72BE] hover:text-white">
                      Pharmacy
                    </MenubarItem>
                  </Link>
                  <Link href="/admin/menu">
                    <MenubarItem className="cursor-pointer hover:bg-[#3C72BE] hover:text-white">
                      Menu
                    </MenubarItem>
                  </Link>
                  <Link href="/admin/order">
                    <MenubarItem className="cursor-pointer hover:bg-[#3C72BE] hover:text-white">
                    Pharmacy Orders
                    </MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
        <div className="md:flex hidden  items-center space-x-4">
          <Link href="/cart" className="relative flex items-center">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-[#3C72BE]" />
            <Button
              size={"icon"}
              className="absolute -top-3 right-[2px] text-xs rounded-full bg-[#3C72BE] text-white h-4 w-4 flex items-center justify-center"
            >
              1
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button className="bg-[#3C72BE] w-full text-white py-2 px-4 rounded-md hover:bg-[#af94f3] transition-colors">
                  Log out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <MobileNAvigation />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNAvigation = () => {
  const { setTheme } = useTheme();
  const admin = true;
  const loading = false;

  return (
    <div className="md:hidden flex items-center space-x-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <Menu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 p-4 flex flex-col">
          <SheetHeader>
            <SheetTitle className="text-xl font-semibold flex items-center justify-between mt-8 mb-2">
              <div className="text-2xl font-bold text-[#3C72BE]">
                <Link href="/">ToLizza</Link>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SheetTitle>
          </SheetHeader>
          <Separator />
          <SheetDescription className="flex-1 space-y-4">
            <Link href="/profile" className="flex items-center space-x-3">
              <User2 />
              <span>Profile</span>
            </Link>
            <Link href="/order/status" className="flex items-center space-x-3">
              <ListOrdered />
              <span>Order</span>
            </Link>
            <Link href="/cart" className="flex items-center space-x-3">
              <ShoppingCart />
              <span>Cart(0)</span>
            </Link>
            {admin && (
              <>
                <Link
                  href="/admin/menu"
                  className="flex items-center space-x-3"
                >
                  <SquareMenu />
                  <span>Menu</span>
                </Link>
                <Link
                  href="/admin/pharmacy"
                  className="flex items-center space-x-3"
                >
                  <UtensilsCrossed />
                  <span>Pharmacy</span>
                </Link>
                <Link
                  href="/admin/order"
                  className="flex items-center space-x-3"
                >
                  <PackageCheck />
                  <span>Pharmacy Orders</span>
                </Link>
              </>
            )}
          </SheetDescription>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row space-x-3 items-center ">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xl font-semibold text-[#3C72BE]">
                Md Tofaal Ahmed
              </span>
            </div>
            <div>
              <SheetClose asChild>
                <Button className="bg-[#3C72BE] w-full  hover:bg-[#af94f3] transition-colors">
                  Log out
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
