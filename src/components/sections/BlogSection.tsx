import Image from "next/image";
import Link from "next/link";

export function BlogSection() {
  return (
    <section className="py-8 md:py-20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          From The Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="border w-full p-4 md:p-6 rounded-3xl">
            <Image
              src="/images/charts.jpg"
              width={400}
              height={400}
              alt="Code"
              className=" rounded-2xl object-cover w-full"
            />
            <div className="space-y-4">
              <p className="mt-8 text-sm text-neutral-500 font-light">
                Mar, 12, 2020
              </p>
              <h3 className="text-lg font-medium">
                Data analysis helps growth
              </h3>
              <p>
                Unlock valuable insights with powerful data analytics tools.
                Track trends, optimize performance, and make data-driven
                decisions.
              </p>
            </div>
            <div className="flex items-center mt-8">
              <Image
                src="/images/office-woman.jpg"
                width={400}
                height={400}
                alt="Code"
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="ml-2">Michelle Scott</p>
            </div>
          </div>
          <div className="border w-full p-4 md:p-6 rounded-3xl">
            <Image
              src="/images/security.jpg"
              width={400}
              height={400}
              alt="Code"
              className=" rounded-2xl object-cover w-full"
            />
            <div className="space-y-4">
              <p className="mt-8 text-sm text-neutral-500 font-light">
                Feb, 22, 2020
              </p>
              <h3 className="text-lg font-medium">Cybersecurity</h3>
              <p>
                Protect your business with advanced security solutions.
                Safeguard data, detect threats, and prevent cyberattacks in
                real-time.
              </p>
            </div>
            <div className="flex items-center mt-8">
              <Image
                src="/images/office-woman.jpg"
                width={400}
                height={400}
                alt="Code"
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="ml-2">Michelle Scott</p>
            </div>
          </div>
          <div className="border w-full p-4 md:p-6 rounded-3xl">
            <Image
              src="/images/code-snippet.jpg"
              width={400}
              height={400}
              alt="Code"
              className=" rounded-2xl object-cover w-full"
            />
            <div className="space-y-4">
              <p className="mt-8 text-sm text-neutral-500 font-light">
                Jan, 11, 2020
              </p>
              <h3 className="text-lg font-medium">Web Development</h3>
              <p>
                Build stunning, high-performance websites and applications.
                Custom designs, seamless functionality, and optimized user
                experiences.
              </p>
            </div>
            <div className="flex items-center mt-8">
              <Image
                src="/images/office-woman.jpg"
                width={400}
                height={400}
                alt="Code"
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="ml-2">Michelle Scott</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8 hover:underline">
          <Link href={"/blog"}>Read All Articles</Link>
        </div>
      </div>
    </section>
  );
}
