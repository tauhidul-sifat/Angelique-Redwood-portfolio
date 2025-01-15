import MessageForm from "@/components/MessageForm";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { contactDetails, WorkMarketPlace } from "@/constants";
import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section
      className="min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] rounded-md  bg-gradient-to-r from-fuchsia-600/20 to-blue-600/20 overflow-auto
     lg:[&::-webkit-scrollbar]:w-1
  lg:[&::-webkit-scrollbar-track]:bg-gray-100
  lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
  lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
    "
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight py-3 sm:text-4xl lg:text-5xl">
            Contact us
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed py-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="max-w-6xl  mx-auto mt-6 overflow-hidden bg-primary-foreground mb-3 rounded-md shadow-md lg:mt-10">
          <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-10">
                <h3 className="text-2xl font-semibold mb-4">
                  Send us a message
                </h3>
                <MessageForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="h-full p-6 sm:p-10">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-2xl font-semibold ">Contact info</h4>

                    <div className="mt-8 space-y-7">
                      {contactDetails.address.map((item) => {
                        const { Icon, id, label } = item;
                        return (
                          <div key={id} className="flex items-start">
                            <Icon className="text-primary hover:text-destructive duration-300" />
                            <span className="block ml-3 text-base ">
                              {label}
                            </span>
                          </div>
                        );
                      })}
                      <div className="flex items-start">
                        <Phone className="text-primary hover:text-destructive duration-300" />
                        <div className="ml-3">
                          <span className="block text-base ">
                            {" "}
                            (316) 555-0116{" "}
                          </span>
                          <span className="block mt-1 text-base ">
                            {" "}
                            (316) 555-0116{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-auto">
                    <hr className="border-gray-200" />
                    <div className="flex items-center justify-between mt-7">
                      <p className="text-lg font-semibold ">
                        {contactDetails.socialMedias.label}
                      </p>

                      <ul className="flex items-center justify-end space-x-3">
                        {contactDetails.socialMedias.icons.map((icon) => {
                          const { Icon, label, url } = icon;
                          return (
                            <li key={label}>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Link
                                      href={url}
                                      target="_blank"
                                      className="flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-blue-600 hover py-3  hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600 group cursor-pointer"
                                    >
                                      {
                                        <Icon
                                          size={15}
                                          strokeWidth={2}
                                          className="text-secondary-foreground group-hover:text-primary-foreground dark:group-hover:text-secondary-foreground"
                                        />
                                      }
                                    </Link>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{label}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 bg-primary-foreground lg:mt-10 border-t border-gray-300/30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl py-3 lg:py-8 text-center font-bold leading-tight  sm:text-4xl lg:text-5xl">
            Work via market place
          </h2>
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            {WorkMarketPlace.map((item) => {
              const { Icon, label, description, url } = item;
              return (
                <Link
                  href={url}
                  target="_blank"
                  key={label}
                  className="border border-gray-300/30 p-4 rounded-md bg-primary-foreground duration-300  hover:scale-105 hover:shadow-2xl lg:hover:translate-x-3"
                >
                  <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                    {<Icon className="text-blue-600 w-9 h-9" />}
                  </div>
                  <h3 className="mt-8 text-lg font-semibold ">{label}</h3>
                  <p className="mt-4 text-sm">{description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
