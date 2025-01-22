"use client";
import { navDatas } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideMenu = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:block border bg-[url(/bg.svg)] border-gray-300/30 rounded-xl">
      <div>
        <div className="p-2">
          <h1 className="text-2xl font-semibold sticky top-0">
            Angelique Redwood
          </h1>
        </div>
        <ul
          className="w-64 max-h-[70vh] overflow-auto 
   lg:[&::-webkit-scrollbar]:w-1
  lg:[&::-webkit-scrollbar-track]:bg-gray-100
  lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
  lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {navDatas.map((data) => (
            <Link
              key={data.name}
              className={`p-3 duration-200 block text-md hover:bg-primary/50 font-medium rounded-full ${
                pathname == data.href &&
                "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
              href={data.href}
            >
              {data.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
