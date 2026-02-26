import PortfolioBtn from "./components/portfolio-btn";

export default function Home() {
  return (
    <div className=" flex flex-col mt-5 md:mt-12 ">
      <PortfolioBtn />
      <h1 className="mt-8 text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-primary  self-center text-center  ">
        Building bridges between
        <br className="sm:hidden lg:block " /> design and code
      </h1>
      <h2 className="text-secondary  mt-5 self-center text-center text-lg md:text-2xl">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto, dignissimos <br className="sm:hidden lg:block "  /> vitae alias natus enim distinctio dolore porro libero.
      </h2>
    </div>
  );
}
