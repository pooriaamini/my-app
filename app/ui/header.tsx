import Navigation from "./navigation";

export default function Header() {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const weekDay = date.toLocaleDateString("en-US", { weekday: "short" });
  const timeFormat = `${weekDay} / ${day} ${month}`;

  return (
    <div className="flex    justify-between items-center px-7 mt-5">
      {/* <div className=" hidden md:block absolute left-1/2 -translate-x-1/2 top-1  w-1/2 h-10 bg-[#049ee226] rounded-full"></div> */}

      <p className="font-mono hidden md:block text-xs">Iran/Esfahan</p>
      <Navigation />
      <p className="font-sans hidden md:block">{timeFormat}</p>
    </div>
  );
}
