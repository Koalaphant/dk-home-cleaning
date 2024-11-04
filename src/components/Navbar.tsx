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
    <nav className="w-full fixed top-0 left-0 bg-[#105360] drop-shadow-lg z-50">
      <div className="flex items-center justify-between py-4 md:px-10 px-7">
        <div className="w-[120px]">
          <Link href="/" onClick={() => setToggle(false)}>
            <Logo fillColor="white" />
          </Link>
        </div>
        <div
          className="cursor-pointer sm:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-white text-3xl" />
          )}
        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-[#105360] transform transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 visible" : "opacity-0"
        } ${!toggle && "delay-100 invisible"} sm:hidden`}
      >
        <ul className="flex flex-col items-center">
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
      </div>
    </nav>
  );
}
