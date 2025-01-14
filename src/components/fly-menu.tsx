"use client";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navDatas } from "@/constants";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

function FlySheet() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify size={30} className="text-primary" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="text-center">Tauhidul</SheetTitle>
        <div>
          <ul
            className="max-h-[70vh] overflow-auto 
                          lg:[&::-webkit-scrollbar]:w-1
                        lg:[&::-webkit-scrollbar-track]:bg-gray-100
                        lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
                        lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            {navDatas.map((data) => (
              <Link
                key={data.name}
                className={`p-3 block duration-200 text-md font-medium rounded-full ${
                  pathname == data.href && "bg-primary text-primary-foreground"
                }`}
                href={data.href}
              >
                {data.name}
              </Link>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default FlySheet;
