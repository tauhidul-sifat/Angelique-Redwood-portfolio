import { LoadingCard } from "@/components/CardLoading";
import { myWixClient } from "@/lib/WixOauth";
import { media } from "@wix/sdk";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function ArticlesPage() {
  const { items } = await myWixClient.items.query("ArticleWritingCms").find();
  console.log("Article pages loaded");

  return (
    <div
      className="min-h-[calc(100vh-120px)] bg-[url(/bg.svg)]  rounded-md border border-gray-300/30 max-h-[calc(100vh-120px)] overflow-auto w-full
                  lg:[&::-webkit-scrollbar]:w-2
                  lg:[&::-webkit-scrollbar-track]:bg-gray-100
                  lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
                  lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                  lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <div className=" px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl font-bold leading-tight pb-5 uppercase sm:text-4xl lg:text-5xl">
          ARTICLES
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-16 gap-10">
          {items?.map((item) => (
            <Suspense key={item._id} fallback={<LoadingCard />}>
              <Link href={`articles/${item._id}`}>
                <div className="relative rounded-lg overflow-hidden duration-300 backdrop-blur-lg hover:scale-105 hover:shadow-2xl lg:hover:translate-x-3 border border-gray-300/30">
                  <Image
                    className="w-full h-64 object-cover"
                    src={media.getScaledToFillImageUrl(
                      item.image,
                      600,
                      700,
                      {}
                    )}
                    alt={item.title}
                    width={400}
                    height={560}
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-lg line-clamp-2 font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {item.summary && item.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Blog & Articles | Angelique Redwood",
    description: `Dive into the world of ideas and insights with Angelique Redwood's blog and articles. Explore a diverse range of topics, from thought-provoking essays to engaging narratives.
`,
  };
}
