import { BLOG_DATA } from "@/data/blog";
import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="py-8 md:py-20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          From The Blog
        </h2>
        <div className="flex">
          <div className="w-1/3">
            <Image
              src="/images/charts.jpg"
              width={400}
              height={400}
              alt="Code"
              className=" rounded-2xl object-cover w-full"
            />
          </div>
          <div className="w-2/3 ml-8">
            <p className=" text-neutral-500">Feb, 22, 2020</p>
            <h3>Charts are your Life</h3>
            <p>
              Unlock valuable insights with powerful data analytics tools. Track
              trends, optimize performance, and make data-driven decisions.
            </p>
            <div className="flex items-center mt-4">
              <Image
                src="/images/office-woman.jpg"
                width={400}
                height={400}
                alt="Code"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col ml-6">
                <p className="font-semibold">Michelle Scott</p>
                <p>CEO / Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
