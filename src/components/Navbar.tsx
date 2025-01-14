import { Pickaxe } from "lucide-react";
import React from "react";
import { ModeToggle } from "./toggle-theme";
import Link from "next/link";
import FlySheet from "./fly-menu";
import MessageCanvas from "./MessageCanvas";

const Navbar = () => {
  return (
    <header className="container bg-[url(/bg.svg)] mx-auto flex items-center justify-between p-2 lg:px-3 lg:py-2 my-2 border border-gray-300/30 rounded-full">
      <Link
        href={"/"}
        className="flex items-center gap-2 font-extrabold lg:text-xl"
      >
        <Pickaxe className="text-primary" /> WEB SOLUTION
      </Link>
      <div className="flex items-center gap-2 lg:gap-3">
        {/* <Send /> */}
        <MessageCanvas icon />
        <ModeToggle />
        <div className="lg:hidden cursor-pointer">
          <FlySheet />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
