import { CgProfile } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center gap-2 fixed bottom-6 left-1/2 -translate-x-1/2 md:static md:translate-x-0  shadow-xs    bg-white  shadow-gray-500 rounded-s-full rounded-e-full w-[25rem] px-2 py-3">
      <div>
        <IoMdHome className="bg-white text-black text-xl rounded-full w-7 h-7 p-1 " />
      </div>
      <p className="border-l border-gray-300"></p>
      <div>
        <CgProfile className="bg-white text-black text-xl rounded-full w-7 h-7 p-1 " />
      </div>
      <div>
        <CgProfile className="bg-white text-black text-xl rounded-full w-7 h-7 p-1 " />
      </div>
      <div>
        <CgProfile className="bg-white text-black text-xl rounded-full w-7 h-7 p-1 " />
      </div>
    </div>
  );
}
