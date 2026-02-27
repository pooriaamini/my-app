import Link from "next/link";
import image from "@/public/image.png";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";


export default function AboutBtn() {
  return (
    <button className=" about-btn flex justify-center mt-8   ">
      <Link
        className="link flex items-center gap-3 border border-color rounded-full pl-2  py-1.5"
        href="/">
        <Image
          className="rounded-full"
          alt="image"
          src={image}
          width={30}
          height={30}
        ></Image>
        <span className="font-sans " >About - Pooria</span>
        <FaChevronRight className=" arrow text-xs" />
      </Link>
    </button>
  );
}
