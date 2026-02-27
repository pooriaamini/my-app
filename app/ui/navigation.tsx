"use client";

import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaImage } from "react-icons/fa6";
import { ImFilePicture } from "react-icons/im";
import Link from "next/link";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { usePathname } from "next/navigation"; // استفاده از این هوک

const links = [
  { name: "About", href: "/about", icon: CgProfile },
  { name: "Work", href: "/work", icon: HiMiniSquare3Stack3D },
  { name: "Blog", href: "/blog", icon: FaImage },
  { name: "Gallery", href: "/gallery", icon: ImFilePicture },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between   items-center  fixed bottom-6  left-1/2 -translate-x-1/2 text-text-primary md:static md:translate-x-0 bg-primary shadow-xs bg-white dark:bg-black shadow-bg-secondry border border-color rounded-s-full rounded-e-full min-w-55 md:min-w-115 px-1 py-2">
      {/* Home with separator */}
      <div className="flex   gap-2 items-center justify-center ">
        <Link
          className={`p-2 rounded-full ${pathname === "/" ? "bg-[#95959526]" : ""}`}
          href="/"
        >
          <IoMdHome className="text-text-primary" />
        </Link>
        <p className="h-6 w-[.5px] bg-[#9595954d]" />
      </div>

      {/* Navigation links */}
      {links.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            href={item.href}
            key={index}
            className={`flex  items-center gap-2 hover:bg-[#9595954d] transition-all duration-100 px-2 p-2 md:py-1.5 rounded-full ${
              pathname === item.href ? "bg-[#95959526]" : ""
            }`}
          >
            <Icon className="text-text-primary w-3.5 h-3.5" />
            <p className="hidden md:block font-mono text-[14px]">{item.name}</p>
          </Link>
        );
      })}

      <ThemeToggle />
    </div>
  );
}
