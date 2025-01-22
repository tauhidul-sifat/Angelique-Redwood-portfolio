import ButtonAnimation from "@/components/animation/ButtonAnimation";
import SectionHeading from "@/components/animation/SectionHeading";
import TypingAnimation from "@/components/animation/TypingAnimation";
import { featureLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { SiFiverr, SiFreelancer } from "react-icons/si";

const page = () => {
  return (
    <div
      className="min-h-[calc(100vh-120px)] bg-[url(/bg.svg)] relative max-h-[calc(100vh-120px)] border border-gray-300/30 rounded-md overflow-auto w-full
  lg:[&::-webkit-scrollbar]:w-1
  lg:[&::-webkit-scrollbar-track]:bg-gray-100
  lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
  lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <div className=" my-10 lg:my-28 w-full flex items-center justify-center">
        <div className="text-6xl lg:text-8xl text-center font-semibold">
          <SectionHeading>
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-destructive">
              Welcome People
            </span>
            <p className="mt-2 text-center text-primary text-xl lg:text-2xl">
              <TypingAnimation />
            </p>
          </SectionHeading>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
          <div className="sm:order-2">
            <div className="relative rounded-lg">
              <Image
                className="size-full  object-cover rounded-lg"
                src="/smile.jpeg"
                alt="Blog Image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="sm:order-1">
            <p className="mb-5 inline-flex duration-300 items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-300 bg-indigo-100 dark:bg-slate-700/30 dark:border-gray-300/20">
              Freelance Writer | Passionate Reader
            </p>

            <h2 className="text-3xl font-bold lg:text-4xl ">
              I have extensive experience working in writing, editing,
              transcription, and administration.
            </h2>
            <div className="mt-8 gap-3 flex-col md:flex-row flex justify-start">
              <ButtonAnimation>
                <Link
                  className="inline-flex w-full duration-300 justify-center items-center bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br text-white gap-x-3 text-center border focus:outline-none  text-sm font-medium rounded-full px-4"
                  href={"#"}
                  target="_blank"
                >
                  <SiFiverr className="w-10 h-10 text-white" />
                  Continue with Fiverr
                </Link>
              </ButtonAnimation>
              <ButtonAnimation>
                <Link
                  className="inline-flex w-full duration-300 justify-center items-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br text-white gap-x-3 text-center border focus:outline-none  text-sm font-medium rounded-full px-4"
                  href={"#"}
                  target="_blank"
                >
                  <SiFreelancer className="w-10 h-10 text-white" />
                  Continue with Freelancer
                </Link>
              </ButtonAnimation>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      {/* <!-- Card Grid --> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
        {/* <!-- Card --> */}
        {featureLinks.map((link) => {
          const { description, label, title, url, Icon } = link;
          return (
            <Link
              key={label}
              href={url}
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-none first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:focus:from-transparent before:focus:via-transparent before:focus:to-[#ff0]/10 before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100 before:focus:opacity-100"
            >
              <div className="mb-5">
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-5xl text-white">{label}</p>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="mt-5 font-medium text-lg text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-neutral-400">{description}</p>
                </div>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-none">
                  Explore {label}
                </span>
              </p>
            </Link>
          );
        })}
      </div>
      {/* <!-- End Card Grid --> */}
    </div>
  );
};

export default page;
