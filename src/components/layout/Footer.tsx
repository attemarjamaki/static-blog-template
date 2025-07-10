import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 md:py-16 px-4 container mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between border-t pt-6">
        <div className="text-center md:text-left">
          <Link href={"/"}>
            <p className="font-medium mb-3 text-lg">Creed Thoughts</p>
          </Link>
          <p className="mb-1">
            © {new Date().getFullYear()} All rights reversed.
          </p>
          <p>
            This website is not officially affiliated with The Office or Creed
            Bratton.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4 md:mt-0">
          <Link href="https://www.linkedin.com/">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://github.com/">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://x.com/">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
