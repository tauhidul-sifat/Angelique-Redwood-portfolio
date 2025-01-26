import { myWixClient } from "@/lib/WixOauth";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
const RichContentViewer = dynamic(
  () => import("@/components/RichContentViewer")
);
const Article = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const article = await myWixClient.items.get("ArticleWritingCms", id);
  if (!article) {
    notFound();
  }
  return (
    <section
      className="py-10 min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] rounded-md border border-gray-300/30 overflow-auto w-full sm:py-10 lg:[&::-webkit-scrollbar]:w-1
              lg:[&::-webkit-scrollbar-track]:bg-gray-100
              lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
              lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
              lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      {/* <!-- article Article --> */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        {/* <!-- Content --> */}
        <div className="lg:col-span-2 lg:px-40">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <Link
                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500"
                href="/articles"
              >
                <ChevronLeft />
                Back to articles
              </Link>

              <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
                {article?.title}
              </h2>

              <div className="flex items-center gap-x-5">
                <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  {article?.topic && article?.topic}
                </span>
                <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  {article?.publishDate && article?.publishDate}
                </span>
              </div>
              {/* ------------------------------------------------------------------------------ */}
              {article?.richcontent && (
                <RichContentViewer content={article?.richcontent} />
              )}
            </div>
          </div>
        </div>
        {/* <!-- End Content --> */}
      </div>
      {/* <!-- End article Article --> */}
    </section>
  );
};

// export async function generateStaticParams() {
//   const { items } = await myWixClient.items.query("ArticleWritingCms").find();
//   return items.map((item) => ({ params: { id: item._id } }));
// }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await myWixClient.items.get("ArticleWritingCms", id as string);
  return {
    title: data?.title,
    description: data?.summary || "Description Not Available",
  };
}

export default Article;
