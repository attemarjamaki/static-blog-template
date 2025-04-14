import { BLOG_DATA } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="py-8 md:py-20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          From The Blog
        </h2>
        <p className="text-lg mb-16">
          Read our latest articles we have posted.
        </p>
        {BLOG_DATA.map((card, index) => {
          return (
            <Link key={index} href={card.slug}>
              <div className="flex flex-col md:flex-row p-4 md:p-6 rounded-3xl hover:shadow-lg border mb-8">
                <div className="md:w-1/3">
                  <Image
                    src={card.img}
                    width={400}
                    height={400}
                    alt="Code"
                    className=" rounded-2xl object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-between md:w-2/3 md:ml-8">
                  <div className="space-y-4 ">
                    <p className=" text-neutral-500 text-sm font-light mt-4 md:mt-0">
                      {card.date}
                    </p>
                    <h3 className="text-lg font-medium">{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                  <div className="flex items-center mt-6 ">
                    <Image
                      src={card.thumb}
                      width={400}
                      height={400}
                      alt="Code"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col ml-6">
                      <p className="font-semibold">{card.author}</p>
                      <p>{card.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
