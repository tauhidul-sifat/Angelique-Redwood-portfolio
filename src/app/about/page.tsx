import SectionHeading from "@/components/animation/SectionHeading";
import MessageCanvas from "@/components/MessageCanvas";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { profileDetails, workDetails } from "@/constants";

const page = () => {
  return (
    <div
      className="min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] bg-[url(/bg.svg)]  overflow-y-auto lg:py-10 w-full relative rounded-md border border-gray-300/30 lg:[&::-webkit-scrollbar]:w-1
  lg:[&::-webkit-scrollbar-track]:bg-gray-100
  lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
  lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <div className="flex flex-col lg:flex-row justify-center py-5 lg:justify-between items-center lg:px-10">
        <div className="flex flex-col md:flex-row  items-center gap-6">
          <Image
            src="/smile.jpeg"
            alt="smile"
            width={200}
            height={200}
            style={{
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
          <div className="flex flex-col text-center lg:text-start">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h2 className="text-3xl flex items-center gap-1 font-semibold">
                    Angelique Redwood <BadgeCheck color="green" />
                  </h2>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Angelique Redwood</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h3 className="py-1 ">
                    Freelance Writer | Passionate Reader
                  </h3>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Freelance Writer | Passionate Reader</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h5 className="py-0 text-gray-400">
                    State College, Pennsylvania, United States
                  </h5>
                </TooltipTrigger>
                <TooltipContent>
                  <p>State College, Pennsylvania, United States</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="hidden lg:block">
          <MessageCanvas />
        </div>
      </div>
      <hr />
      <div className="py-3">
        <SectionHeading className="text-center text-4xl font-medium py-4 text-muted-foreground">
          {profileDetails.about.title || "About"}
        </SectionHeading>
        <div className="space-y-3 px-6 font-medium text-gray-500 text-center">
          {profileDetails.about.peras.map((pera) => {
            return <p key={pera}>{pera}</p>;
          })}
        </div>
      </div>
      <hr />
      <SectionHeading className="text-center text-2xl font-medium py-4 text-muted-foreground">
        I work efficiently
      </SectionHeading>
      {
        <Tabs
          defaultValue={workDetails.defaultValue}
          className="place-content-center px-10 hidden lg:grid"
        >
          <TabsList className="border border-primary">
            {workDetails.tabs.map((tab) => {
              return (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {workDetails.tabs.map((tab) => {
            return (
              <TabsContent key={tab.value} value={tab.value}>
                <div>
                  <SectionHeading className="text-center text-2xl font-medium py-4 text-muted-foreground">
                    {tab.label}
                  </SectionHeading>
                  <Tabs
                    defaultValue={tab.content.default}
                    className="grid place-content-center"
                  >
                    <TabsList>
                      {tab.content.details.map((item) => {
                        return (
                          <TabsTrigger value={item.value} key={item.value}>
                            {item.label}
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>
                    <div className="p-5 text-center lg:text-start">
                      {tab.content.details.map((item) => {
                        return (
                          <TabsContent key={item.value} value={item.value}>
                            {item.content}
                          </TabsContent>
                        );
                      })}
                    </div>
                  </Tabs>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      }
    </div>
  );
};

export default page;
