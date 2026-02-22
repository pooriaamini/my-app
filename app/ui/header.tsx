import { log } from "node:console";
import Navigation from "./navigation";

export default function Header() {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const weekDay = date.toLocaleDateString("en-US", { weekday: "short" });
  const timeFormat = `${weekDay} / ${day} ${month}`;

  return (
    <div className="flex justify-between items-center px-7 mt-8">
      <p className="font-mono hidden md:block text-xs">Iran/Esfahan</p>
      <Navigation />
      <p className="font-sans hidden md:block">{timeFormat}</p>
    </div>
  );
}
