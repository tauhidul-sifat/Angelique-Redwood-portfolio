import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div
      className="min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] overflow-auto w-full
                  lg:[&::-webkit-scrollbar]:w-2
                  lg:[&::-webkit-scrollbar-track]:bg-gray-100
                  lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
                  lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                  lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Customer stories
        </h2>
        <p className="mt-1 text-gray-600">
          See how game-changing companies are making the most of every
          engagement with Preline.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 36 }).map((_, i) => {
          return (
            <a
              key={i}
              className="group block rounded-xl focus:outline-none"
              href={`/blog-and-articles/${i.toString()}`}
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                  width={400}
                  height={560}
                />
              </div>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600">
                Everything you need to know about Preline Pro.
              </h3>
              <p className="mt-2 text-sm text-gray-600">September 12, 2022</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default page;
