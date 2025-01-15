import { optimizeUrl } from "@/lib/optimizeUrl";
import { myWixClient } from "@/lib/WixOauth";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
const page = async () => {
  const { items } = await myWixClient.items.query("ArticleWritingCms").find();

  return (
    <div
      className="min-h-[calc(100vh-120px)]  rounded-md border border-gray-300/30 max-h-[calc(100vh-120px)] overflow-auto w-full
                  lg:[&::-webkit-scrollbar]:w-2
                  lg:[&::-webkit-scrollbar-track]:bg-gray-100
                  lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
                  lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                  lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-16 gap-10">
          {items.map((item) => (
            <Suspense key={item._id} fallback={<h2>Loading...</h2>}>
              <Link href={`/blog-and-articles/${item._id}`}>
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <Suspense fallback={<p>Loading</p>}>
                    <Image
                      className="w-full h-64 object-cover"
                      src={optimizeUrl(item.image)}
                      alt={item.title}
                      width={400}
                      height={560}
                      loading="lazy"
                    />
                  </Suspense>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r opacity-50"></div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{item.summary}</p>
                  </div>
                </div>
              </Link>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
