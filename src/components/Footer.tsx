import { footersocialIcons } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="overflow-hidden px-4 my-1 bg-[url(/bg.svg)] rounded-lg bg-primary container mx-auto">
      <div className="grid sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-center lg:justify-between items-center">
          <p className="text-md text-white">© 2025 - Web Solution</p>
        </div>
        <div className="mx-auto lg:mx-0 flex">
          {footersocialIcons.map((item) => {
            const { Icon, label, url } = item;
            return (
              <div key={label} className="">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={url}
                        target="_blank"
                        className="size-10 inline-flex justify-center items-center text-sm font-semibold duration-300 rounded-full hover:bg-white text-white hover:text-primary focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        {<Icon size={15} strokeWidth={2} />}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
