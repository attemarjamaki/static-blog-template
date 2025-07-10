import Image from "next/image";
import Link from "next/link";
import { BLOG_DATA } from "@/data/blog";

export function BlogSection() {
  return (
    <section className="py-8 md:py-20 px-4 md:px-6 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Recent Thoughts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {BLOG_DATA.slice(-3).map((card, index) => {
            return (
              <Link key={index} href={card.slug}>
                <div className="border w-full h-full p-4 md:p-6 rounded-3xl hover:shadow-lg">
                  <Image
                    src={card.img}
                    width={400}
                    height={400}
                    alt="Code"
                    className="rounded-2xl object-cover w-full"
                  />
                  <div className="flex flex-col justify-between md:min-h-[240px]">
                    <div className="space-y-4">
                      <p className="mt-8 text-sm text-neutral-500 font-light">
                        {card.date}
                      </p>
                      <h3 className="text-lg font-medium">{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                    <div className="flex items-center mt-6">
                      <Image
                        src={card.thumb}
                        width={400}
                        height={400}
                        alt="Code"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <p className="ml-2">{card.author}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-end mt-8">
          <Link href={"/blog"} className="hover:underline">
            <p>Read All Thoughts</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
