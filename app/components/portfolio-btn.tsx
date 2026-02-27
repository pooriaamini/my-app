import Link from "next/link";

export default function PortfolioBtn() {
  return (
    <button>
      <Link
        className=" flex justify-center "
        href="/">
        <p className="flex items-center gap-2  bg-[#049ee226] dark:bg-[#13a2df99] text-[15px] font-mono      px-4 py-1.5 rounded-full text-[#045b9c] dark:text-[#0b1617]  border border-[#045b9c] dark:border-[#82f1fc] gradient-hover-btn">
          <span className="font-bold ">Project</span>
          <span className="w-px h-5 bg-[#00000080]"></span>
          <span className="text-[14px]">My Portfolio</span>
        </p> 
      </Link>
    </button>
  );
}
