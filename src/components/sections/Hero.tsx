import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-8 px-4 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <p className=" text-neutral-500 text-lg">
                www.creedthoughts.gov.www\creedthoughts
              </p>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl mb-8">
                Creed Thoughts
              </h1>
              <p className="max-w-[600px] md:text-xllg:text-base xl:text-xl">
                Ever wonder what the world looks like through Creed
                Bratton&#39;s eyes? Unfiltered, confusing, and somehow...
                profound. Welcome to Creed Thoughts—a place where logic goes to
                nap and chaos reigns supreme.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/creed-hero.png"
              width={550}
              height={550}
              alt="Hero Image"
              className="rounded-3xl object-cover w-full aspect-square md:aspect-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
