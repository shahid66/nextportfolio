"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
const links = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center ">
        <CiMenuFries className="w-10 h-10" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-black">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-primary text-4xl font-semibold">
              KK<span className="text-white">.</span>SHAHID
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-xl capitalize hover: text-white transition-all duration-300 ${
                pathname === link.path && "text-white border-b-2 "
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
