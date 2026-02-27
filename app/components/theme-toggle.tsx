"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
  return (
      <div className="flex  gap-2 items-center">
        <p className="h-6 w-[.5px] bg-[#9595954d] " />
        <div className="bg-gray-200 dark:bg-[#95959526] p-2 rounded-full w-7.5 h-7.5" />
      </div>
    );  }

  return (
    <button
      className=" text-sm "
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="flex gap-2 items-center ">
        <p className="h-6 w-[.5px] bg-[#9595954d] "  />
           <div className="bg-[#95959526] p-2 rounded-full">
             {theme === "dark" ? (
                     <MdSunny className="text-text-primary  " />
                   ) : (
                     <IoMoonOutline className="" />
                   )}
           </div>
      </div>
   
    </button>
  );
}
