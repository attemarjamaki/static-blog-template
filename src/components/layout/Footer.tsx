import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div>
          <Link href={"/"}>
            <p className="font-medium">John's Blog</p>
          </Link>
          <p>
            © {new Date().getFullYear()} All rights reversed. Just kidding,
            they're reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <Link href="https://www.linkedin.com/in/attemarjamaki/">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://github.com/attemarjamaki">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://x.com/lappersdigital">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
