import { myWixClient } from "@/lib/WixOauth";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const { items } = await myWixClient.items.query("BookstoreCollection").find();
  return items.map((item) => ({ params: { id: item._id } }));
}

const Book = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  // Fetch book data from an API or database
  const book = await myWixClient.items.get("BookstoreCollection", id);

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
                {book?.title}
              </h2>

              <div className="flex items-center gap-x-5">
                <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  {book?.genre && book?.genre}
                </span>
                <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  {book?.publicationDate}
                </span>
              </div>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                We're proud to be a part of creating a more open culture and to
                continue building a product that supports this vision.
              </p>

              <div className="text-center">
                <div className="grid lg:grid-cols-2 gap-3">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    <figure className="relative w-full h-60">
                      <img
                        className="size-full absolute top-0 start-0 object-cover rounded-xl"
                        src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                        alt="Blog Image"
                      />
                    </figure>
                    <figure className="relative w-full h-60">
                      <img
                        className="size-full absolute top-0 start-0 object-cover rounded-xl"
                        src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                        alt="Blog Image"
                      />
                    </figure>
                  </div>
                  <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                      alt="Blog Image"
                    />
                  </figure>
                </div>

                <span className="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
                  Working process
                </span>
              </div>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                As we've grown, we've seen how Preline has helped companies such
                as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring
                their designers closer together to create amazing things. We've
                also learned that when the culture of sharing is brought in
                earlier, the better teams adapt and communicate with one
                another.
              </p>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                That's why we are excited to share that we now have a{" "}
                <a
                  className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                  href="#"
                >
                  free version of Preline
                </a>
                , which will allow individual designers, startups and other
                small teams a chance to create a culture of openness early on.
              </p>

              <blockquote className="text-center p-4 sm:px-7">
                <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                  To say that switching to Preline has been life-changing is an
                  understatement. My business has tripled and I got my life
                  back.
                </p>
                <p className="mt-5 text-gray-800 dark:text-neutral-200">
                  Nicole Grazioso
                </p>
              </blockquote>

              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1671726203454-488ab18f7eda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
                <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                  A man and a woman looking at a cell phone.
                </figcaption>
              </figure>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold dark:text-white">
                  Bringing the culture of sharing to everyone
                </h3>

                <p className="text-lg text-gray-800 dark:text-neutral-200">
                  We know the power of sharing is real, and we want to create an
                  opportunity for everyone to try Preline and explore how
                  transformative open communication can be. Now you can have a
                  team of one or two designers and unlimited spectators (think
                  PMs, management, marketing, etc.) share work and explore the
                  design process earlier.
                </p>
              </div>

              <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
                <li className="ps-2">
                  Preline allows us to collaborate in real time and is a really
                  great way for leadership on the team to stay up-to-date with
                  what everybody is working on,"{" "}
                  <a
                    className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                    href="#"
                  >
                    said
                  </a>{" "}
                  Stewart Scott-Curran, Intercom's Director of Brand Design.
                </li>
                <li className="ps-2">
                  Preline opened a new way of sharing. It's a persistent way for
                  everyone to see and absorb each other's work," said David
                  Scott, Creative Director at{" "}
                  <a
                    className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                    href="#"
                  >
                    Eventbrite
                  </a>
                  .
                </li>
              </ul>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                Small teams and individual designers need a space where they can
                watch the design process unfold, both for themselves and for the
                people they work with – no matter if it's a fellow designer,
                product manager, developer or client. Preline allows you to
                invite more people into the process, creating a central place
                for conversation around design. As those teams grow,
                transparency and collaboration becomes integrated in how they
                communicate and work together.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- End Content --> */}
      </div>
      {/* <!-- End Blog Article --> */}
    </section>
  );
};

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

export default Book;
