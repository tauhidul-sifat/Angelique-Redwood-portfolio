import { optimizeUrl } from "@/lib/optimizeUrl";
import { myWixClient } from "@/lib/WixOauth";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const page = async () => {
  const { items } = await myWixClient.items.query("BookstoreCollection").find();
  console.log(items);
  return (
    <section
      className="py-10 min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] overflow-auto w-full bg-gray-100 sm:py-16 lg:py-24 lg:[&::-webkit-scrollbar]:w-1
              lg:[&::-webkit-scrollbar-track]:bg-gray-100
              lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
              lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
              lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our book collection
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          {items.map((item) => {
            return (
              <Suspense key={item._id} fallback={<h2>Loading...</h2>}>
                <Link href={`/blog-and-articles/`}>
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <Suspense fallback={<p>Loading</p>}>
                      <Image
                        className="w-full h-64 object-cover"
                        src={optimizeUrl(item.coverImage)}
                        alt={item.title}
                        width={400}
                        height={560}
                        loading="lazy"
                      />
                    </Suspense>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r opacity-50"></div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{item.author}</h3>
                      <p className="mt-2 text-sm text-gray-500">{item.title}</p>
                    </div>
                  </div>
                </Link>
              </Suspense>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
