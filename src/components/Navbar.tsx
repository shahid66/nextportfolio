"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${
            pathname === link.path && "text-primary border-b-2 border-primary"
          } capitalize font-medium hover:text-primarytransition-all duration-300`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
