import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-4">
              <p className=" text-neutral-500 md:text-xl lg:text-base xl:text-2xl">
                John Doe
              </p>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                Transform Your Digital Experience
              </h1>
              <p className="max-w-[600px] md:text-xllg:text-base xl:text-xl">
                Our blog helps you build beautiful, fast, and accessible
                websites that stand out from the competition. Start your journey
                today.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/hero-img.jpg"
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
