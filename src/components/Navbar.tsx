"use client";

import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const currentPath = usePathname();
  const [toggle, setToggle] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#105360]">
      <div className="flex items-center justify-between py-4 md:px-10 px-7">
        <div className="w-[120px]">
          <Logo fillColor="white" />
        </div>
        <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
          {!toggle ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-white text-3xl" />
          )}
        </div>
      </div>
      <div>
        {!toggle && (
          <ul className="flex flex-col items-center mt-5">
            {links.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  href={link.href}
                  className={`block w-full py-5 ${
                    currentPath === link.href
                      ? "bg-white text-black"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
