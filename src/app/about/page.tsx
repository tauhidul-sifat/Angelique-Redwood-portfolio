import SectionHeading from "@/components/animation/SectionHeading";
import MessageCanvas from "@/components/MessageCanvas";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

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
          About
        </SectionHeading>
        <div className="space-y-3 px-6 font-medium text-gray-500 text-center">
          <p>
            I'm a dedicated, detail-oriented worker who is eager to expand my
            horizons. I have extensive experience working in writing, editing,
            transcription, and administration. My ideal job would be one that
            allows me to put my literary skills to good use while allowing for
            personal growth and development.
          </p>
          <p>
            I've grown my copywriting strengths in creative fiction and fantasy,
            research-based opinion pieces, spiritual blog articles, and
            administrative content, while my interests foster my love of
            incredible storytelling, whether it be through movies, music, or all
            things literature.
          </p>
          <hr />
          <p>
            As a voracious reader, it’s only natural that writing is my second
            indulgence. So why not combine both? Here I sit, a literature geek,
            constantly trying to learn from my past in the present, with my love
            of fiction, sci-fi, and fantasy always reminding me most of my
            reality. So now, I’m choosing to write all the thoughts out. Welcome
            to Redwood’s Third-Eye Review.
          </p>
        </div>
      </div>
      <hr />
      <SectionHeading className="text-center text-2xl font-medium py-4 text-muted-foreground">
        I work efficiently
      </SectionHeading>
      <Tabs
        defaultValue="top-skills"
        className=" place-content-center px-10 hidden lg:grid"
      >
        <TabsList className="border border-primary">
          <TabsTrigger value="top-skills">Top Skills</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>
        <TabsContent value="top-skills">
          <div>
            <SectionHeading className="text-center text-2xl font-medium py-4 text-muted-foreground">
              Top Skills
            </SectionHeading>
            <Tabs
              defaultValue="Creative-Writing"
              className="grid place-content-center"
            >
              <TabsList className="border border-primary">
                <TabsTrigger value="Creative-Writing">
                  Creative Writing
                </TabsTrigger>
                <TabsTrigger value="Proofreading">Proofreading</TabsTrigger>
                <TabsTrigger value="Copywriting">Copywriting</TabsTrigger>
                <TabsTrigger value="Transcription">Transcription</TabsTrigger>
              </TabsList>
              <div className="p-5 text-center lg:text-start">
                <TabsContent value="Creative-Writing">
                  Add your content here
                </TabsContent>
                <TabsContent value="Proofreading">
                  Add your Creative-Writing content here
                </TabsContent>
                <TabsContent value="Copywriting">
                  Add your Copywriting content here
                </TabsContent>
                <TabsContent value="Transcription">
                  Add your Transcription content here
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </TabsContent>
        <TabsContent value="services">
          <div>
            <SectionHeading className="text-center text-2xl font-medium py-4 text-muted-foreground">
              Services
            </SectionHeading>
            <Tabs defaultValue="Blogging" className="grid place-content-center">
              <TabsList className="border border-primary px-3">
                <TabsTrigger value="Blogging">Blogging</TabsTrigger>
                <TabsTrigger value="Copywriting">Copywriting</TabsTrigger>
                <TabsTrigger value="Editing">Editing</TabsTrigger>
                <TabsTrigger value="Administrative-Assistance">
                  Administrative Assistance
                </TabsTrigger>
                <TabsTrigger value="Human-Resources">
                  Human Resources (HR)
                </TabsTrigger>
                <TabsTrigger value="Transcription">Transcription</TabsTrigger>
              </TabsList>
              <div className="p-5 text-center lg:text-start">
                <TabsContent value="Blogging">
                  Add your Blogging content here
                </TabsContent>
                <TabsContent value="Copywriting">
                  Add your Copywriting content here
                </TabsContent>
                <TabsContent value="Editing">
                  Add your Editing content here
                </TabsContent>
                <TabsContent value="Human-Resources">
                  {" "}
                  Add your Human-Resources content here
                </TabsContent>
                <TabsContent value="Administrative-Assistance">
                  Add your Administrative-Assistance content here
                </TabsContent>
                <TabsContent value="Writing">
                  Add your Writing content here
                </TabsContent>
                <TabsContent value="Transcription">
                  Add your Transcription content here
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </TabsContent>
      </Tabs>
      <hr />
    </div>
  );
};

export default page;
