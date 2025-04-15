import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8 px-4 container mx-auto">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link href={"/"}>
          <div className="text-2xl font-semibold">Creed Thoughts</div>
        </Link>
        <div className="flex gap-8">
          <Link href="/about" className="text-lg hover:underline">
            About
          </Link>
          <Link href="/blog" className="text-lg hover:underline">
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
