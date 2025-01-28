import { myWixClient } from "@/lib/WixOauth";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SingleBook({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Fetch book data from an API or database
  const book = await myWixClient.items.get("BookstoreCollection", id);
  if (!book) {
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
      {/* <!-- Blog Article --> */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        {/* <!-- Content --> */}
        <div className="lg:col-span-2 lg:px-40">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <Link
                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500"
                href="/books"
              >
                <ChevronLeft />
                Back to Books
              </Link>

              <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
                {book?.title ? book?.title : "Title not found"}
              </h2>

              <div className="flex items-center gap-x-5">
                <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  {book?.genre && book?.genre}
                </span>
                <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  {book?.publicationDate && book?.publicationDate}
                </span>
              </div>
              <div className="dark:text-white"></div>
            </div>
          </div>
        </div>
        {/* <!-- End Content --> */}
      </div>
      {/* <!-- End Blog Article --> */}
    </section>
  );
}

export const revalidate = 21600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const { items } = await myWixClient.items.query("BookstoreCollection").find();
  return items.map((item) => ({ params: { id: item._id } }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await myWixClient.items.get("BookstoreCollection", id);
  return {
    title: data?.title,
    description: data?.summary || "Description Not Available",
  };
}
